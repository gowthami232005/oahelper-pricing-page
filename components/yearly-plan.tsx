"use client";

import { useCardTilt } from "@/components/use-card-tilt";

const features: { bold?: string; rest: string }[] = [
  { bold: "Unlimited ", rest: "questions daily" },
  { bold: "Unlimited", rest: " solutions daily" },
  { bold: "1500 ", rest: "Helper agents credits" },
  { rest: "Real Question Images" },
  { bold: "3x", rest: " Faster Code Execution" },
  { bold: "Unlimited ", rest: "Editorials Daily" },
  { rest: "VIP Support Channel" },
  { rest: "Premium Community Access" },
  { rest: "All Future Features" },
  { rest: "Solutions verified by Codeforces" },
];

export function YearlyPlan() {
  const { ref, onMouseMove, onMouseLeave } = useCardTilt<HTMLElement>();

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex w-full max-w-[342px] flex-col overflow-hidden rounded-[24.526px] bg-[#dbb441] min-[420px]:h-[610px]"
    >
      <div className="pointer-events-none absolute top-[-7px] left-[227px] flex h-[134.272px] w-[156.007px] items-center justify-center">
        <div className="rotate-[11.02deg]">
          <img src="/figma/yearly-crown.svg" alt="" width={137.509} height={110.007} />
        </div>
      </div>

      <div className="px-[30px] pt-[21px] pb-[14px]">
        <h3 className="text-[32px] leading-[1.21] font-semibold tracking-[-0.64px] text-[#101010] capitalize">
          Yearly
        </h3>
        <p className="mt-1 text-[16px] leading-[1.21] text-[rgba(16,16,16,0.67)]">
          Make this year count
        </p>
      </div>

      <div className="mx-[3px] mb-[3px] flex flex-col gap-4 rounded-[23px] bg-[#eed89a] px-[21px] pt-[21px] pb-[13px] min-[420px]:min-h-0 min-[420px]:flex-1">
        <div className="relative">
          <div className="flex items-end gap-[7px] text-center text-black">
            <p className="text-[49.901px] leading-[1.09] font-semibold tracking-[0.499px] whitespace-nowrap">
              ₹1,299
            </p>
            <p className="h-5 w-[102px] shrink-0 text-left text-[11.729px] leading-[1.09] tracking-[0.1173px]">
              <span className="text-[#484747] line-through">₹2,598</span>
              <span>/ 365 Days</span>
            </p>
          </div>
          <div className="absolute top-[-12.21px] right-0 flex h-6 w-[134px] items-center gap-[5px] rounded-[6.097px] bg-[#c29f3b] pr-[11.75px] pl-[6.609px] min-[400px]:right-auto min-[400px]:left-[173px]">
            <span className="text-[11.75px] leading-[1.19] font-medium tracking-[0.1175px] text-black">
              or
            </span>
            <img src="/figma/yearly-coins.svg" alt="" width={16.548} height={16.548} />
            <span className="text-[11.75px] leading-[1.19] font-medium tracking-[0.1175px] whitespace-nowrap text-black">
              1,299 OA Coins
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[13.979px]">
          <p className="text-[13.313px] leading-[1.4] font-semibold tracking-[0.6657px] text-black uppercase">
            Includs :
          </p>
          <ul className="flex flex-col gap-[10.651px]">
            {features.map((feature) => (
              <li key={`${feature.bold ?? ""}-${feature.rest}`} className="flex items-center gap-[10.651px]">
                <img src="/figma/yearly-check.svg" alt="" width={17} height={17} className="shrink-0" />
                <span className="text-[16px] leading-[1.4] tracking-[-0.16px] text-black">
                  {feature.bold ? <span className="font-bold">{feature.bold}</span> : null}
                  {feature.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="mt-auto flex h-[41px] w-full items-center justify-center rounded-[6px] bg-black px-[10px] text-[13.313px] leading-[1.4] font-semibold tracking-[0.1331px] text-white capitalize"
        >
          Get Elite
        </button>
      </div>
    </article>
  );
}
