import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function PageContainer({
  title,
  children,
}: Props) {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">{title}</h1>

      {children}
    </div>
  );
}