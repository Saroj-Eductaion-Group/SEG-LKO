"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.title = "Forget Password - Seglko Admin";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("OTP sent to your email!");
        // Store email in sessionStorage for next steps
        sessionStorage.setItem("resetEmail", email);
        router.push("/admin/verify-otp");
      } else {
        toast.error(data.error || "Something went wrong");
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
          <h2 className="text-center text-2xl font-semibold mb-2">Forgot your password?</h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Enter your registered email to receive an OTP.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8 mt-10">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <><Loader2 className="animate-spin mr-2" />Sending OTP...</> : "Send OTP"}
            </Button>
          </form>

          <Link href="/admin">
            <Button className="w-full my-3" variant="secondary">Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
