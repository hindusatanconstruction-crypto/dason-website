"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         HERO INTRO
      ========================= */

      const hero = document.querySelector<HTMLElement>("#hero");
      const heroTitle = document.querySelector<HTMLElement>("#hero-title");
      const heroSubtitle =
        document.querySelector<HTMLElement>("#hero-subtitle");
      const heroButton = document.querySelector<HTMLElement>("#hero-button");
      const heroScroll = document.querySelector<HTMLElement>("#hero-scroll");

      if (hero) {
        gsap.fromTo(
          hero,
          {
            backgroundSize: "100%",
          },
          {
            backgroundSize: "112%",
            duration: 12,
            ease: "power1.out",
          }
        );
      }

      if (heroTitle) {
        gsap.fromTo(
          heroTitle,
          {
            y: 100,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: 0.3,
            ease: "power4.out",
          }
        );
      }

      if (heroSubtitle) {
        gsap.fromTo(
          heroSubtitle,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.8,
            ease: "power3.out",
          }
        );
      }

      if (heroButton) {
        gsap.fromTo(
          heroButton,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1,
            ease: "power3.out",
          }
        );
      }

      /* =========================
         SCROLL INDICATOR
      ========================= */

      if (heroScroll) {
        gsap.to(heroScroll, {
          y: 12,
          opacity: 0.35,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      /* =========================
         SECTION REVEALS
      ========================= */

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section")
      );

      sections.forEach((section, index) => {
        if (index === 0) return;

        const elements = section.querySelectorAll<HTMLElement>(
          "h2, h3, p, a"
        );

        if (!elements.length) return;

        gsap.fromTo(
          elements,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================
         IMAGE REVEAL
      ========================= */

      const images = Array.from(
        document.querySelectorAll<HTMLImageElement>("img")
      );

      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================
         HEADINGS
      ========================= */

      const headings = Array.from(
        document.querySelectorAll<HTMLElement>("h2")
      );

      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================
         STAT NUMBERS
      ========================= */

      sections.forEach((section) => {
        const numbers = section.querySelectorAll<HTMLElement>(
          ".text-5xl, .text-6xl, .text-7xl"
        );

        if (!numbers.length) return;

        gsap.fromTo(
          numbers,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================
         BUTTON HOVER
      ========================= */

      const buttons = Array.from(
        document.querySelectorAll<HTMLAnchorElement>("a")
      );

      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            y: -3,
            duration: 0.25,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          });
        });
      });

      /* =========================
         PROJECT IMAGE HOVER
      ========================= */

      const projectImages = Array.from(
        document.querySelectorAll<HTMLImageElement>("#projects img")
      );

      projectImages.forEach((image) => {
        image.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.05,
            duration: 0.7,
            ease: "power3.out",
          });
        });

        image.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          });
        });
      });

      /* =========================
         SMOOTH ANCHOR SCROLL
      ========================= */

      const anchorLinks = Array.from(
        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      );

      anchorLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          const href = link.getAttribute("href");

          if (!href || href === "#") return;

          const target = document.querySelector<HTMLElement>(href);

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });

      /* =========================
         REFRESH
      ========================= */

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}