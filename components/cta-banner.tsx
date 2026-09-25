export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-[23.5px] bg-[#4c478b] min-[1040px]:aspect-[1063/358]">
      <img
        src="/figma/mountains.svg"
        alt=""
        width={1018}
        height={101.487}
        className="pointer-events-none absolute hidden w-[92%] max-w-none min-[1040px]:top-[75.14%] min-[1040px]:left-[8.09%] min-[1040px]:block min-[1040px]:h-[28.5%] min-[1040px]:w-[95.77%]"
      />
      <img
        src="/figma/cta-glow.svg"
        alt=""
        width={226}
        height={226}
        className="pointer-events-none absolute top-3 right-[7%] hidden h-[200px] w-[200px] min-[1040px]:top-[3.91%] min-[1040px]:left-[68.02%] min-[1040px]:block min-[1040px]:h-[63.13%] min-[1040px]:w-[21.26%]"
      />
      <img
        src="/figma/cta-hero.png"
        alt="Student standing on a stack of OA Helper skills"
        className="pointer-events-none absolute top-10 right-[6%] hidden h-[292px] w-[250px] object-contain min-[1040px]:top-[14.92%] min-[1040px]:left-[64.16%] min-[1040px]:block min-[1040px]:h-[91.62%] min-[1040px]:w-[26.62%]"
      />

      <div className="relative flex max-w-[460px] flex-col gap-6 px-6 py-9 min-[1040px]:absolute min-[1040px]:top-1/2 min-[1040px]:left-[7.15%] min-[1040px]:w-[49.48%] min-[1040px]:max-w-none min-[1040px]:-translate-y-1/2 min-[1040px]:gap-[26px] min-[1040px]:px-0 min-[1040px]:py-0">
        <div className="flex flex-col gap-2 min-[1040px]:gap-[7px]">
          <h2 className="cta-heading font-serif text-[36px] leading-none tracking-[-1px] text-white sm:text-[44px]">
            Build Your Way to the Top
          </h2>
          <p className="cta-sub max-w-[26rem] text-[15px] leading-[1.5] tracking-[-0.16px] text-white/65 sm:text-[17px]">
            Every question, every practice session, every step gets you closer. Unlock
            Premium and keep moving forward.
          </p>
        </div>
        <button
          type="button"
          className="flex h-12 w-fit items-center justify-center gap-[18px] rounded-[10px] bg-white px-6 text-[17px] leading-[1.1] font-semibold tracking-[-0.16px] text-[#534f87] min-[1040px]:h-[48px] min-[1040px]:px-[25px] min-[1040px]:text-[18px] min-[1040px]:tracking-[-0.18px] xl:text-[18px] xl:tracking-[-0.18px]"
        >
          Get Premium
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <img
        src="/figma/cta-hero.png"
        alt=""
        className="mx-auto h-auto w-[220px] object-contain min-[1040px]:hidden"
      />
    </section>
  );
}
