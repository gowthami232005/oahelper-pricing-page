"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I cancel my subscription?",
    answer:
      "Premium is a one-time purchase for a fixed period - there is nothing to cancel mid-cycle.\nWhen it ends, your account simply returns to free. You can upgrade again anytime.",
  },
  {
    question: "What happens when I upgrade from a lower plan?",
    answer:
      "We credit the remaining value of your current plan toward the new one, so you only pay the difference.",
  },
  {
    question: "Do college students get a discount?",
    answer: "Yes. Verified college email users get 10% off when paying with Razorpay (Rupee).",
  },
  {
    question: "What are Real Question Images?",
    answer:
      "Original photos of OA questions as they appeared in the test - including diagrams and formatting - so you practice on the real thing.",
  },
  {
    question: "What happens when my Premium ends?",
    answer:
      "You return to the free tier. Your coins, progress, and history stay intact - nothing is lost.",
  },
  {
    question: "When will my voucher request be processed?",
    answer:
      "Voucher requests are processed Monday to Saturday, 10:30 AM - 6:30 PM. Once approved, we email the voucher to your registered address.",
  },
  {
    question: "When will I get the solution to a question I submitted?",
    answer:
      "Submitted questions are reviewed Monday to Saturday, 10:30 AM - 6:30 PM, and you'll receive the solution within that window.",
  },
] as const;

export function FaqSection() {
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section className="flex flex-col gap-5 min-[1040px]:gap-7">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[26px] leading-[1.2] font-normal tracking-[-0.7px] text-white capitalize sm:text-[32px] xl:text-[36px]">
          <span className="font-serif normal-case">Questions?</span> We’ve Got Answers
        </h2>
        <p className="text-[14px] text-white/44 sm:text-[15px]">
          Everything you need to know about Premium, credits, features, and your plan.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {faqs.map((item, index) => {
          const expanded = open.has(index);
          const answerId = `faq-answer-${index + 1}`;

          return (
            <div key={item.question} className="overflow-hidden rounded-[6px] bg-white/5">
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={answerId}
                onClick={() => toggle(index)}
                className="flex min-h-[64px] w-full items-center justify-between gap-4 px-4 py-3.5 text-left min-[1040px]:px-6"
              >
                <div className="flex items-center gap-4 min-[1040px]:gap-5">
                  <span className="w-8 shrink-0 text-[18px] leading-none font-semibold text-white min-[1040px]:text-[21px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-normal text-white sm:text-[16px] xl:text-[17px]">
                    {item.question}
                  </p>
                </div>
                <img
                  src="/figma/chevron.svg"
                  alt=""
                  width={26}
                  height={26}
                  className={`h-[26px] w-[26px] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
                    expanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p
                    id={answerId}
                    className={`pr-4 pb-3.5 pl-16 text-[15px] leading-normal whitespace-pre-line text-white/70 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none sm:text-[16px] min-[1040px]:pr-6 min-[1040px]:pl-[76px] xl:text-[17px] ${
                      expanded
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
