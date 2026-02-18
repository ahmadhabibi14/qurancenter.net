export interface Program {
  slug: string;
  name?: string;
  shortName?: string;
}

export interface ProgramDetail extends Program {
  description?: string;
}

export const programShortNames: Program[] = [
  { slug: "ngaji-dasar", shortName: "Ngaji Dasar" },
  { slug: "tahsin", shortName: "Tahsin" },
  { slug: "tahfizh", shortName: "Tahfizh" },
  { slug: "tadabbur", shortName: "Tadabbur" },
  { slug: "tafsir", shortName: "Tafsir" },
  { slug: "pembinaan-dai", shortName: "Pembinaan Dai" },
  { slug: "training", shortName: "Training Al-Qur’an" }
]