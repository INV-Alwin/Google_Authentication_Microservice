"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function AuthSuccessContent() {
  const params = useSearchParams();
  const token = params.get("token");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-4">Authentication Successful 🎉</h1>

      <p className="mb-4">Here is your JWT Access Token:</p>

      {token ? (
        <pre className="bg-gray-100 p-4 rounded-md max-w-2xl overflow-auto border">
          {token}
        </pre>
      ) : (
        <p className="text-red-500">No token found in query params.</p>
      )}

      <p className="mt-6 text-gray-500">
        You can now copy this token and test protected API routes.
      </p>
    </div>
  );
}

export default function AuthSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthSuccessContent />
    </Suspense>
  );
}

