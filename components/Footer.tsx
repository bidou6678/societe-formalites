import Link from "next/link";

const footerLinks = [
  {
    title: "Offres et services",
    links: [
      { label: "Offres", href: "/offres" },
      { label: "Fichiers", href: "/fichiers" },
      { label: "Annuaire", href: "/annuaire" },
      { label: "API", href: "/api" },
    ],
  },
  {
    title: "Aide et contact",
    links: [
      { label: "Contact Societe.com", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Actualité",
    links: [{ label: "Blog Societe", href: "/blog" }],
  },
];

const legalLinks = [
  { label: "CGU & CGV", href: "/cgu" },
  { label: "Gestion des cookies", href: "/cookies" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Mentions Légales", href: "/mentions-legales" },
];

export default function Footer() {
  return (
    <footer>
      {/* Footer principal — bleu foncé #0C1E5D */}
      <div className="bg-[#0C1E5D] px-4 sm:px-8 lg:px-[100px] py-8 lg:py-5 flex flex-col gap-5">
        {/* Contenu : logo + colonnes de liens */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start">
          {/* Logo + description */}
          <div className="shrink-0 lg:w-[192px] flex flex-col items-center gap-5">
            {/* Logo blanc */}
            <div className="relative shrink-0" style={{ width: "134px", height: "53.21px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/logo-white.svg"
                alt="Société.com"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <p
              className="text-[#BABFD6] text-center"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              Nous rendons accessible les informations sur les entreprises et
              leurs dirigeants
            </p>
          </div>

          {/* Colonnes de liens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-1 gap-8 lg:gap-20 w-full lg:w-auto">
            {footerLinks.map((col) => (
              <div key={col.title} className="flex flex-col gap-5 flex-1">
                <p
                  className="text-white font-semibold"
                  style={{ fontSize: "14px", lineHeight: "16px" }}
                >
                  {col.title}
                </p>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[#BABFD6] hover:text-white transition-colors"
                        style={{ fontSize: "14px", lineHeight: "16px" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-[#BABFD6] opacity-30" />

        {/* Ligne du bas : réseaux sociaux */}
        <div className="flex items-center justify-start lg:justify-end">
          <div className="flex items-center gap-4">
            <span
              className="text-white uppercase tracking-widest font-normal"
              style={{ fontSize: "12px", lineHeight: "14px" }}
            >
              Suivez-nous
            </span>
            <a
              href="https://www.linkedin.com/company/societe-com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-[#BABFD6] transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/societedotcom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-white hover:text-[#BABFD6] transition-colors"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Barre copyright — #000E47 */}
      <div className="bg-[#000E47] px-4 sm:px-8 lg:px-[100px] py-3 lg:py-0 lg:h-[40px] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-[10px]">
          {legalLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-[10px]">
              {i > 0 && (
                <span className="text-[#8E95BA]" style={{ fontSize: "12px" }}>
                  |
                </span>
              )}
              <Link
                href={link.href}
                className="text-[#8E95BA] hover:text-white transition-colors"
                style={{ fontSize: "12px", lineHeight: "16px" }}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
        <p
          className="text-[#8E95BA] whitespace-nowrap"
          style={{ fontSize: "12px", lineHeight: "16px" }}
        >
          ©2024 SOCIETE SAS
        </p>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
