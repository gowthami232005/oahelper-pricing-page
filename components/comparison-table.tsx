type Cell =
  | "check"
  | "dash"
  | "5"
  | "15"
  | "100"
  | "200"
  | "300"
  | "1,500"
  | "1x"
  | "3x"
  | "Unlimited";

const plans = ["FREE", "BASIC", "PRO", "ELITE", "YEARLY"] as const;

const columns = "grid-cols-[minmax(158px,1.2fr)_repeat(5,minmax(0,1fr))]";

const eliteColumn =
  "bg-[linear-gradient(180deg,rgba(238,216,154,0.008)_0%,rgba(213,193,137,0.08)_25%,rgba(200,181,129,0.1)_52.885%,rgba(187,170,121,0.08)_76.923%,rgba(238,216,154,0.008)_100%)]";

const sections: { title: string; rows: { label: string; cells: Cell[] }[] }[] = [
  {
    title: "Access",
    rows: [
      {
        label: "Browse company questions",
        cells: ["check", "check", "check", "check", "check"],
      },
      {
        label: "Unlimited question access",
        cells: ["dash", "check", "check", "check", "check"],
      },
      {
        label: "Real question images",
        cells: ["dash", "dash", "check", "check", "check"],
      },
      {
        label: "Company insights",
        cells: ["dash", "check", "check", "check", "check"],
      },
    ],
  },
  {
    title: "Practice",
    rows: [
      {
        label: "Daily solutions",
        cells: ["dash", "5", "15", "Unlimited", "Unlimited"],
      },
      {
        label: "Daily editorials",
        cells: ["dash", "5", "15", "Unlimited", "Unlimited"],
      },
      {
        label: "Helper agent credits",
        cells: ["dash", "100", "200", "300", "1,500"],
      },
      {
        label: "Code execution speed",
        cells: ["1x", "1x", "3x", "3x", "3x"],
      },
    ],
  },
  {
    title: "Support",
    rows: [
      {
        label: "Premium community",
        cells: ["dash", "check", "check", "check", "check"],
      },
      { label: "Priority support", cells: ["dash", "check", "check", "check", "check"] },
      {
        label: "VIP support channel",
        cells: ["dash", "dash", "dash", "dash", "check"],
      },
      {
        label: "All future features",
        cells: ["dash", "dash", "dash", "dash", "check"],
      },
    ],
  },
];

function Mark({ cell }: { cell: Cell }) {
  if (cell === "dash") {
    return <img src="/figma/dash.svg" alt="Not included" width={20} height={20} />;
  }

  if (cell === "check") {
    return <img src="/figma/check-table.svg" alt="Included" width={20} height={20} />;
  }

  return (
    <span className="font-inter text-[16px] leading-none font-medium text-white">{cell}</span>
  );
}

function PlanLabel({ name }: { name: (typeof plans)[number] }) {
  if (name === "ELITE") {
    return (
      <span className="inline-flex items-center justify-center gap-[7px] text-[#d5ad3a]">
        <img src="/figma/crown-table.svg" alt="" width={19} height={15} />
        ELITE
      </span>
    );
  }

  return <span>{name}</span>;
}

export function ComparisonTable() {
  return (
    <section className="flex flex-col gap-5 min-[1040px]:gap-7">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[26px] leading-[1.2] font-normal tracking-[-0.7px] text-white capitalize sm:text-[32px] xl:text-[36px]">
          See What You Unlock With Each Plan
        </h2>
        <p className="text-[14px] whitespace-nowrap text-white/44 sm:text-[15px]">
          Compare every plan side by side and see which features you get at each level of your placement preparation.
        </p>
      </div>

      <div className="hidden rounded-[41px] border-2 border-[rgba(58,58,58,0.42)] bg-[#050505] p-3.5 min-[1040px]:block">
        <div className={`grid ${columns} items-center rounded-[42px] bg-[#141414] px-5 py-4`}>
          <p className="text-[17px] leading-[1.09] font-semibold text-white">FEATURES</p>
          {plans.map((plan) => (
            <p
              key={plan}
              className="text-center text-[15px] leading-none font-medium tracking-[0.75px] text-white uppercase"
            >
              <PlanLabel name={plan} />
            </p>
          ))}
        </div>

        <div className="relative px-[17px] pt-1">
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-x-[17px] top-1 bottom-0 grid ${columns}`}
          >
            <span />
            <span />
            <span />
            <span />
            <span className="flex h-full justify-center">
              <span className={`${eliteColumn} h-full w-[122px]`} />
            </span>
            <span />
          </div>
          <div className="relative flex flex-col gap-[6px]">
            {sections.map((section) => (
              <div key={section.title}>
                <div className={`grid ${columns} items-center`}>
                  <h3 className="px-2 pt-4 pb-1.5 text-[15px] leading-[1.09] font-semibold text-white">
                    {section.title}
                  </h3>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                {section.rows.map((row) => (
                  <div
                    key={row.label}
                    className={`grid h-[42px] ${columns} items-center`}
                  >
                    <p className="px-2 text-[13px] leading-[1.09] text-white/60">
                      {row.label}
                    </p>
                    {row.cells.map((cell, index) => (
                      <div
                        key={`${row.label}-${plans[index]}`}
                        className="flex h-full items-center justify-center"
                      >
                        <Mark cell={cell} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 min-[1040px]:hidden">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-[18px] font-semibold text-white">{section.title}</h3>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050505]">
              {section.rows.map((row) => (
                <div key={row.label} className="border-b border-white/8 px-4 py-4 last:border-b-0">
                  <p className="mb-3 text-[15px] text-white/70">{row.label}</p>
                  <div className="grid grid-cols-5 gap-2">
                    {row.cells.map((cell, index) => (
                      <div key={`${row.label}-${plans[index]}`} className="flex flex-col items-center gap-1">
                        <span
                          className={`text-[10px] font-medium tracking-[0.4px] ${
                            plans[index] === "ELITE" ? "text-[#d5ad3a]" : "text-white/70"
                          }`}
                        >
                          {plans[index]}
                        </span>
                        <Mark cell={cell} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
