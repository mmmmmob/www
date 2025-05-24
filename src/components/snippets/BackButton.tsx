"use client";

import { useRouter } from "next/navigation";
import { JSX } from "react";

/**
 * A reusable back button component for navigation in Next.js applications.
 *
 * @component
 * @param {string} [props.label="Back"] - The label to display on the button (Opt.).
 * @param {string} [props.to="/blogs"] - The path to navigate to when the button is clicked (Opt.).
 * @returns {JSX.Element} The rendered back button.
 *
 * @example
 * <BackButton label="Go Back" to="/home" />
 */
// to be using as a client component on server-rendered page like /blogs or /blogs/[slug]
export const BackButton = ({
  label = "Back",
  to = "/blogs",
}: {
  label?: string;
  to?: string;
}): JSX.Element => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to)}
      className="mb-5 ml-4 text-base hover:underline"
    >
      ← {label}
    </button>
  );
};
