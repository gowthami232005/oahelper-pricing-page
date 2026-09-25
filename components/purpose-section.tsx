"use client";

import { useRef, useState } from "react";

export function PurposeSection() {
  const frame = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState<number | null>(null);

  function moveTo(clientX: number) {
    const bounds = frame.current?.getBoundingClientRect();
    if (!bounds || bounds.width === 0) return;
    const next = ((clientX - bounds.left) / bounds.width) * 100;
    setSplit(Math.min(100, Math.max(0, next)));
  }

  return (
    <section className="flex flex-col items-start gap-5 min-[1040px]:gap-7">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[26px] leading-[1.2] font-normal tracking-[-0.7px] text-white capitalize sm:text-[32px] xl:text-[36px]">
          You’ve Started Preparing. Now Prepare With{" "}
          <span className="font-serif">Purpose</span>
        </h2>
        <p className="max-w-[40rem] text-[14px] tracking-[-0.14px] text-white/44 sm:text-[15px]">
          Everything you need to prepare smarter, practise with purpose, and know where
          you stand.
        </p>
      </div>

      <div
        ref={frame}
        className={`purpose-compare relative w-full overflow-hidden rounded-[23px] select-none ${split !== null ? "is-dragging" : ""}`}
        style={split !== null ? { ["--split" as string]: `${split}%` } : undefined}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) moveTo(event.clientX);
        }}
        onPointerUp={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
      >
        <img
          src="/figma/purpose-after.jpg"
          alt=""
          className="block h-auto w-full"
          draggable={false}
        />
        <div className="purpose-before pointer-events-none absolute inset-y-0 overflow-hidden">
          <img
            src="/figma/purpose-before.jpg"
            alt=""
            className="absolute top-0 left-0 h-full max-w-none"
            style={{ width: "100cqi" }}
            draggable={false}
          />
        </div>
        <div className="purpose-divider pointer-events-none absolute inset-y-0 z-10 w-[2px] -translate-x-1/2 bg-white" />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          className="purpose-divider absolute top-1/2 z-10 flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center gap-[3px] rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.28)]"
          onPointerDown={(event) => {
            event.currentTarget.parentElement?.setPointerCapture(event.pointerId);
            moveTo(event.clientX);
          }}
        >
          <svg width="7" height="12" viewBox="0 0 7 12" aria-hidden="true" className="text-[#6b6b6b]">
            <path d="M6 1 L1 6 L6 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="7" height="12" viewBox="0 0 7 12" aria-hidden="true" className="text-[#6b6b6b]">
            <path d="M1 1 L6 6 L1 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
