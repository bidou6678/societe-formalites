"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white h-[76px] flex items-center shrink-0 w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center gap-4 lg:gap-8 h-full">
        {/* Logo — SVG couleur unique, viewBox 123×43 */}
        <Link href="/" className="shrink-0 flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/logo-color.svg" alt="Société.com" style={{ height: "38px", width: "111px" }} />
        </Link>

        {/* Navigation — masquée sur mobile */}
        <nav className="hidden lg:flex items-center shrink-0">
          <Link
            href="/solutions"
            className="flex items-center gap-2 h-[76px] px-5 text-[#000E47] text-base font-medium hover:text-[#1E2F73] transition-colors whitespace-nowrap"
          >
            Solutions
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              expand_more
            </span>
          </Link>
          <Link
            href="/services"
            className="flex items-center h-[76px] px-5 text-[#000E47] text-base font-medium hover:text-[#1E2F73] transition-colors whitespace-nowrap"
          >
            Services
          </Link>
          <Link
            href="/offres"
            className="flex items-center h-[76px] px-5 text-[#000E47] text-base font-medium hover:text-[#1E2F73] transition-colors whitespace-nowrap"
          >
            Offres
          </Link>
        </nav>

        {/* Barre de recherche — masquée sur mobile */}
        <a
          href="https://www.societe.com/cgi-bin/search"
          className="hidden md:block flex-1 min-w-0"
        >
          <div className="flex items-center gap-3 bg-white border border-[#BABFD6] rounded-[20px] px-4 py-[11px] hover:border-[#005EFF] transition-colors cursor-pointer">
            <span
              className="material-symbols-outlined text-[#45518C] shrink-0"
              style={{ fontSize: "24px" }}
            >
              search
            </span>
            <span className="flex-1 text-base text-[#45518C] font-normal select-none">
              Que recherchez-vous ?
            </span>
          </div>
        </a>

        {/* Bouton espace compte */}
        <a
          href="https://paiement.societe.com/cgi-bin/compte-synthese"
          aria-label="Mon espace"
          className="shrink-0 ml-auto md:ml-0 w-11 h-11 rounded-full border border-[#BABFD6] flex items-center justify-center hover:bg-[#F2F9FD] transition-colors"
        >
          <span
            className="material-symbols-outlined text-[#000E47]"
            style={{ fontSize: "24px" }}
          >
            account_circle
          </span>
        </a>
      </div>
    </header>
  );
}
