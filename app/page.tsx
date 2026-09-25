import { ComparisonTable } from "@/components/comparison-table";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { PremiumFeatureSection } from "@/components/premium-feature-section";
import { PricingPlans } from "@/components/pricing-plans";
import { PurposeSection } from "@/components/purpose-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <SiteHeader />
      <main className="mx-auto mt-6 flex w-full max-w-[1000px] flex-col gap-12 px-5 min-[1040px]:mt-8 min-[1040px]:gap-[60px]">
        <PricingPlans />
        <PurposeSection />
        <ComparisonTable />
        <PremiumFeatureSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
