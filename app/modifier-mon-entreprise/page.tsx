import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalFormCard from "@/components/LegalFormCard";
import ProcessStepper from "@/components/ProcessStepper";
import { formesJuridiques } from "@/lib/formes-juridiques";

export default function ModifierMonEntreprisePage() {

  return (
    <>
      <Header />

      <main className="flex-1 bg-[#F2F9FD]">
        {/* Barre de progression */}
        <ProcessStepper currentStep={1} />

        {/* Titre de section */}
        <section className="py-10 lg:py-[64px]">
          <h1
            className="text-[#000E47] font-bold text-center mb-2 px-4"
            style={{ fontSize: "32px", lineHeight: "40px" }}
          >
            Modifier ou dissoudre mon entreprise
          </h1>
          <p
            className="text-[#45518C] text-center mb-8 lg:mb-[48px] px-4"
            style={{ fontSize: "16px", lineHeight: "24px" }}
          >
            Sélectionnez la forme juridique de votre entreprise pour accéder aux formalités disponibles.
          </p>

          <div className="px-4 sm:px-8 lg:px-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formesJuridiques.map((f) => (
              <LegalFormCard
                key={f.slug}
                acronym={f.acronym}
                fullName={f.fullName}
                description={f.description}
                href={`/modifier-mon-entreprise/${f.slug}`}
              />
            ))}
          </div>
        </section>

        {/* Bandeau réassurance */}
        <section className="bg-white border-t border-[#E9E9E9] px-4 sm:px-8 lg:px-[120px] py-10 lg:py-[48px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[60px]">
            <div className="flex-1">
              <h2
                className="text-[#000E47] font-bold mb-2"
                style={{ fontSize: "22px", lineHeight: "30px" }}
              >
                Pourquoi passer par Société.com&nbsp;?
              </h2>
              <p className="text-[#45518C]" style={{ fontSize: "15px", lineHeight: "24px" }}>
                Nos formalistes vérifient chaque dossier avant transmission au guichet unique.
                Vous bénéficiez d&apos;un suivi personnalisé et d&apos;une publication sous 24&nbsp;h.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 lg:gap-[40px] lg:shrink-0">
              {[
                { icon: "task_alt", label: "Dossier vérifié par un expert" },
                { icon: "bolt", label: "Publication sous 24 h" },
                { icon: "headset_mic", label: "Support 7j/7" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 bg-[#E1F3FF] rounded-full flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[#005EFF]"
                      style={{ fontSize: "24px" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-[#000E47] text-sm font-medium max-w-[100px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
