"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { BillingToggle } from "@/components/billing-toggle";
import { YearlyPlan } from "@/components/yearly-plan";
import { useCardTilt } from "@/components/use-card-tilt";

type Feature = {
  label: string;
  included: boolean;
};

type Plan = {
  name: string;
  tagline: string;
  price: string;
  was: string;
  period: string;
  coins: string;
  includes: string;
  cta: string;
  shell: string;
  panel: string;
  badge: string;
  badgeText: string;
  priceText: string;
  muted: string;
  featureText: string;
  button: string;
  check: string;
  coinsIcon: string;
  decor: "target" | "spark" | "crown";
  features: Feature[];
};

const plans: Plan[] = [
  {
    name: "Basic",
    tagline: "Perfect to get started",
    price: "₹99",
    was: "₹198",
    period: "15 days",
    coins: "99 OA Coins",
    includes: "Includs :",
    cta: "Get Basic",
    shell: "bg-[#cdddfd]",
    panel: "bg-[#0c0c0c]",
    badge: "bg-[#294886]",
    badgeText: "text-white",
    priceText: "text-white",
    muted: "text-[#706f6f]",
    featureText: "text-[#bebebe]",
    button: "bg-white text-black",
    check: "/figma/check-light.svg",
    coinsIcon: "/figma/coins-light.svg",
    decor: "target",
    features: [
      { label: "Unlimited Question Access", included: true },
      { label: "Real Question Images", included: false },
      { label: "5 Solutions Daily", included: true },
      { label: "100 Helper Agent Credits", included: true },
      { label: "1.5x OACoins on All Rewards", included: true },
      { label: "5 Editorials Daily", included: true },
      { label: "Premium Community Access", included: true },
    ],
  },
  {
    name: "Pro",
    tagline: "For serious preparation",
    price: "₹199",
    was: "₹398",
    period: "30 days",
    coins: "199 OA Coins",
    includes: "Everything in Basic, Plus:",
    cta: "Get Pro",
    shell: "bg-[#fddada]",
    panel: "bg-[#0c0c0c]",
    badge: "bg-[#965151]",
    badgeText: "text-white",
    priceText: "text-white",
    muted: "text-[#706f6f]",
    featureText: "text-[#bebebe]",
    button: "bg-white text-black",
    check: "/figma/check-light.svg",
    coinsIcon: "/figma/coins-light.svg",
    decor: "spark",
    features: [
      { label: "15 Solutions Daily", included: true },
      { label: "200 Helper Agents Credits", included: true },
      { label: "Real Question Images", included: true },
      { label: "3x faster code Execution", included: true },
      { label: "15 Editable Daily", included: true },
      { label: "Request Missing companies", included: true },
      { label: "Solutions verified by codeforces", included: true },
    ],
  },
  {
    name: "Elite",
    tagline: "Built for Top Placements",
    price: "₹349",
    was: "₹698",
    period: "60 days",
    coins: "349 OA Coins",
    includes: "Includs :",
    cta: "Get Elite",
    shell: "bg-[#dbb441]",
    panel: "bg-[#eed89a]",
    badge: "bg-[#c29f3b]",
    badgeText: "text-black",
    priceText: "text-black",
    muted: "text-[#484747]",
    featureText: "text-black",
    button: "bg-black text-white",
    check: "/figma/check-dark.svg",
    coinsIcon: "/figma/coins-dark.svg",
    decor: "crown",
    features: [
      { label: "Unlimited solutions daily", included: true },
      { label: "300 Helper agents credits", included: true },
      { label: "1.75x OACoins on all rewards", included: true },
      { label: "Unlimited Editorials Daily", included: true },
      { label: "1.5x OACoins on All Rewards", included: true },
      { label: "Company Insights Access", included: true },
      { label: "Priority Support", included: true },
    ],
  },
];

