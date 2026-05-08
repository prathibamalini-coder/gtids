import { Landmark } from "lucide-react";
const apgvbLogo = "/assets/partners/APGVB.png";
const cboiLogo = "/assets/partners/cboi.png";
const iciciLogo = "/assets/partners/ICICI_Bank_Logo.png";
const iobLogo = "/assets/partners/ios-logo.jpg";
const sbiLogo = "/assets/partners/sbi_banklogo.png";
const tgbLogo = "/assets/partners/TGB.webp";
const tngbLogo = "/assets/partners/Tngb.webp";
const unionBankLogo = "/assets/partners/union-bank_New.png";

const partners = [
  { name: "State Bank of India", logo: sbiLogo },
  { name: "Andhra Pragathi Grameena Bank", logo: apgvbLogo },
  { name: "Tamil Nadu Grameena Bank", logo: tngbLogo },
  { name: "Telangana Grameena Bank", logo: tgbLogo },
  { name: "Central Bank of India", logo: cboiLogo },
  { name: "Indian Overseas Bank", logo: iobLogo },
  { name: "Union Bank of India", logo: unionBankLogo },
  { name: "ICICI Bank", logo: iciciLogo },
];

function PartnerLogo({ name, logo }: { name: string; logo: any }) {
  return (
    <div className="flex h-24 w-36 items-center justify-center rounded-3xl bg-card p-4 shadow-soft ring-1 ring-border overflow-hidden">
      <img src={logo} alt={`${name} logo`} loading="lazy" className="h-full w-auto object-contain" />
    </div>
  );
}

export function BankPartnersMarquee() {
  // duplicate list for seamless loop
  const loop = [...partners, ...partners];
  return (
    <section id="partners" className="relative overflow-hidden border-y border-border bg-surface py-12">
      <div className="container-prose mb-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          <Landmark className="h-4 w-4" /> Trusted Partners
        </span>
        <h2 className="mt-2 font-display text-2xl md:text-3xl text-foreground">
          Powered by India's leading banks
        </h2>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max gap-5 animate-bank-marquee px-4 py-2">
          {loop.map((p, i) => (
            <PartnerLogo key={`${p.name}-${i}`} {...p} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bank-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-bank-marquee {
          animation: bank-marquee 28s linear infinite;
        }
        .animate-bank-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
