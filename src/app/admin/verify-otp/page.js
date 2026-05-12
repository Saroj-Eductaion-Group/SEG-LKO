"use client";

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.title = "Verify OTP - Seglko Admin";
    const storedEmail = sessionStorage.getItem("resetEmail");
    if (!storedEmail) {
      toast.error("Session expired. Please start again.");
      router.push("/admin/forget-password");
    } else {
      setEmail(storedEmail);
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) return toast.error("Please enter the complete 6-digit OTP");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("OTP verified!");
        sessionStorage.setItem("resetOtp", otp);
        router.push("/admin/reset-password");
      } else {
        toast.error(data.error || "Invalid OTP");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <Image src="/futuristic3.jpg" alt="Background" fill className="absolute inset-0 object-cover" priority />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-center text-2xl font-semibold mb-2">Verify OTP</h2>
          <p className="text-center text-sm text-gray-600 mb-2">
            OTP sent to: <strong>{email}</strong>
          </p>
          <p className="text-center text-sm text-gray-500 mb-6">Valid for 10 minutes</p>

          <form onSubmit={handleSubmit} className="space-y-8 mt-10">
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button type="submit" className="w-full" disabled={loading || otp.length !== 6}>
              {loading ? <><Loader2 className="animate-spin mr-2" />Verifying...</> : "Verify OTP"}
            </Button>
          </form>

          <Link href="/admin/forget-password">
            <Button className="w-full my-3" variant="secondary">Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
