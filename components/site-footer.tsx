const quickLinks = [
  "Company OAs",
  "All Problems",
  "Placement Data",
  "Interview Experiences",
  "Premium",
];

const socials = [
  { src: "/figma/facebook.svg", label: "Facebook", boxed: true },
  { src: "/figma/instagram.svg", label: "Instagram", boxed: true },
  { src: "/figma/linkedin.svg", label: "LinkedIn", boxed: true },
  { src: "/figma/whatsapp.svg", label: "WhatsApp", boxed: true },
  { src: "/figma/youtube.svg", label: "YouTube", boxed: false },
] as const;

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-[1100px] px-5 pb-10 min-[1040px]:mt-12">
      <div className="mx-auto flex w-full flex-col gap-6">
        <div className="h-px w-full bg-white/15" />
        <div className="flex flex-col gap-10 min-[1040px]:flex-row min-[1040px]:items-center min-[1040px]:gap-12">
          <div className="flex w-full max-w-[380px] flex-col gap-4">
            <a href="#" className="relative h-[58px] w-[197px] overflow-hidden">
              <img
                src="/figma/logo-footer.png"
                alt="OA Helper"
                className="absolute top-0 left-[-6.6%] h-full w-[106.81%] max-w-none"
              />
            </a>
            <p className="text-[14px] leading-[1.61] font-light tracking-[0.14px] text-white/[0.46]">
              Built by students, for students - practice company-specific OAs, DSA sheets,
              and real interview experiences to land your dream role.
            </p>
            <p className="text-[16px] leading-[1.61] font-light tracking-[0.16px] text-white">
              OA Practice <span className="text-white/35"> | </span>
              DSA <span className="text-white/35"> | </span>
              Placements
            </p>
          </div>

          <div className="flex flex-col gap-[14px] pl-[3px]">
            <p className="text-[20px] leading-[1.12] font-semibold tracking-[0.2px] text-white">
              Quick Links
            </p>
            <ul className="text-[14px] leading-[2.07] font-light tracking-[0.14px] text-white/[0.46]">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full max-w-[380px] flex-col gap-4 rounded-[16px] bg-white/[0.07] p-6 min-[1040px]:ml-auto">
            <div className="flex flex-col gap-[10px]">
              <p className="text-[20px] leading-[1.12] font-semibold tracking-[0.2px] text-white">
                Ready to crack your next OA?
              </p>
              <p className="text-[14px] leading-[1.49] font-light tracking-[0.14px] text-white/[0.46]">
                Practice company-specific questions trusted by thousands of students across
                India.
              </p>
            </div>
            <div className="flex flex-col gap-[15px] sm:flex-row">
              <button
                type="button"
                className="flex h-[43px] w-full items-center justify-center rounded-[7px] bg-white text-[13px] font-semibold text-[#101010] sm:w-[175px]"
              >
                Start Practicing
              </button>
              <button
                type="button"
                className="flex h-[43px] w-full items-center justify-center rounded-[7px] bg-white/20 text-[13px] font-semibold text-white sm:w-[175px]"
              >
                Go premium
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[21px]">
          <div className="h-px w-full bg-white/15" />
          <div className="flex flex-col gap-4 min-[1040px]:flex-row min-[1040px]:items-center min-[1040px]:justify-between">
            <p className="text-[14px] leading-[1.12] tracking-[0.15px] text-white/[0.87] sm:text-[15px]">
              © 2026 OAHelper.in <span className="text-white/20">|</span> Terms{" "}
              <span className="text-white/20">|</span> Privacy{" "}
              <span className="text-white/20">|</span> Refunds{" "}
              <span className="text-white/20">|</span> Trust & Safety
            </p>
            <div className="flex items-center gap-[18px]">
              <span className="text-[15px] leading-[1.12] tracking-[0.15px] text-white/[0.46]">
                Contact
              </span>
              <div className="flex items-center gap-[6px]">
                {socials.map((social) =>
                  social.boxed ? (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="flex size-[36.453px] items-center justify-center rounded-[4.239px] bg-white/[0.11]"
                    >
                      <img src={social.src} alt="" width={21.264} height={21.264} />
                    </a>
                  ) : (
                    <a key={social.label} href="#" aria-label={social.label}>
                      <img src={social.src} alt="" width={36.453} height={36.453} />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-white/15" />
        </div>

        <p className="text-[12px] leading-[1.12] tracking-[0.12px] text-white/[0.46]">
          <span className="font-semibold">Disclaimer: </span>
          <span className="font-light">
            OAHelper is an independent educational platform. We (oahelper.in) do not own the
            images or questions shown. Content is uploaded by users.
          </span>
        </p>
      </div>
    </footer>
  );
}
