import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: "rocket_launch",
    title: "Créer mon entreprise",
    description: "La création d'entreprise simple et rapide",
    href: "/creer-mon-entreprise",
  },
  {
    icon: "change_circle",
    title: "Modifier mon entreprise",
    description: "Modifier son entreprise simplement",
    href: "/modifier-mon-entreprise",
  },
  {
    icon: "receipt",
    title: "Publier une annonce légale",
    description: "Votre annonce publiée en 1 minute",
    href: "https://www.societe.com/services/annonces-legales",
  },
  {
    icon: "receipt_long",
    title: "Gérer ma facture électronique",
    description: "Gérer ma facture électronique (PDP)",
    href: "https://www.pennylane.com/fr/facture-electronique-societe?utm_source=societe&utm_medium=paid&ae=381",
  },
  {
    icon: "payments",
    title: "Gérer ma comptabilité",
    description: "Votre comptabilité 100% en ligne",
    href: "https://get.l-expert-comptable.com/lp-partenaire-societecom?utm_source=other&utm_medium=partenariats&utm_campaign=societe.com&detail_partenariat=001bS00000P2KfPQAV&utm_content=homepage",
  },
  {
    icon: "currency_exchange",
    title: "Récupérer mes impayés",
    description: "Recouvrement de créances simplifié",
    href: "https://www.impayes.com/lp-partenaire-societecom.html",
  },
  {
    icon: "account_balance",
    title: "Ouvrir un compte bancaire",
    description: "Le compte bancaire pro qui te lance",
    href: "https://www.revolut.com/fr-FR/business/open-enterprise-business-account/?pid=Googlepaid&af_c_id=21705291826&af_adset_id=171028470881&af_ad=745062439090&utm_term=revolut+compte+pro&af_siteid=&utm_match=p&utm_network=g&utm_source=Googlepaid&c=Rev_BIZ_GSearch_2024_FR_FR_BRAND&utm_campaign=Rev_BIZ_GSearch_2024_FR_FR_BRAND&promo=B2B_SEARCH_BIZ_FR_B&af_sub5=FR",
  },
  {
    icon: "public",
    title: "Réaliser mon Bilan Carbone®",
    description: "Le Bilan Carbone efficace et conforme",
    href: "https://www.societe.com/solutions/bilan-carbone",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-[#F2F9FD]">
        <section className="py-10 lg:py-[80px]">
          <h1
            className="text-[#000E47] font-bold text-center w-full mb-8 lg:mb-[60px] px-4"
            style={{ fontSize: "32px", lineHeight: "40px" }}
          >
            Société.com vous accompagne dans l&apos;ensemble de vos besoins
          </h1>

          <div className="px-4 sm:px-8 lg:px-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.href} {...f} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
