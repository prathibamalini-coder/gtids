
import { PageHero } from "@/components/site/PageHero";
import { Landmark, Building2, GraduationCap } from "lucide-react";
const apgvbLogo = "/assets/partners/APGVB.png";
const cboiLogo = "/assets/partners/cboi.png";
const iciciLogo = "/assets/partners/ICICI_Bank_Logo.png";
const iobLogo = "/assets/partners/ios-logo.jpg";
const sbiLogo = "/assets/partners/sbi_banklogo.png";
const tgbLogo = "/assets/partners/TGB.webp";
const tngbLogo = "/assets/partners/Tngb.webp";
const unionBankLogo = "/assets/partners/union-bank_New.png";


interface Partner {
  name: string;
  short: string;
  desc: string;
  logo?: any;
}

const banks: Partner[] = [
  {
    name: "State Bank of India (SBI)",
    short: "SBI",
    desc: "India's largest public sector bank — partnering with GTIDS to extend banking to rural and tribal populations.",
    logo: sbiLogo,
  },
  {
    name: "Andhra Pragathi Grameena Bank",
    short: "APGB",
    desc: "Regional rural bank serving Andhra Pradesh — collaborating on accounts, DBT and credit linkages.",
    logo: apgvbLogo,
  },
  {
    name: "Tamil Nadu Grameena Bank",
    short: "TNGB",
    desc: "Tamil Nadu's regional rural bank — extending doorstep banking through the GTIDS Bank Mitra network.",
    logo: tngbLogo,
  },
  {
    name: "Telangana Grameena Bank",
    short: "TGB",
    desc: "A regional partner strengthening rural banking outreach across Telangana.",
    logo: tgbLogo,
  },
  {
    name: "Central Bank of India",
    short: "CBI",
    desc: "A trusted public sector partner enabling savings, credit and welfare delivery in underserved geographies.",
    logo: cboiLogo,
  },
  {
    name: "Indian Overseas Bank",
    short: "IOB",
    desc: "Driving formal banking access in rural communities through joint outreach and last-mile services.",
    logo: iobLogo,
  },
  {
    name: "Union Bank of India",
    short: "UBI",
    desc: "A strong public sector partner helping deepen financial access and payments infrastructure in rural markets.",
    logo: unionBankLogo,
  },
  {
    name: "ICICI Bank",
    short: "ICICI",
    desc: "A major financial partner supporting digital banking reach and credit access in rural districts.",
    logo: iciciLogo,
  },
];

const institutions: Partner[] = [
  {
    name: "Centurion University of Technology and Management",
    short: "CUTM",
    desc: "Academic anchor of GTIDS — research, skilling and the 'living lab' model that powers our innovation.",
  },
  {
    name: "State & Central Government Agencies",
    short: "Govt.",
    desc: "Working with welfare departments and DBT programmes to deliver entitlements transparently.",
  },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact · Partners"
        title="Partners powering inclusion."
        description="A trusted network of banks, government agencies and academic institutions."
      />

      <section className="container-prose pb-10">
        <div className="flex items-center gap-3">
          <Landmark className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl text-foreground">Bank Partners</h2>
        </div>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {banks.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                {/* <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-muted ring-1 ring-border overflow-hidden"> */}
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    loading="lazy"
                    className="max-h-20 w-auto object-contain"
                  />
                {/* </div> */}
                <h3 className="font-display text-lg text-foreground leading-tight">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-prose pb-14">
        <div className="flex items-center gap-3">
          <Building2 className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl text-foreground">Institutional Partners</h2>
        </div>
        <div className="mt-5 grid md:grid-cols-2 gap-5">
          {institutions.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-center gap-4">
                <div
                  className="grid h-16 w-16 place-items-center rounded-2xl text-white shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.78 0.15 62) 0%, oklch(0.65 0.16 50) 100%)",
                  }}
                >
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h3 className="font-display text-base text-foreground leading-tight">{p.name}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default PartnersPage;
