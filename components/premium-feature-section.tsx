"use client";

import { useLayoutEffect, useRef } from "react";
import { PremiumFeatureCard } from "@/components/premium-feature-card";

const cards = [
  {
    surfaceClassName: "bg-[#49659c]",
    footerClassName: "bg-[#cdddfd]",
    footerTopClassName: "top-[calc(274px*0.88)]",
    image: "/figma/frame-x-unlocking.png",
    imageAlt: "Free plan with real question images locked, and Premium with the question unlocked",
    imageClassName:
      "top-[calc(41.41px*0.88)] left-[calc(15px*0.88)] h-[calc(261px*0.88)] w-[calc(325px*0.88)]",
    title: "See What You’re Unlocking",
    body: "Preview real OA questions and unlock the full experience with Premium.",
    bodyClassName: "w-[calc(289px*0.88)]",
  },
  {
    surfaceClassName: "bg-[#a25a5a]",
    footerClassName: "bg-[#fddada]",
    footerTopClassName: "top-[calc(273px*0.88)]",
    image: "/figma/frame-x-credits.png",
    imageAlt: "Free plan with 0 credits and Premium with 1500 credits",
    imageClassName:
      "top-[calc(34.41px*0.88)] left-[calc(24px*0.88)] h-[calc(225px*0.88)] w-[calc(301px*0.88)]",
    title: "Never Run Out of Help",
    body: "Get more Helper Agent Credits to get unstuck and keep practising.",
    bodyClassName: "w-[calc(289px*0.88)]",
  },
  {
    surfaceClassName: "bg-[#534f87]",
    footerClassName: "bg-[#d6d4f4]",
    footerTopClassName: "top-[calc(273px*0.88)]",
    image: "/figma/frame-x-companies.png",
    imageAlt:
      "Free plan with locked company questions and Premium with Apple, Amazon, Google, and Microsoft",
    imageClassName:
      "top-[calc(34px*0.88)] left-[calc(21px*0.88)] h-[calc(307px*0.88)] w-[calc(328px*0.88)]",
    title: "Know What They Ask",
    body: "Practice real questions from top companies and prepare smarter.",
    bodyClassName: "w-full",
  },
] as const;

const fan = [
  { rot: -8, x: -8, y: -6, z: 3 },
  { rot: 5, x: 16, y: 12, z: 2 },
  { rot: 12, x: 28, y: 20, z: 1 },
] as const;

const fanMobile = [
  { rot: -5, x: 0, y: -4, z: 3 },
  { rot: 3, x: 0, y: 8, z: 2 },
  { rot: 7, x: 0, y: 16, z: 1 },
] as const;

function smoothstep(value: number) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * (3 - 2 * t);
}

export function PremiumFeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const row = rowRef.current;
    if (!section || !row) return;

    const slots = [...row.querySelectorAll<HTMLElement>("[data-fan]")];
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 1040px)");
    let frame = 0;

    const apply = () => {
      frame = 0;
      const reduced = reducedQuery.matches;
      const desktop = desktopQuery.matches;
      const pose = desktop ? fan : fanMobile;

      if (reduced || slots.length < 3) {
        for (const slot of slots) {
          slot.style.transform = "";
          slot.style.zIndex = "";
        }
        return;
      }

      const rect = section.getBoundingClientRect();
      let progress: number;
      if (desktop) {
        const runway = section.offsetHeight - (section.querySelector("[data-fan-sticky]")?.clientHeight ?? 0);
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(runway, 1));
        progress = runway > 0 ? scrolled / runway : 1;
      } else {
        const start = window.innerHeight * 0.82;
        const end = window.innerHeight * 0.28;
        progress = (start - rect.top) / (start - end);
      }

      const open = smoothstep(progress);
      const closed = 1 - open;
      const spread = desktop
        ? slots[1].offsetLeft - slots[0].offsetLeft
        : slots[1].offsetTop - slots[0].offsetTop;

      slots.forEach((slot, index) => {
        if (closed < 0.001) {
          slot.style.transform = "";
          slot.style.zIndex = "";
          return;
        }

        const item = pose[index];
        const shift = (1 - index) * spread * closed;
        const x = (desktop ? shift : 0) + item.x * closed;
        const y = (desktop ? 0 : shift) + item.y * closed;
        slot.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${(item.rot * closed).toFixed(3)}deg)`;
        slot.style.zIndex = String(item.z);
      });
    };

    const requestApply = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", requestApply, { passive: true });
    window.addEventListener("resize", requestApply);
    reducedQuery.addEventListener("change", requestApply);
    desktopQuery.addEventListener("change", requestApply);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestApply);
      window.removeEventListener("resize", requestApply);
      reducedQuery.removeEventListener("change", requestApply);
      desktopQuery.removeEventListener("change", requestApply);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full max-w-[calc(1077px*0.88)]">
      <div data-fan-sticky className="sticky top-12 flex w-full flex-col items-start gap-[calc(33px*0.88)]">
        <div className="flex flex-col gap-[calc(2px*0.88)]">
          <h2 className="text-[calc(40px*0.88)] leading-[calc(48px*0.88)] font-normal tracking-[calc(-0.8px*0.88)] text-white capitalize">
            <span>What you get with</span>
            <span className="font-serif">{` premium`}</span>
          </h2>
          <p className="text-[calc(16px*0.88)] leading-[calc(21px*0.88)] text-white/44">
            Everything you need to practise smarter, get unstuck faster, and stay ready for your
            next OA.
          </p>
        </div>

        <div
          ref={rowRef}
          className="flex w-full flex-col items-start gap-[calc(10px*0.88)] min-[1040px]:h-[calc(426px*0.88)] min-[1040px]:flex-row min-[1040px]:items-center"
        >
          {cards.map((card, index) => (
            <div
              key={card.title}
              data-fan={index}
              className="relative shrink-0 origin-center"
            >
              <PremiumFeatureCard {...card} />
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden className="feature-fan-runway" />
    </section>
  );
}
