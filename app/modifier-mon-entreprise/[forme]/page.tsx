import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessStepper from "@/components/ProcessStepper";
import { formesJuridiques } from "@/lib/formes-juridiques";

export async function generateStaticParams() {
  return formesJuridiques.map((f) => ({ forme: f.slug }));
}

const situations = [
  {
    slug: "moi",
    icon: "person",
    title: "Pour moi même",
    description:
      "Vous êtes dirigeant ou associé et souhaitez effectuer une formalité pour votre propre entreprise.",
    tag: "Particulier",
  },
  {
    slug: "client",
    icon: "group",
    title: "Pour le compte d'un client",
    description:
      "Vous êtes expert-comptable, avocat ou mandataire et réalisez cette démarche pour le compte d'un client.",
    tag: "Professionnel",
  },
];

export default async function SituationPage({
  params,
}: {
  params: Promise<{ forme: string }>;
}) {
  const { forme } = await params;
  const formeData = formesJuridiques.find(
    (f) => f.slug.toLowerCase() === forme.toLowerCase()
  );

  if (!formeData) notFound();

  return (
    <>
      <Header />

      <main className="flex-1 bg-[#F2F9FD]">
        {/* Barre de progression — étape 2 */}
        <ProcessStepper currentStep={2} forme={formeData.slug} />

        {/* Titre */}
        <section className="px-[120px] pt-10 pb-12">
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

        {/* Cartes de choix */}
        <section className="px-[120px] pb-[80px]">
          <div className="flex gap-6">
            {situations.map((sit) => (
              <Link
                key={sit.slug}
                href={`/modifier-mon-entreprise/${formeData.slug}/${sit.slug}`}
                className={[
                  "group relative flex-1 flex flex-col gap-6 p-8",
                  "bg-white rounded-[20px]",
                  "shadow-[inset_0_0_0_1px_#E9E9E9]",
                  "hover:bg-[#E1F3FF] hover:shadow-[inset_0_0_0_2px_#005EFF]",
                  "transition-all duration-200",
                ].join(" ")}
              >
                {/* Icône */}
                <div className="w-16 h-16 bg-[#E1F3FF] rounded-2xl flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-[#005EFF]"
                    style={{ fontSize: "36px" }}
                  >
                    {sit.icon}
                  </span>
                </div>

                {/* Tag */}
                <span className="inline-flex self-start items-center bg-[#F2F9FD] text-[#45518C] text-xs font-medium px-3 py-1 rounded-full border border-[#E9E9E9]">
                  {sit.tag}
                </span>

                {/* Texte — pr-12 pour laisser place à la flèche */}
                <div className="flex flex-col gap-2 pr-12">
                  <h2 className="text-[#1E2F73] text-2xl font-bold leading-8">{sit.title}</h2>
                  <p className="text-[#45518C] text-base leading-6">{sit.description}</p>
                </div>

                {/* Flèche absolue — même comportement que les autres cartes */}
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
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
