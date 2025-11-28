"use client";

import { useGoogleLogin } from "@react-oauth/google";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GoogleAuthBtn() {
  const router = useRouter();

  const login = useGoogleLogin({
    flow: "auth-code",

    onSuccess: async (response) => {
      try {
        const backendResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_BFF_URL}/google/callback/`,
          { code: response.code },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 10000, // 10 second timeout
          }
        );

        if (backendResponse.status === 200) {
          toast.success("Logged in successfully 🎉");
          router.push(`/auth-success?token=${backendResponse.data.access}`);
        } else {
          toast.error("Authentication failed");
        }

      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const err = error as AxiosError;
          console.error("Backend/Auth Error:", err.response?.data);

          if (err.response?.status === 400) {
            toast.error("Invalid authorization code");
          } else if (err.response?.status === 500) {
            toast.error("Server error. Please try again.");
          } else if (err.code === 'ECONNABORTED') {
            toast.error("Request timeout. Please try again.");
          } else {
            toast.error("Authentication failed. Please try again.");
          }
        } else {
          console.error("Unknown error:", error);
          toast.error("Something went wrong");
        }
      }
    },

    onError: () => toast.error("Google Login Failed ❌"),
  });

  return (
    <button
      onClick={() => login()}
      className="flex w-full items-center justify-center gap-2 rounded-sm border px-4 py-2.5 hover:bg-gray-100"
    >
      <Image src="/icons/google.svg" alt="Google Icon" width={24} height={24} />
      Continue with Google
    </button>
  );
}
