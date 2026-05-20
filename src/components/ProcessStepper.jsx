import { Link } from "react-router-dom";

const STEPS = [
  "Choix de la forme juridique",
  "Votre situation",
  // "Offres",
  // "Modification ou dissolution de l'entreprise",
];

function stepHref(stepNum, forme, situation) {
  if (stepNum === 1) return "/modifier-mon-entreprise";
  if (stepNum === 2 && forme) return `/modifier-mon-entreprise/${forme}`;
  if (stepNum === 3 && forme && situation) return `/modifier-mon-entreprise/${forme}/${situation}`;
  return null;
}

export default function ProcessStepper({ currentStep, forme, situation }) {
  return (
    <div className="bg-white border-b border-[#E9E9E9] px-4 sm:px-8 lg:px-[120px] py-5">
      <div className="flex items-center gap-2 flex-wrap">
        {STEPS.map((step, i) => {
          const num = i + 1;
          const isActive = num === currentStep;
          const isDone = num < currentStep;
          const isLast = i === STEPS.length - 1;
          const href = isDone ? stepHref(num, forme, situation) : null;

          return (
            <div key={step} className="flex items-center gap-2">
              {isActive ? (
                <span className="bg-[#E1F3FF] text-[#005EFF] font-semibold text-sm px-3 py-1 rounded-full">
                  {num}. {step}
                </span>
              ) : isDone && href ? (
                <Link to={href} className="text-[#005EFF] font-medium text-sm hover:underline">
                  {num}. {step}
                </Link>
              ) : (
                <span className="text-[#BABFD6] text-sm">
                  {num}. {step}
                </span>
              )}
              {!isLast && (
                <span className="text-[#BABFD6] text-sm select-none">›</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
