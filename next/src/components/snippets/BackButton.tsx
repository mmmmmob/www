"use client";

import { useRouter } from "next/navigation";

export default function BackButton({
  label = "← Back",
  to = "/blogs",
}: {
  label?: string;
  to?: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to)}
      className="mb-5 ml-4 text-base hover:underline"
    >
      {label}
    </button>
  );
}
