"use client";
import { useEffect, useRef, ReactNode } from "react";

type Props = { children: ReactNode; delay?: number; className?: string; as?: keyof JSX.IntrinsicElements };

export default function Reveal({ children, delay = 0, className = "", as: As = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("visible"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  // @ts-expect-error dynamic tag
  return <As ref={ref} className={`reveal ${className}`}>{children}</As>;
}
