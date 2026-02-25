
export type ProgramSlug = string

export const Program1: ProgramSlug = "ngaji-dasar";
export const Program2: ProgramSlug = "tajwid";
export const Program3: ProgramSlug = "tahfizh";
export const Program4: ProgramSlug = "tafsir";
export const Program5: ProgramSlug = "dai-guru";

export interface Program {
  slug?: ProgramSlug;
  name?: string;
  shortName?: string;
}

export interface ProgramDetail extends Program {
  description?: string;
}

export interface ProgramContent extends Program {
  type?: "course" | "service";
  content?: string;
  target?: string;
  curriculum?: string[];
  services?: string[];
  output?: string;
  withLevels?: boolean;
  levels?: {
    name: string;
    focus: string;
    target: string;
    curriculum: string[];
    output: string;
  }[];
  levelsShort?: string[];
}

export const programShortNames: Program[] = [
  { slug: Program1, shortName: "8 Jam bisa baca Qur’an" },
  { slug: Program2, shortName: "Bimbingan Tajwid" },
  { slug: Program3, shortName: "Tahfidz al-Qur’an" },
  { slug: Program4, shortName: "Terjemah & Baca Kitab" },
  { slug: Program5, shortName: "Pelatihan Dai & Guru Mengaji" }
]

export const programSlugs: Record<ProgramSlug, boolean> = {
  [Program1]: true,
  [Program2]: true,
  [Program3]: true,
  [Program4]: true,
  [Program5]: true
}

export const programShortDetails: ProgramDetail[] = [
  {
    name: "Program “8 Jam Bisa Membaca Al-Qur’an”",
    description: "Program percepatan khusus bagi orang dewasa yang sama sekali belum mengenal huruf Al-Qur’an, dilaksanakan selama 8 jam pembelajaran intensif dalam kelompok maksimal 8 orang.",
    slug: Program1
  },
  {
    name: "Program Bimbingan Tajwid Al-Qur’an",
    description: "Program pembinaan bacaan Al-Qur’an secara bertahap untuk mencapai standar tajwid yang benar dan tartil.",
    slug: Program2
  },
  {
    name: "Program Tahfidz Al-Qur’an",
    description: "Program menghafal Al-Qur’an secara bertahap dengan sistem setoran, murojaah, dan pembinaan ruhiyah.",
    slug: Program3
  },
  {
    name: "Bimbingan Terjemah Al-Qur’an & Baca Kitab",
    description: "Program pendalaman pemahaman Al-Qur’an melalui penerjemahan tekstual dan kontekstual disertai latihan membaca kitab gundul (kitab tanpa harakat).",
    slug: Program4
  },{
    name: "Program Pelatihan Dai & Guru Mengaji",
    description: "Program pelatihan untuk mencetak guru Al-Qur’an dan dai yang siap membina masyarakat dengan metode pengajaran Qur’ani dan dakwah yang membangun.",
    slug: Program5
  }
]

