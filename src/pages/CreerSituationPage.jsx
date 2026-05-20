import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessStepper from "@/components/ProcessStepper";
import { formesJuridiques } from "@/lib/formes-juridiques";

// Seules ces formes passent par l'étape situation (SCI/EI/Micro ont un lien direct depuis l'étape 1)
const FORMES_CREATION = ["SAS", "SARL", "SASU", "EURL"];

const situations = [
  {
    slug: "moi",
    icon: "person",
    title: "Pour moi même",
    description: "Vous êtes le futur dirigeant et souhaitez créer votre propre entreprise.",
    tag: "Particulier",
    href: "https://societe-com.legalplace.fr/contrats/s-com-creation-societe/creer",
  },
  {
    slug: "client",
    icon: "group",
    title: "Pour le compte d'un client",
    description:
      "Vous êtes expert-comptable, avocat ou mandataire et réalisez cette démarche pour le compte d'un client.",
    tag: "Professionnel",
    href: "https://societe-com.legalplace.fr/contrats/s-com-mand-creation-societe/creer",
  },
];

export default function CreerSituationPage() {
  const { forme } = useParams();

  const formeData = formesJuridiques.find(
    (f) => f.slug.toLowerCase() === forme.toLowerCase()
  );

  if (!formeData || !FORMES_CREATION.includes(formeData.acronym)) {
    return <Navigate to="/creer-mon-entreprise" replace />;
  }

  return (
    <>
      <Header />

      <main className="flex-1 bg-[#F2F9FD]">
        <ProcessStepper currentStep={2} forme={formeData.slug} />

        <section className="px-4 sm:px-8 lg:px-[120px] pt-10 pb-12">
          <h1
            className="text-[#000E47] font-bold mb-2"
            style={{ fontSize: "28px", lineHeight: "36px" }}
          >
            Quelle est votre situation&nbsp;?
          </h1>
          <p className="text-[#45518C]" style={{ fontSize: "16px", lineHeight: "24px" }}>
            Précisez si vous effectuez cette démarche pour vous-même ou pour le compte d&apos;un client.
          </p>
        </section>

        <section className="px-4 sm:px-8 lg:px-[120px] pb-10 lg:pb-[80px]">
          <div className="flex flex-col sm:flex-row gap-6">
            {situations.map((sit) => (
              <a
                key={sit.slug}
                href={sit.href}
                rel="noopener noreferrer"
                className={[
                  "group relative flex-1 flex flex-col gap-6 p-8",
                  "bg-white rounded-[20px]",
                  "shadow-[inset_0_0_0_1px_#E9E9E9]",
                  "hover:bg-[#E1F3FF] hover:shadow-[inset_0_0_0_2px_#005EFF]",
                  "transition-all duration-200",
                ].join(" ")}
              >
                <div className="w-16 h-16 bg-[#E1F3FF] rounded-2xl flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-[#005EFF]"
                    style={{ fontSize: "36px" }}
                  >
                    {sit.icon}
                  </span>
                </div>

                <span className="inline-flex self-start items-center bg-[#F2F9FD] text-[#45518C] text-xs font-medium px-3 py-1 rounded-full border border-[#E9E9E9]">
                  {sit.tag}
                </span>

                <div className="flex flex-col gap-2 pr-12">
                  <h2 className="text-[#1E2F73] text-2xl font-bold leading-8">{sit.title}</h2>
                  <p className="text-[#45518C] text-base leading-6">{sit.description}</p>
                </div>

                <div className="absolute bottom-8 right-8 w-0 overflow-hidden group-hover:w-11 transition-[width] duration-200">
                  <div className="w-11 h-11 bg-[#2836E0] rounded-lg flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontSize: "24px" }}
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
