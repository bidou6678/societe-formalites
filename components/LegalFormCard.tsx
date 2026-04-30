import Link from "next/link";

type LegalFormCardProps = {
  acronym: string;
  fullName: string;
  description: string;
  href: string;
};

export default function LegalFormCard({ acronym, fullName, description, href }: LegalFormCardProps) {
  const fontSize = acronym.length <= 3 ? "14px" : acronym.length === 4 ? "12px" : "10px";

  return (
    <Link
      href={href}
      className={[
        "group block flex-1 min-w-0",
        "bg-white rounded-[20px] p-5",
        "shadow-[inset_0_0_0_1px_#E9E9E9]",
        "flex flex-col gap-4",
        "hover:bg-[#E1F3FF] hover:shadow-[inset_0_0_0_2px_#005EFF]",
        "transition-all duration-200",
      ].join(" ")}
    >
      {/* Badge acronyme */}
      <div className="w-11 h-11 bg-[#E1F3FF] rounded-lg flex items-center justify-center shrink-0">
        <span className="text-[#005EFF] font-bold leading-none text-center" style={{ fontSize }}>
          {acronym}
        </span>
      </div>

      {/* Texte + flèche — pr-12 permanent pour que le texte ne bouge jamais */}
      <div className="relative flex flex-col gap-1 flex-1">
        <p className="text-[#000E47] text-sm font-semibold leading-5 pr-12">{fullName}</p>
        <p className="text-[#45518C] text-sm font-normal leading-5 pr-12">{description}</p>

        {/* Flèche absolue — n'affecte pas le layout du texte */}
        <div className="absolute right-0 bottom-0 w-0 overflow-hidden group-hover:w-11 transition-[width] duration-200">
          <div className="w-11 h-11 bg-[#2836E0] rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontSize: "24px" }}>
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
