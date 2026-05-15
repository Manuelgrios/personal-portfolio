import type { HTMLAttributes, ReactNode } from "react";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Tag({ children, className = "", ...props }: TagProps) {
  return (
    <span
      {...props}
      className={`inline-flex rounded-full border border-border bg-surface-soft px-3 py-1 text-xs font-medium text-muted ${className}`}
    >
      {children}
    </span>
  );
}
