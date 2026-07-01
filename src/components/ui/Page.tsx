import type { ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

export default function Page({
  title,
  children,
}: PageProps) {
  return (
    <section className="space-y-5 p-4">
      <h1 className="text-2xl font-bold">{title}</h1>

      {children}
    </section>
  );
}