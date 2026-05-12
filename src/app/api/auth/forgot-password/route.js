import connectDb from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import crypto from "crypto";
import sendOtpEmail from "@/services/sendEmail";

// CSRF check - only allow requests from same origin
function checkOrigin(req) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (!origin) return true; // server-side requests
  try {
    const originHost = new URL(origin).host;
    return originHost === host;
  } catch {
    return false;
  }
}

export async function POST(req) {
  try {
    // CSRF Protection
    if (!checkOrigin(req)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDb();
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const sanitizedEmail = email.toLowerCase().trim();

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const user = await User.findOne({ email: sanitizedEmail });

    // Always return success to prevent email enumeration
    if (!user) {
      return NextResponse.json({ success: true, message: "If this email exists, an OTP has been sent." });
    }

    // Check if OTP was recently sent (prevent spam - 1 min cooldown)
    if (user.otpExpires && new Date(user.otpExpires) > new Date(Date.now() + 9 * 60 * 1000)) {
      return NextResponse.json({ error: "OTP already sent. Please wait 1 minute before requesting again." }, { status: 429 });
    }

    // Generate secure 6 digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    await sendOtpEmail(user.email, otp, user.name);

    return NextResponse.json({ success: true, message: "OTP sent to your email." });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