export const programContents: Record<ProgramSlug, ProgramContent> = {
  [Program1]: {
    type: "course",
    name: "Program “8 Jam Bisa Membaca Al-Qur’an”",
    content: "Program percepatan khusus bagi orang dewasa yang sama sekali belum mengenal huruf Al-Qur’an, dilaksanakan selama 8 jam pembelajaran intensif dalam kelompok maksimal 8 orang.",
    target: "Dewasa pemula (nol dasar), Mualaf, Orang tua yang ingin mulai belajar dari awal",
    curriculum: [
      "Pengenalan huruf hijaiyah secara cepat dan sistematis",
      "Latihan pengucapan makharijul huruf dasar",
      "Penggabungan huruf menjadi suku kata dan kata",
      "Latihan membaca ayat-ayat pendek",
      "Praktik langsung dengan pendampingan intensif"
    ],
    output: "Peserta mampu mengenali huruf hijaiyah dan membaca rangkaian ayat sederhana secara mandiri."
  },
  [Program2]: {
    type: "course",
    name: "Program Bimbingan Tajwid Al-Qur’an",
    content: "Program pembinaan bacaan Al-Qur’an secara bertahap untuk mencapai standar tajwid yang benar dan tartil.",
    withLevels: true,
    levels: [
      {
        name: "Fashahatul Huruf",
        focus: "Ketepatan pelafalan huruf sesuai makhraj dan sifatnya.",
        target: "Peserta yang sudah bisa membaca tetapi belum tepat pengucapannya.",
        curriculum: [
          "Pendalaman makharijul huruf",
          "Sifat-sifat huruf (jahr, hams, tafkhim, tarqiq, dll.)",
          "Latihan talaqqi individual",
          "Koreksi kesalahan umum bacaan"
        ],
        output: "Peserta mampu membaca huruf dan kata dalam Al-Qur’an dengan fasih dan tepat."
      },
      {
        name: "Maharatut Tajwid",
        focus: "Penerapan seluruh kaidah tajwid dalam praktik membaca.",
        target: "Peserta yang sudah fasih huruf dan siap naik ke tingkat penerapan hukum bacaan.",
        curriculum: [
          "Hukum nun mati & mim mati",
          "Hukum mad (panjang pendek)",
          "Waqaf dan ibtida’",
          "Latihan membaca tartil per halaman",
          "Evaluasi bacaan terstandar"
        ],
        output: "Peserta mampu membaca Al-Qur’an secara tartil sesuai seluruh kaidah tajwid."
      }
    ]
  },
  [Program3]: {
    type: "course",
    name: "Program Tahfidz Al-Qur’an",
    content: "Program menghafal Al-Qur’an secara bertahap dengan sistem setoran, murojaah, dan pembinaan ruhiyah.",
    target: "Anak-anak, remaja, dan dewasa yang memiliki komitmen menghafal secara bertahap.",
    curriculum: [
      "Target hafalan berjenjang (1–30 juz)",
      "Metode setoran hafalan harian",
      "Sistem murojaah terkontrol",
      "Manajemen waktu dan disiplin hafalan",
      "Pembinaan adab, akhlak, dan ruhiyah hafidz"
    ],
    levelsShort: [
      "1 Juz",
      "5 Juz",
      "10 Juz",
      "15 Juz",
      "20 Juz",
      "25 Juz",
      "30 Juz"
    ],
    output: "Hafalan kuat (mutqin), terjaga, dan memiliki karakter sebagai penjaga Al-Qur’an."
  },
  [Program4]: {
    type: "course",
    name: "Program Bimbingan Terjemah Al-Qur’an & Baca Kitab",
    content: "Program pendalaman pemahaman Al-Qur’an melalui penerjemahan tekstual dan kontekstual disertai latihan membaca kitab gundul (kitab tanpa harakat).",
    target: "Remaja, mahasiswa, guru, dan masyarakat yang ingin memahami isi Al-Qur’an lebih mendalam.",
    curriculum: [
      "Kaidah dasar bahasa Arab (nahwu & sharaf dasar)",
      "Teknik menerjemahkan ayat secara tekstual",
      "Pemahaman kontekstual ayat (asbabun nuzul & tafsir ringkas)",
      "Tadabbur ayat dan aplikasinya",
      "Latihan membaca kitab gundul dasar"
    ],
    output: "Peserta mampu memahami makna ayat Al-Qur’an secara dasar dan membaca kitab gundul tingkat pemula."
  },
  [Program5]: {
    type: "course",
    name: "Program Pelatihan Dai & Guru Mengaji",
    content: "Program pelatihan untuk mencetak guru Al-Qur’an dan dai yang siap membina masyarakat dengan metode pengajaran Qur’ani dan dakwah yang membangun.",
    target: "Calon guru ngaji, dai muda, aktivis dakwah, dan pengurus lembaga pendidikan.",
    curriculum: [
      "Metodologi pengajaran Al-Qur’an efektif",
      "Manajemen kelas Qur’ani",
      "Psikologi pembelajaran",
      "Teknik komunikasi dan public speaking dakwah",
      "Strategi dakwah berbasis masyarakat",
      "Micro teaching & praktik ceramah"
    ],
    output: "Lahirnya guru dan dai Qur’ani yang kompeten, komunikatif, dan siap terjun membina umat."
  }
}