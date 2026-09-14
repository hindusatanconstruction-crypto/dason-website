
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          "section, h1, h2, h3, p, a, img, .text-5xl, .text-6xl, .text-7xl",
          {
            opacity: 1,
            y: 0,
            scale: 1,
          }
        );
        return;
      }

      /* =========================
         HERO INTRO
      ========================= */

      const hero = document.querySelector<HTMLElement>("#hero");
      const heroTitle = document.querySelector<HTMLElement>("#hero-title");
      const heroSubtitle =
        document.querySelector<HTMLElement>("#hero-subtitle");
      const heroButton = document.querySelector<HTMLElement>("#hero-button");
      const heroScroll = document.querySelector<HTMLElement>("#hero-scroll");

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      if (hero) {
        gsap.fromTo(
          hero,
          { backgroundSize: "100%" },
          {
            backgroundSize: "112%",
            duration: 16,
            ease: "power1.out",
          }
        );
      }

      if (heroTitle) {
        heroTimeline.fromTo(
          heroTitle,
          {
            y: 80,
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.4,
          },
          0.2
        );
      }

      if (heroSubtitle) {
        heroTimeline.fromTo(
          heroSubtitle,
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          0.8
        );
      }

      if (heroButton) {
        heroTimeline.fromTo(
          heroButton,
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          1
        );
      }

      if (heroScroll) {
        gsap.to(heroScroll, {
          y: 10,
          opacity: 0.4,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
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
          "h2, h3, p, a, button"
        );

        if (!elements.length) return;

        gsap.fromTo(
          elements,
          {
            y: 38,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================
         IMAGE REVEALS
      ========================= */

      const images = Array.from(
        document.querySelectorAll<HTMLImageElement>("img")
      );

      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            opacity: 0,
            scale: 1.08,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 88%",
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
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =========================
         STAT NUMBERS
      ========================= */

      const numbers = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".text-5xl, .text-6xl, .text-7xl"
        )
      );

      if (numbers.length) {
        gsap.fromTo(
          numbers,
          {
            y: 25,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: numbers[0],
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      /* =========================
         PREMIUM LINK HOVER
      ========================= */

      const links = Array.from(
        document.querySelectorAll<HTMLAnchorElement>("a")
      );

      links.forEach((link) => {
        const enter = () => {
          gsap.to(link, {
            y: -3,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(link, {
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        link.addEventListener("mouseenter", enter);
        link.addEventListener("mouseleave", leave);

        gsap.set(link, {
          willChange: "transform",
        });
      });

      /* =========================
         PROJECT IMAGE HOVER
      ========================= */

      const projectImages = Array.from(
        document.querySelectorAll<HTMLImageElement>("#projects img")
      );

      projectImages.forEach((image) => {
        const enter = () => {
          gsap.to(image, {
            scale: 1.06,
            duration: 0.65,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          });
        };

        image.addEventListener("mouseenter", enter);
        image.addEventListener("mouseleave", leave);

        gsap.set(image, {
          willChange: "transform",
        });
      });

      /* =========================
         SMOOTH ANCHOR SCROLL
      ========================= */

      const anchorLinks = Array.from(
        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      );

      anchorLinks.forEach((link) => {
        const handleClick = (event: MouseEvent) => {
          const href = link.getAttribute("href");

          if (!href || href === "#") return;

          const target = document.querySelector<HTMLElement>(href);

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        };

        link.addEventListener("click", handleClick);
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}