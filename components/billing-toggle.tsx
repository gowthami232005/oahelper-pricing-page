"use client";

type BillingToggleProps = {
  annual: boolean;
  onChange: (annual: boolean) => void;
};

export function BillingToggle({ annual, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center gap-[15px]">
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`text-[14px] leading-[1.19] font-medium tracking-[0.14px] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${annual ? "text-white/55" : "text-white"}`}
      >
        Monthly
      </button>
      <button
        type="button"
        aria-pressed={annual}
        aria-label={annual ? "Annual billing selected" : "Monthly billing selected"}
        onClick={() => onChange(!annual)}
        className="relative h-[26px] w-[50px] shrink-0 rounded-full bg-white"
      >
        <span
          className={`absolute top-[2px] left-[2px] size-[22px] rounded-full bg-black shadow-[3px_2px_6px_rgba(0,0,0,0.25)] transition-[translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${annual ? "translate-x-[24px]" : "translate-x-0"}`}
        />
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className="text-center text-[14px] leading-[1.19] font-medium tracking-[0.14px] whitespace-nowrap text-white"
      >
        Annual <span className="font-bold text-[#dbb441]">(Save 72%)</span>
      </button>
    </div>
  );
}
