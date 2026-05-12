import connectDb from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import crypto from "crypto";

function checkOrigin(req) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (!origin) return true;
  try {
    const originHost = new URL(origin).host;
    return originHost === host;
  } catch {
    return false;
  }
}

const failedAttempts = new Map();
const MAX_ATTEMPTS = 5;

export async function POST(req) {
  try {
    if (!checkOrigin(req)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDb();
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    const sanitizedEmail = email.toLowerCase().trim();

    // Brute force protection
    const attempts = failedAttempts.get(sanitizedEmail) || 0;
    if (attempts >= MAX_ATTEMPTS) {
      return NextResponse.json(
        { error: "Too many failed attempts. Please request a new OTP." },
        { status: 429 }
      );
    }

    const user = await User.findOne({ email: sanitizedEmail });

    if (!user || !user.otp || !user.otpExpires) {
      failedAttempts.set(sanitizedEmail, attempts + 1);
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    // Check OTP expiry
    if (new Date() > new Date(user.otpExpires)) {
      user.otp = null;
      user.otpExpires = null;
      await user.save();
      failedAttempts.delete(sanitizedEmail);
      return NextResponse.json({ error: "OTP has expired. Please request a new one." }, { status: 400 });
    }

    // Timing-safe OTP comparison
    const otpBuffer = Buffer.from(user.otp);
    const inputBuffer = Buffer.from(otp.trim());
    const isValid =
      otpBuffer.length === inputBuffer.length &&
      crypto.timingSafeEqual(otpBuffer, inputBuffer);

    if (!isValid) {
      failedAttempts.set(sanitizedEmail, attempts + 1);
      const remaining = MAX_ATTEMPTS - (attempts + 1);
      return NextResponse.json(
        { error: `Invalid OTP. ${remaining} attempts remaining.` },
        { status: 400 }
      );
    }

    failedAttempts.delete(sanitizedEmail);
    return NextResponse.json({ success: true, message: "OTP verified successfully." });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
