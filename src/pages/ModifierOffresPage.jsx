import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessStepper from "@/components/ProcessStepper";
import { formesJuridiques } from "@/lib/formes-juridiques";

const SITUATION_LABELS = {
  moi: "Pour moi même",
  client: "Pour le compte d'un client",
};

// URLs de sortie selon l'offre et la situation
const OFFRE_URLS = {
  modifications: {
    moi: "https://scom.legalplace.fr/contrats/s-com-modifications/creer",
    client: "https://scom.legalplace.fr/contrats/s-com-mand-modifications/creer",
  },
  dissolution: {
    moi: "https://scom.legalplace.fr/contrats/s-com-dissolution/creer/",
    client: "https://scom.legalplace.fr/contrats/s-com-mand-dissolution/creer",
  },
};

const offres = [
  {
    id: "modifications",
    title: "Modifications statutaires",
    price: "149,00 €",
    features: [
      "Procès-verbal de modification",
      "Dossier juridique complet",
      "Vérification de votre dossier par un expert",
      "Validation et transmission de votre dossier au greffe",
      "Kbis mis à jour",
      "Publication de l'annonce légale",
      "Assistance téléphonique illimitée",
    ],
  },
  {
    id: "dissolution",
    title: "Dissolution",
    price: "149,00 €",
    features: [
      "Procès-verbal de dissolution",
      "Procès-verbal de liquidation",
      "Dossier juridique complet",
      "Vérification du dossier",
      "Enregistrement de la dissolution",
      "Enregistrement de la liquidation",
      "Garantie anti-rejet",
      "Publication des 2 annonces légales",
      "Traitement express en 24h",
      "Assistance téléphonique illimitée",
    ],
  },
];

export default function ModifierOffresPage() {
  const { forme, situation } = useParams();

  const formeData = formesJuridiques.find(
    (f) => f.slug.toLowerCase() === forme.toLowerCase()
  );

  if (!formeData || !SITUATION_LABELS[situation]) {
    return <Navigate to="/modifier-mon-entreprise" replace />;
  }

  return (
    <>
      <Header />

      <main className="flex-1 bg-[#F2F9FD]">
        <ProcessStepper currentStep={3} forme={formeData.slug} situation={situation} />

        <section className="py-10 lg:py-[48px] px-4 sm:px-8 lg:px-[120px]">
          <div className="flex flex-col sm:flex-row sm:items-stretch gap-6 max-w-[880px] mx-auto">
            {offres.map((offre) => (
              <a
                key={offre.id}
                href={OFFRE_URLS[offre.id]?.[situation] ?? "#"}
                rel="noopener noreferrer"
                className={[
                  "group relative flex-1 flex flex-col",
                  "bg-white rounded-[20px] p-7",
                  "shadow-[inset_0_0_0_1px_#E9E9E9]",
                  "hover:bg-[#E1F3FF] hover:shadow-[inset_0_0_0_2px_#005EFF]",
                  "transition-all duration-200",
                ].join(" ")}
              >
                <h2
                  className="text-[#000E47] font-semibold mb-4"
                  style={{ fontSize: "16px", lineHeight: "22px" }}
                >
                  {offre.title}
                </h2>

                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="text-[#005EFF] font-bold"
                    style={{ fontSize: "30px", lineHeight: "1" }}
                  >
                    {offre.price}
                  </span>
                  <span
                    className="material-symbols-outlined text-[#005EFF] opacity-50"
                    style={{ fontSize: "17px" }}
                  >
                    info
                  </span>
                </div>

                <div className="h-px bg-[#E9E9E9] mb-5" />

                <ul className="flex flex-col gap-[10px]">
                  {offre.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined shrink-0 text-[#005EFF]"
                        style={{ fontSize: "17px", marginTop: "2px" }}
                      >
                        check
                      </span>
                      <span className="text-[#000E47] text-sm leading-5">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-7 right-7 w-0 overflow-hidden group-hover:w-8 transition-[width] duration-200">
                  <div className="w-8 h-8 bg-[#005EFF] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: "16px" }}>
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
