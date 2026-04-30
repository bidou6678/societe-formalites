import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessStepper from "@/components/ProcessStepper";
import { formesJuridiques } from "@/lib/formes-juridiques";

const SITUATION_LABELS: Record<string, string> = {
  moi: "Pour moi même",
  client: "Pour le compte d'un client",
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

export async function generateStaticParams() {
  return formesJuridiques.flatMap((f) =>
    ["moi", "client"].map((sit) => ({ forme: f.slug, situation: sit }))
  );
}

export default async function OffresPage({
  params,
}: {
  params: Promise<{ forme: string; situation: string }>;
}) {
  const { forme, situation } = await params;

  const formeData = formesJuridiques.find(
    (f) => f.slug.toLowerCase() === forme.toLowerCase()
  );

  if (!formeData || !SITUATION_LABELS[situation]) notFound();

  return (
    <>
      <Header />

      <main className="flex-1 bg-[#F2F9FD]">
        {/* Barre de progression — étape 3 */}
        <ProcessStepper currentStep={3} forme={formeData.slug} situation={situation} />

        {/* Cartes d'offres — centrées et légèrement plus étroites */}
        <section className="py-[48px] px-[120px]">
          <div className="flex gap-6 max-w-[880px] mx-auto">
            {offres.map((offre) => (
              <Link
                key={offre.id}
                href={`/modifier-mon-entreprise/${formeData.slug}/${situation}/${offre.id}`}
                className={[
                  "group flex-1 flex flex-col",
                  "bg-white rounded-[20px] p-7",
                  "shadow-[inset_0_0_0_1px_#E9E9E9]",
                  "hover:bg-[#E1F3FF] hover:shadow-[inset_0_0_0_2px_#005EFF]",
                  "transition-all duration-200",
                ].join(" ")}
              >
                {/* Titre */}
                <h2
                  className="text-[#000E47] font-semibold mb-4"
                  style={{ fontSize: "16px", lineHeight: "22px" }}
                >
                  {offre.title}
                </h2>

                {/* Prix */}
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

                {/* Séparateur */}
                <div className="h-px bg-[#E9E9E9] mb-5" />

                {/* Prestations */}
                <ul className="flex flex-col gap-[10px] flex-1">
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

                {/* Flèche seule au hover */}
                <div className="flex justify-end mt-6 pt-4 border-t border-[#E9E9E9] group-hover:border-[#C5D8FF] transition-colors duration-200">
                  <div className="w-0 overflow-hidden group-hover:w-9 shrink-0 transition-[width] duration-200">
                    <div className="w-9 h-9 bg-[#005EFF] rounded-lg flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-white"
                        style={{ fontSize: "18px" }}
                      >
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
