export type Modification = {
  icon: string;
  title: string;
  description: string;
  price: string;
};

export type FormeJuridique = {
  acronym: string;
  fullName: string;
  description: string;
  slug: string;
  intro: string;
  modifications: Modification[];
  dissolutions: Modification[];
};

// ─── Blocs réutilisables ─────────────────────────────────────────────────────

const modSiege: Modification = {
  icon: "location_on",
  title: "Changement de siège social",
  description: "Déplacez le siège social en France ou à l'étranger",
  price: "Dès 79 €",
};
const modNom: Modification = {
  icon: "edit",
  title: "Changement de dénomination",
  description: "Modifiez le nom commercial de votre société",
  price: "Dès 99 €",
};
const modObjet: Modification = {
  icon: "article",
  title: "Changement d'objet social",
  description: "Élargissez ou modifiez l'activité de votre société",
  price: "Dès 99 €",
};
const modCapHausse: Modification = {
  icon: "trending_up",
  title: "Augmentation de capital",
  description: "Renforcez les fonds propres de votre société",
  price: "Dès 149 €",
};
const modCapBaisse: Modification = {
  icon: "trending_down",
  title: "Réduction de capital",
  description: "Réduisez le capital social de votre société",
  price: "Dès 149 €",
};
const modTransformation: Modification = {
  icon: "change_circle",
  title: "Transformation de société",
  description: "Transformez votre société en une autre forme juridique",
  price: "Dès 199 €",
};
const modProrogation: Modification = {
  icon: "schedule",
  title: "Prorogation de durée",
  description: "Prolongez la durée de vie de votre société au-delà des 99 ans",
  price: "Dès 79 €",
};
const modEtablissement: Modification = {
  icon: "add_business",
  title: "Ouverture d'un établissement",
  description: "Créez un établissement secondaire ou une succursale",
  price: "Dès 89 €",
};

const dissoAmiable: Modification = {
  icon: "gavel",
  title: "Dissolution-liquidation amiable",
  description: "Fermez définitivement votre société à l'amiable",
  price: "Dès 199 €",
};
const dissoSansLiquid: Modification = {
  icon: "merge_type",
  title: "Dissolution sans liquidation",
  description: "Dissolution par fusion ou scission de sociétés",
  price: "Dès 149 €",
};

// ─── Formes juridiques ────────────────────────────────────────────────────────