function Decor({ kind }: { kind: Plan["decor"] }) {
  if (kind === "target") {
    return (
      <img
        src="/figma/target.svg"
        alt=""
        width={154}
        height={154}
        className="pointer-events-none absolute top-[-24px] right-[-36px] h-[154px] w-[154px]"
      />
    );
  }

  if (kind === "spark") {
    return (
      <div className="pointer-events-none absolute top-[-16px] right-[-6px] opacity-[0.06]">
        <img src="/figma/spark.svg" alt="" width={106} height={106} className="h-[106px] w-[106px]" />
        <img
          src="/figma/spark-sm.svg"
          alt=""
          width={46}
          height={46}
          className="absolute top-[51px] right-[-5px] h-[46px] w-[46px]"
        />
      </div>
    );
  }

  return (
    <img
      src="/figma/crown-elite.svg"
      alt=""
      width={121}
      height={97}
      className="pointer-events-none absolute top-[-4px] right-[-16px] h-[97px] w-[121px] rotate-[11.02deg]"
    />
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const { ref, onMouseMove, onMouseLeave } = useCardTilt<HTMLElement>();

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative flex w-full max-w-[420px] flex-col overflow-hidden rounded-[24.526px] ${plan.shell} min-[1040px]:h-[461px] min-[1040px]:w-[301px] min-[1040px]:max-w-none`}
    >
      <Decor kind={plan.decor} />
      <div className="relative px-[26px] pt-[18px] pb-3.5">
        <h3 className="text-[28px] leading-[1.21] font-semibold tracking-[-0.56px] text-[#101010] capitalize">
          {plan.name}
        </h3>
        <p className="mt-0.5 text-[14px] leading-[1.21] text-[rgba(16,16,16,0.67)]">
          {plan.tagline}
        </p>
      </div>
      <div
        className={`relative mx-[3px] mb-[3px] flex flex-1 flex-col gap-3.5 rounded-[23px] px-[18px] pt-5 pb-4 ${plan.panel}`}
      >
        <div className="relative">
          <div className={`flex items-end gap-[6px] pr-[116px] ${plan.priceText}`}>
            <p className="text-[44px] leading-none font-semibold tracking-[0.44px]">
              {plan.price}
            </p>
            <p className="mb-[3px] text-[10.5px] leading-[1.09] tracking-[0.1px] whitespace-nowrap">
              <span className={`line-through ${plan.muted}`}>{plan.was}</span>
              <span>/{` ${plan.period}`}</span>
            </p>
          </div>
          <div
            className={`absolute top-[-10px] right-0 flex h-[21px] items-center gap-1 rounded-[6.097px] pr-[7px] pl-[6px] ${plan.badge}`}
          >
            <span className={`text-[10.5px] leading-[1.19] font-medium ${plan.badgeText}`}>
              or
            </span>
            <img src={plan.coinsIcon} alt="" width={14} height={14} className="h-[14px] w-[14px]" />
            <span
              className={`text-[10.5px] leading-[1.19] font-medium tracking-[0.1px] whitespace-nowrap ${plan.badgeText}`}
            >
              {plan.coins}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p
            className={`text-[12px] leading-[1.4] font-semibold tracking-[0.58px] uppercase ${plan.priceText}`}
          >
            {plan.includes}
          </p>
          <ul className="flex flex-col gap-[9px]">
            {plan.features.map((feature) => (
              <li key={feature.label} className="flex items-center gap-[9px]">
                <img
                  src={feature.included ? plan.check : "/figma/cross.svg"}
                  alt=""
                  width={15}
                  height={15}
                  className="h-[15px] w-[15px] shrink-0"
                />
                <span
                  className={`text-[14px] leading-[1.4] tracking-[-0.14px] ${plan.featureText} ${
                    feature.included ? "" : "line-through opacity-[0.48]"
                  }`}
                >
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className={`mt-auto flex h-9 w-full items-center justify-center rounded-[6px] text-[12px] leading-[1.4] font-semibold tracking-[0.12px] capitalize ${plan.button}`}
        >
          {plan.cta}
        </button>
      </div>
    </article>
  );
}

function BillingCards({ annual }: { annual: boolean }) {
  const monthlyRef = useRef<HTMLDivElement>(null);
  const yearlyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const previousAnnual = useRef(annual);

  if (annual !== previousAnnual.current) {
    previousAnnual.current = annual;
    setDirection(annual ? 1 : -1);
  }

  useLayoutEffect(() => {
    const node = annual ? yearlyRef.current : monthlyRef.current;
    if (!node) return;

    const update = () => setHeight(node.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [annual]);

  const motion =
    "w-full transition-[opacity,translate,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

  const hidden = (incoming: boolean) =>
    incoming
      ? "pointer-events-none absolute inset-x-0 top-0 translate-y-3 scale-[0.98] opacity-0"
      : "pointer-events-none absolute inset-x-0 top-0 -translate-y-3 scale-[0.98] opacity-0";

  return (
    <div
      className="relative w-full transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
      style={{ height: height ?? undefined }}
    >
      <div
        ref={monthlyRef}
        inert={annual}
        aria-hidden={annual}
        className={`${motion} ${annual ? hidden(direction === -1) : "relative translate-y-0 scale-100 opacity-100"}`}
      >
        <div className="flex w-full flex-col items-center gap-4 min-[1040px]:flex-row min-[1040px]:justify-center min-[1040px]:gap-[18px]">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
      <div
        ref={yearlyRef}
        inert={!annual}
        aria-hidden={!annual}
        className={`${motion} flex justify-center ${
          annual ? "relative translate-y-0 scale-100 opacity-100" : hidden(direction === 1)
        }`}
      >
        <YearlyPlan />
      </div>
    </div>
  );
}

export function PricingPlans() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="flex w-full max-w-[720px] flex-col items-center gap-5">
        <div className="flex w-full flex-col items-center gap-3">
          <p className="flex h-9 items-center justify-center rounded-[8px] bg-white/5 px-3.5 text-[12px] leading-[1.21] tracking-[1.32px] text-white/55">
            PRICING PAGE
          </p>
          <div className="flex w-full flex-col items-center gap-1.5 text-center">
            <h1 className="max-w-[18em] text-[32px] leading-[1.15] font-normal tracking-[-0.52px] text-white capitalize sm:text-[42px] xl:max-w-none xl:text-[52px] xl:whitespace-nowrap">
              Give Your Preparation an{" "}
              <span className="font-serif">Upgrade</span>
            </h1>
            <p className="max-w-[34rem] text-[15px] leading-[1.6] tracking-[-0.16px] text-white/40 sm:text-[17px]">
              Unlock real OA questions, smarter practice, AI-powered help, and company
              insights—all in one place.
            </p>
          </div>
        </div>
        <BillingToggle annual={annual} onChange={setAnnual} />
      </div>

      <BillingCards annual={annual} />
    </section>
  );
}
