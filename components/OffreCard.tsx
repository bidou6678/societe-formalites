import Link from "next/link";

type OffreCardProps = {
  icon: string;
  title: string;
  description: string;
  price: string;
  href: string;
};

export default function OffreCard({ icon, title, description, price, href }: OffreCardProps) {
  return (
    <Link
      href={href}
      className={[
        "group flex-1 min-w-0 flex flex-col",
        "bg-white rounded-[20px] p-6",
        "shadow-[inset_0_0_0_1px_#E9E9E9]",
        "hover:bg-[#E1F3FF] hover:shadow-[inset_0_0_0_2px_#005EFF]",
        "transition-all duration-200",
      ].join(" ")}
    >
      {/* Ligne haute : icône + prix */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 bg-[#E1F3FF] rounded-lg flex items-center justify-center shrink-0">
          <span
            className="material-symbols-outlined text-[#005EFF]"
            style={{ fontSize: "26px" }}
          >
            {icon}
          </span>
        </div>
        <span className="text-[#005EFF] text-xs font-bold bg-[#E1F3FF] px-3 py-1 rounded-full whitespace-nowrap">
          {price}
        </span>
      </div>

      {/* Titre + description */}
      <div className="flex flex-col gap-2 flex-1 mb-5">
        <h3 className="text-[#1E2F73] font-bold text-base leading-5">{title}</h3>
        <p className="text-[#45518C] text-sm leading-[22px]">{description}</p>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-[#E9E9E9] group-hover:border-[#C5D8FF] transition-colors duration-200">
        <span className="text-[#005EFF] text-sm font-semibold">Commencer</span>
        <div className="w-8 h-8 rounded-lg bg-[#005EFF] flex items-center justify-center group-hover:bg-[#0044CC] transition-colors duration-200">
          <span
            className="material-symbols-outlined text-white"
            style={{ fontSize: "18px" }}
          >
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
