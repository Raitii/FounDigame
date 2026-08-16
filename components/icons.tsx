import type { SVGProps } from "react";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 42 42" aria-hidden="true">
      <path d="M8 4h26l5 9-18 25L3 13 8 4Z" fill="currentColor" />
      <path d="m10 12 11 18 11-18-7 4-4-8-4 8-7-4Z" fill="#0b1020" />
    </svg>
  );
}

export function PixelSpark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6V2Z" />
    </svg>
  );
}
