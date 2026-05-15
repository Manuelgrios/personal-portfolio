import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-3xl border border-border/80 bg-card/82 p-6 shadow-[0_0_48px_rgb(37_99_235_/_0.08)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
