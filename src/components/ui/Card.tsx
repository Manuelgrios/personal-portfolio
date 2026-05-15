import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-lg border border-border bg-surface/72 p-6 shadow-[0_0_40px_rgb(56_189_248_/_0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
