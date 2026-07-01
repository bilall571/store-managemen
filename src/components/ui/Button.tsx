import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}