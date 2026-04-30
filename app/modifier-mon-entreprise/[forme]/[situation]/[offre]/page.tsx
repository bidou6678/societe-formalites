import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessStepper from "@/components/ProcessStepper";
import SelectionForm from "@/components/SelectionForm";
import { formesJuridiques } from "@/lib/formes-juridiques";

const SITUATION_LABELS: Record<string, string> = {
  moi: "Pour moi même",
  client: "Pour le compte d'un client",
};

const OFFRE_DETAILS = {
  modifications: {
    title: "Modifications statutaires",
    subtitle:
      "Bénéficiez d'un accompagnement complet et d'une expérience simplifiée lors de vos démarches de modifications.",
    benefits: [
      "Rédaction complète des actes juridiques",
      "Transmission au greffe incluse",
      "Kbis mis à jour sous 24h",
      "Assistance téléphonique illimitée",
    ],
    selectionTitle: "Quels types de modification souhaitez-vous effectuer ?",
    options: [
      "Changement de siège social",
      "Changement de gérant / président",
      "Changement de dénomination",
      "Changement d'objet social",
      "Cession de parts / actions",
      "Augmentation de capital",
      "Réduction de capital",
      "Transformation de société",
    ],
    cta: "Démarrer ma démarche",
  },
  dissolution: {
    title: "Dissolutions",
    subtitle:
      "Bénéficiez d'un accompagnement complet et d'une expérience simplifiée lors de vos démarches de dissolutions.",
    benefits: [
      "Traitement express en 24h",
      "Garantie anti-rejet",
      "Publication des 2 annonces légales",
      "Assistance téléphonique illimitée",
    ],
    selectionTitle: "Quels types de dissolution souhaitez-vous effectuer ?",
    options: [
      "Radiation auto entrepreneur",
      "Dissolution et liquidation",
      "Mise en sommeil",
      "Dépôt de bilan",
    ],
    cta: "Démarrer ma démarche",
  },
} as const;

type OffreKey = keyof typeof OFFRE_DETAILS;

export async function generateStaticParams() {
  return formesJuridiques.flatMap((f) =>
    ["moi", "client"].flatMap((sit) =>
      (Object.keys(OFFRE_DETAILS) as OffreKey[]).map((off) => ({
        forme: f.slug,
        situation: sit,
        offre: off,
      }))
    )
  );
}

export default async function OffreDetailPage({
  params,
}: {
  params: Promise<{ forme: string; situation: string; offre: string }>;
}) {
  const { forme, situation, offre } = await params;

  const formeData = formesJuridiques.find(
    (f) => f.slug.toLowerCase() === forme.toLowerCase()
  );

  if (!formeData || !SITUATION_LABELS[situation] || !(offre in OFFRE_DETAILS))
    notFound();

  const detail = OFFRE_DETAILS[offre as OffreKey];

  return (
    <>
      <Header />

      <main className="flex-1 bg-[#F2F9FD]">
        {/* Barre de progression — étape 4 */}
        <ProcessStepper currentStep={4} forme={formeData.slug} situation={situation} />

        {/* Layout deux colonnes */}
        <div className="px-[120px] py-10 flex gap-10 items-start">
          {/* Colonne gauche — titre + sous-titre + bénéfices */}
          <div className="flex flex-col gap-8 w-[380px] shrink-0 sticky top-8">
            <div className="flex flex-col gap-4">
              <h1
                className="text-[#000E47] font-bold"
                style={{ fontSize: "38px", lineHeight: "46px" }}
              >
                {detail.title}
              </h1>
              <p
                className="text-[#45518C]"
                style={{ fontSize: "17px", lineHeight: "28px" }}
              >
                {detail.subtitle}
              </p>
            </div>

            {/* Bénéfices en colonne */}
            <div className="flex flex-col gap-4">
              {detail.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-[#005EFF] shrink-0"
                    style={{ fontSize: "20px" }}
                  >
                    check_circle
                  </span>
                  <span className="text-[#000E47] font-medium" style={{ fontSize: "15px", lineHeight: "22px" }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — sélection */}
          <div className="flex-1">
            <div className="bg-white rounded-[20px] shadow-[inset_0_0_0_1px_#E9E9E9] p-8">
              <SelectionForm
                title={detail.selectionTitle}
                options={[...detail.options]}
                cta={detail.cta}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
