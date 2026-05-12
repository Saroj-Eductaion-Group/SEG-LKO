"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeOff, Eye, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.title = "Reset Password - Seglko Admin";
    const storedEmail = sessionStorage.getItem("resetEmail");
    const storedOtp = sessionStorage.getItem("resetOtp");
    if (!storedEmail || !storedOtp) {
      toast.error("Session expired. Please start again.");
      router.push("/admin/forget-password");
    } else {
      setEmail(storedEmail);
      setOtp(storedOtp);
    }
  }, [router]);

  const passwordStrength = () => {
    if (!password) return null;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasLength = password.length >= 8;
    const score = [hasUpper, hasLower, hasNumber, hasLength].filter(Boolean).length;
    if (score <= 2) return { label: "Weak", color: "bg-red-500" };
    if (score === 3) return { label: "Medium", color: "bg-yellow-500" };
    return { label: "Strong", color: "bg-green-500" };
  };

  const isPasswordValid = () => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPasswordValid()) return toast.error("Password must be 8+ chars with uppercase, lowercase and number");
    if (password !== confirmPassword) return toast.error("Passwords do not match");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword: password }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Password reset successfully!");
        sessionStorage.removeItem("resetEmail");
        sessionStorage.removeItem("resetOtp");
        setTimeout(() => router.push("/admin"), 1500);
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const strength = passwordStrength();

  return (
    <div className="relative min-h-screen w-full">
      <Image src="/futuristic3.jpg" alt="Background" fill className="absolute inset-0 object-cover" priority />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-center text-2xl font-semibold mb-2">Reset your password</h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Must have: 8+ chars, uppercase, lowercase & number
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 mt-5">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Min. 8 characters"
                />
                <Button type="button" onClick={() => setShowPassword(!showPassword)} variant="outline" size="icon" className="absolute right-0 top-0">
                  {showPassword ? <EyeOff /> : <Eye />}
                </Button>
              </div>
              {strength && (
                <div className="flex items-center gap-2 mt-1">
                  <div className={`h-1.5 flex-1 rounded-full ${strength.color}`}></div>
                  <span className="text-xs text-gray-500">{strength.label}</span>
                </div>
              )}
              <ul className="text-xs text-gray-500 space-y-0.5 mt-1">
                <li className={password.length >= 8 ? "text-green-600" : ""}>✓ At least 8 characters</li>
                <li className={/[A-Z]/.test(password) ? "text-green-600" : ""}>✓ One uppercase letter</li>
                <li className={/[a-z]/.test(password) ? "text-green-600" : ""}>✓ One lowercase letter</li>
                <li className={/\d/.test(password) ? "text-green-600" : ""}>✓ One number</li>
              </ul>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Re-enter password"
                />
                <Button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} variant="outline" size="icon" className="absolute right-0 top-0">
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </Button>
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}
              {confirmPassword && password === confirmPassword && (
                <p className="text-green-500 text-sm">✓ Passwords match</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading || !isPasswordValid() || password !== confirmPassword}
            >
              {loading ? <><Loader2 className="animate-spin mr-2" />Resetting...</> : "Reset Password"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