export const formesJuridiques: FormeJuridique[] = [
  {
    acronym: "SAS",
    fullName: "Société par Actions Simplifiée",
    description: "La forme juridique la plus flexible pour les entrepreneurs",
    slug: "SAS",
    intro: "Modifiez ou dissolvez votre SAS en toute sérénité. Nos formalistes prennent en charge l'ensemble des démarches auprès du guichet unique.",
    modifications: [
      modSiege,
      modNom,
      modObjet,
      { icon: "manage_accounts", title: "Changement de président", description: "Nommez ou révoquez un président ou directeur général", price: "Dès 89 €" },
      { icon: "swap_horiz", title: "Cession d'actions", description: "Transférez des actions entre associés ou vers un tiers", price: "Dès 149 €" },
      modCapHausse,
      modCapBaisse,
      modTransformation,
      modProrogation,
      modEtablissement,
    ],
    dissolutions: [dissoAmiable, dissoSansLiquid],
  },
  {
    acronym: "SARL",
    fullName: "Société à Responsabilité Limitée",
    description: "La forme juridique la plus répandue en France",
    slug: "SARL",
    intro: "Modifiez ou dissolvez votre SARL en toute sérénité. Nos formalistes prennent en charge l'ensemble des démarches auprès du guichet unique.",
    modifications: [
      modSiege,
      modNom,
      modObjet,
      { icon: "manage_accounts", title: "Changement de gérant", description: "Nommez ou révoquez le gérant de votre SARL", price: "Dès 89 €" },
      { icon: "swap_horiz", title: "Cession de parts sociales", description: "Transférez des parts entre associés ou vers un tiers", price: "Dès 149 €" },
      modCapHausse,
      modCapBaisse,
      modTransformation,
      modProrogation,
      modEtablissement,
    ],
    dissolutions: [dissoAmiable, dissoSansLiquid],
  },
  {
    acronym: "SASU",
    fullName: "Société par Actions Simplifiée Unipersonnelle",
    description: "La SAS à associé unique, idéale pour les entrepreneurs solos",
    slug: "SASU",
    intro: "Modifiez ou dissolvez votre SASU en toute sérénité. Nos formalistes prennent en charge l'ensemble des démarches auprès du guichet unique.",
    modifications: [
      modSiege,
      modNom,
      modObjet,
      { icon: "manage_accounts", title: "Changement de président", description: "Nommez ou révoquez le président de votre SASU", price: "Dès 89 €" },
      modCapHausse,
      modCapBaisse,
      modTransformation,
      modProrogation,
      modEtablissement,
    ],
    dissolutions: [dissoAmiable, dissoSansLiquid],
  },
  {
    acronym: "EURL",
    fullName: "Entreprise Unipersonnelle à Responsabilité Limitée",
    description: "La SARL à associé unique, pour les entrepreneurs indépendants",
    slug: "EURL",
    intro: "Modifiez ou dissolvez votre EURL en toute sérénité. Nos formalistes prennent en charge l'ensemble des démarches auprès du guichet unique.",
    modifications: [
      modSiege,
      modNom,
      modObjet,
      { icon: "manage_accounts", title: "Changement de gérant", description: "Nommez ou révoquez le gérant de votre EURL", price: "Dès 89 €" },
      modCapHausse,
      modCapBaisse,
      modTransformation,
      modProrogation,
      modEtablissement,
    ],
    dissolutions: [dissoAmiable, dissoSansLiquid],
  },
  {
    acronym: "SCI",
    fullName: "Société Civile Immobilière",
    description: "La structure idéale pour gérer et transmettre un patrimoine immobilier",
    slug: "SCI",
    intro: "Modifiez ou dissolvez votre SCI en toute sérénité. Nos formalistes prennent en charge l'ensemble des démarches auprès du guichet unique.",
    modifications: [
      modSiege,
      modNom,
      modObjet,
      { icon: "manage_accounts", title: "Changement de gérant", description: "Nommez ou révoquez le gérant de votre SCI", price: "Dès 89 €" },
      { icon: "swap_horiz", title: "Cession de parts sociales", description: "Transférez des parts entre associés ou vers un tiers", price: "Dès 149 €" },
      modCapHausse,
      modCapBaisse,
      modProrogation,
      modEtablissement,
    ],
    dissolutions: [dissoAmiable, dissoSansLiquid],
  },
  {
    acronym: "SA",
    fullName: "Société Anonyme",
    description: "La structure adaptée aux grandes entreprises et aux levées de fonds importantes",
    slug: "SA",
    intro: "Modifiez ou dissolvez votre SA en toute sérénité. Nos formalistes prennent en charge l'ensemble des démarches auprès du guichet unique.",
    modifications: [
      modSiege,
      modNom,
      modObjet,
      { icon: "manage_accounts", title: "Changement de directeur général", description: "Nommez ou révoquez le directeur général ou des administrateurs", price: "Dès 89 €" },
      { icon: "swap_horiz", title: "Cession d'actions", description: "Transférez des actions entre actionnaires ou vers un tiers", price: "Dès 149 €" },
      modCapHausse,
      modCapBaisse,
      modTransformation,
      modProrogation,
    ],
    dissolutions: [dissoAmiable, dissoSansLiquid],
  },
  {
    acronym: "SNC",
    fullName: "Société en Nom Collectif",
    description: "La forme pour les associés qui souhaitent exercer en nom collectif",
    slug: "SNC",
    intro: "Modifiez ou dissolvez votre SNC en toute sérénité. Nos formalistes prennent en charge l'ensemble des démarches auprès du guichet unique.",
    modifications: [
      modSiege,
      modNom,
      modObjet,
      { icon: "manage_accounts", title: "Changement de gérant", description: "Nommez ou révoquez le gérant de votre SNC", price: "Dès 89 €" },
      { icon: "swap_horiz", title: "Cession de parts sociales", description: "Transférez des parts entre associés", price: "Dès 149 €" },
      modProrogation,
      modEtablissement,
    ],
    dissolutions: [dissoAmiable, dissoSansLiquid],
  },
  {
    acronym: "Asso.",
    fullName: "Association loi 1901",
    description: "La structure non lucrative pour les projets collectifs et associatifs",
    slug: "association",
    intro: "Modifiez ou dissolvez votre association en toute sérénité. Nos formalistes prennent en charge l'ensemble des démarches auprès de la préfecture.",
    modifications: [
      { icon: "location_on", title: "Changement de siège", description: "Déplacez le siège social de votre association", price: "Dès 49 €" },
      { icon: "edit", title: "Changement de nom", description: "Modifiez le nom de votre association", price: "Dès 49 €" },
      { icon: "article", title: "Modification des statuts", description: "Modifiez les statuts de votre association", price: "Dès 79 €" },
      { icon: "manage_accounts", title: "Changement de dirigeants", description: "Nommez de nouveaux membres du bureau (président, trésorier, secrétaire)", price: "Dès 49 €" },
    ],
    dissolutions: [
      { icon: "gavel", title: "Dissolution de l'association", description: "Dissolvez votre association et liquidez ses actifs", price: "Dès 149 €" },
    ],
  },
];
