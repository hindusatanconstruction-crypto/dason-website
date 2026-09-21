
"use client";

import { useEffect, useRef } from "react";

export default function Animations() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(
      "[data-animate], .animate-on-scroll"
    );

    elements.forEach((element) => {
      element.classList.add("before-visible");
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <style jsx global>{`
      .before-visible {
        opacity: 0;
        transform: translateY(28px);
        transition:
          opacity 0.8s ease,
          transform 0.8s ease;
      }

      .before-visible.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      [data-animate="left"] {
        opacity: 0;
        transform: translateX(-35px);
        transition:
          opacity 0.8s ease,
          transform 0.8s ease;
      }

      [data-animate="right"] {
        opacity: 0;
        transform: translateX(35px);
        transition:
          opacity 0.8s ease,
          transform 0.8s ease;
      }

      [data-animate="scale"] {
        opacity: 0;
        transform: scale(0.94);
        transition:
          opacity 0.8s ease,
          transform 0.8s ease;
      }

      [data-animate="left"].is-visible,
      [data-animate="right"].is-visible,
      [data-animate="scale"].is-visible {
        opacity: 1;
        transform: translateX(0) scale(1);
      }

      @media (prefers-reduced-motion: reduce) {
        .before-visible,
        [data-animate="left"],
        [data-animate="right"],
        [data-animate="scale"] {
          opacity: 1;
          transform: none;
          transition: none;
        }
      }
    `}</style>
  );
}