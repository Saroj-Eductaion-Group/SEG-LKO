"use client";

import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login - Seglko Admin";
  }, []);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/login.webp"
          alt="Image"
          width={200}
          height={200}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
