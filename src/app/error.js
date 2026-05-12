"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black p-6">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6">{error?.message ?? "An unexpected error occurred."}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
