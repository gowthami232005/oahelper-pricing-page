"use client";

import { useState } from "react";

const menuItems = ["Placements", "Questions", "For Campus", "Contribute"] as const;

function Chevron() {
  return (
    <span className="relative inline-block h-[7.084px] w-[14.168px] shrink-0">
      <img
        src="/figma/arrow.svg"
        alt=""
        width={7.084}
        height={14.168}
        className="absolute top-1/2 left-1/2 h-[14.168px] w-[7.084px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90"
      />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header w-full">
      <div className="nav-slot">
      <div className="nav-figma">
        <div className="relative h-[53.666px] w-[1338px]">
          <a href="#" className="absolute top-[3.333px] left-0 h-[47px] w-[161px] overflow-hidden">
            <img
              src="/figma/logo.png"
              alt="OA Helper"
              className="absolute top-0 left-[-6.6%] h-full w-[106.81%] max-w-none"
            />
          </a>

          <nav
            aria-label="Primary"
            className="absolute top-0 left-[203.12px] flex h-[53.666px] w-[648.377px] items-center gap-[19.481px] rounded-[47.273px] bg-white/[0.07] pr-[11.304px] pl-[21.581px]"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-[2.657px] text-[14.168px] leading-[1.5] whitespace-nowrap text-white"
              >
                {item}
                <Chevron />
              </a>
            ))}
            <a href="#" className="text-[14.168px] leading-[1.5] whitespace-nowrap text-white">
              OA Store
            </a>
            <a
              href="#"
              className="flex h-[35.168px] items-center gap-[7.97px] rounded-[35.42px] bg-white px-[15.939px]"
            >
              <img src="/figma/crown-nav.svg" alt="" width={15.939} height={15.939} />
              <span className="text-[14.168px] leading-[1.5] whitespace-nowrap text-[#101010]">
                Pricing
              </span>
            </a>
          </nav>

          <div className="absolute top-[4.833px] left-[893.617px] h-[44px] w-[146.263px]">
            <img
              src="/figma/icon-notifications.svg"
              alt="Search"
              width={43.5}
              height={43.5}
              className="absolute top-[0.25px] left-0"
            />
            <img
              src="/figma/icon-messages.svg"
              alt="Messages"
              width={43.263}
              height={44}
              className="absolute top-0 left-[51.5px]"
            />
            <span className="absolute top-[0.25px] left-[102.763px] flex size-[43.5px] items-center justify-center rounded-[47px] bg-white/10">
              <img src="/figma/icon-bug.svg" alt="Report a bug" width={18} height={19} />
            </span>
          </div>

          <div className="absolute top-[4.833px] left-[1082px] h-[44px] w-[256px]">
            <div className="absolute top-0 left-0 flex h-[44px] w-[175px] items-center gap-2 rounded-[52px] bg-white/10 pl-[6px]">
              <img
                src="/figma/avatar.png"
                alt=""
                className="h-[31px] w-[34px] rounded-[30px] object-cover"
              />
              <span className="text-[14.168px] leading-[1.5] whitespace-nowrap text-white">
                Gowthami Tirumal
              </span>
            </div>
            <div className="absolute top-0 left-[186px] flex h-[44px] w-[70px] items-center justify-center gap-[5px] rounded-[47px] bg-[#fc0]">
              <img src="/figma/coins.svg" alt="" width={17.5} height={17.5} />
              <span className="text-[14.168px] leading-[1.5] font-semibold text-[#101010]">36</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1000px] items-center justify-between gap-3 px-5 pt-4 min-[1040px]:hidden">
        <a href="#" className="relative h-[47px] w-[161px] shrink-0 overflow-hidden">
          <img
            src="/figma/logo.png"
            alt="OA Helper"
            className="absolute top-0 left-[-6.6%] h-full w-[106.81%] max-w-none"
          />
        </a>
        <div className="flex items-center gap-[11px]">
          <div className="flex h-10 w-[64px] items-center gap-[5px] rounded-[47px] bg-[#fc0] pr-[12px] pl-[10px]">
            <img src="/figma/coins.svg" alt="" width={17.5} height={17.5} />
            <span className="text-[14.168px] leading-[1.5] font-semibold text-[#101010]">36</span>
          </div>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full bg-white/10"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-[16px] flex-col gap-[3px]">
              <span className="h-[1.5px] w-full bg-white" />
              <span className="h-[1.5px] w-full bg-white" />
              <span className="h-[1.5px] w-full bg-white" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="mx-auto mt-4 flex w-full max-w-[1000px] flex-col gap-1 rounded-2xl bg-white/[0.07] p-3 min-[1040px]:hidden"
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] text-white"
            >
              {item}
              <Chevron />
            </a>
          ))}
          <a href="#" className="rounded-xl px-3 py-3 text-[15px] text-white">
            OA Store
          </a>
          <a
            href="#"
            className="mt-1 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-[15px] text-[#101010]"
          >
            <img src="/figma/crown-nav.svg" alt="" width={15.939} height={15.939} />
            Pricing
          </a>
          <div className="mt-2 flex items-center gap-3 px-2 py-2">
            <img
              src="/figma/avatar.png"
              alt=""
              className="h-[31px] w-[34px] rounded-[30px] object-cover"
            />
            <span className="text-[14px] text-white">Gowthami Tirumal</span>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
