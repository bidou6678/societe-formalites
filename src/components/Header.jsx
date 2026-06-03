export default function Header() {
  return (
    <header
      className="bg-white h-[76px] flex items-center shrink-0 w-full relative z-10"
      style={{ boxShadow: "0 2px 4px rgba(0,0,0,.12)" }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center gap-4 lg:gap-8 h-full">

        <a href="https://www.societe.com/" className="shrink-0 flex items-center">
          <img
            src="/logos/logo-color.svg"
            alt="Société.com"
            style={{ height: "38px", width: "111px" }}
          />
        </a>

        <nav className="hidden lg:flex items-center shrink-0 h-full">
          {[
            { label: "Solutions", href: "https://www.societe.com/" },
            { label: "Formalités", href: "/" },
            { label: "Offres", href: "https://www.societe.com/offres.html" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 h-full px-5 text-[#000E47] text-base font-medium whitespace-nowrap transition-colors hover:text-[#005EFF] hover:bg-[#F2F9FD] cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="https://www.societe.com/cgi-bin/search" className="hidden md:block flex-1 min-w-0">
          <div className="flex items-center gap-3 bg-white border border-[#BABFD6] rounded-[20px] px-4 py-[11px] hover:border-[#005EFF] transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[#45518C] shrink-0" style={{ fontSize: "24px" }}>
              search
            </span>
            <span className="flex-1 text-base text-[#45518C] font-normal select-none">
              Que recherchez-vous ?
            </span>
          </div>
        </a>

        <a
          href="https://paiement.societe.com/cgi-bin/compte-synthese"
          aria-label="Mon espace"
          className="shrink-0 ml-auto md:ml-0 w-11 h-11 rounded-full border border-[#BABFD6] flex items-center justify-center hover:bg-[#F2F9FD] transition-colors"
        >
          <span className="material-symbols-outlined text-[#000E47]" style={{ fontSize: "24px" }}>
            account_circle
          </span>
        </a>
      </div>
    </header>
  );
}
