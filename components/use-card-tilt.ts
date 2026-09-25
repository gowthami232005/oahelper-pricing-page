"use client";

import { useEffect, useRef, type MouseEvent } from "react";

export function useCardTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const frame = useRef(0);
  const lastTime = useRef(0);
  const hovering = useRef(false);
  const current = useRef({ rx: 0, ry: 0, lift: 0 });
  const target = useRef({ rx: 0, ry: 0, lift: 0 });

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const tick = (now: number) => {
    const node = ref.current;
    if (!node) {
      frame.current = 0;
      return;
    }

    const last = lastTime.current || now;
    lastTime.current = now;
    const dt = Math.min(0.032, (now - last) / 1000);
    const blend = 1 - Math.exp(-(hovering.current ? 16 : 9) * dt);
    const pose = current.current;
    const goal = target.current;
    pose.rx += (goal.rx - pose.rx) * blend;
    pose.ry += (goal.ry - pose.ry) * blend;
    pose.lift += (goal.lift - pose.lift) * blend;

    const idle =
      !hovering.current &&
      Math.abs(pose.rx) < 0.04 &&
      Math.abs(pose.ry) < 0.04 &&
      pose.lift < 0.004;

    if (idle) {
      pose.rx = 0;
      pose.ry = 0;
      pose.lift = 0;
      node.style.transform = "";
      node.style.zIndex = "";
      frame.current = 0;
      return;
    }

    const y = pose.lift * -6;
    const scale = 1 + pose.lift * 0.022;
    node.style.transform = `perspective(900px) rotateX(${pose.rx.toFixed(3)}deg) rotateY(${pose.ry.toFixed(3)}deg) translateY(${y.toFixed(2)}px) scale(${scale.toFixed(4)})`;
    node.style.zIndex = "1";
    frame.current = requestAnimationFrame(tick);
  };

  const start = () => {
    if (frame.current) return;
    lastTime.current = 0;
    frame.current = requestAnimationFrame(tick);
  };

  const onMouseMove = (event: MouseEvent<T>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    hovering.current = true;
    target.current.rx = py * 8;
    target.current.ry = px * -10;
    target.current.lift = 1;
    start();
  };

  const onMouseLeave = () => {
    hovering.current = false;
    target.current.rx = 0;
    target.current.ry = 0;
    target.current.lift = 0;
    start();
  };

  return { ref, onMouseMove, onMouseLeave };
}
