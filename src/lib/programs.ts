export interface Program {
  id: string;
  name?: string;
  shortName?: string;
}

export interface ProgramDetail extends Program {
  description?: string;
}

export const programShortNames: Program[] = [
  { id: "ngaji-dasar", shortName: "Ngaji Dasar" },
  { id: "tahsin", shortName: "Tahsin" },
  { id: "tahfizh", shortName: "Tahfizh" },
  { id: "tadabbur", shortName: "Tadabbur" },
  { id: "tafsir", shortName: "Tafsir" },
  { id: "pembinaan-dai", shortName: "Pembinaan Dai" },
  { id: "training", shortName: "Training Al-Qur’an" }
]

export const programs: ProgramDetail[] = [
  {
    id: "ngaji-dasar",
    name: "Program Ngaji Dasar (Tahsinul Qira’ah Pemula)",
    description: "Program pembelajaran membaca Al-Qur’an dari nol bagi anak-anak, remaja, maupun orang dewasa. Fokus pada pengenalan huruf hijaiyah, makharijul huruf, dan dasar-dasar tajwid agar peserta mampu membaca Al-Qur’an dengan benar dan tartil."
  },
  {
    id: "tahsin",
    name: "Program Tahsin (Perbaikan Bacaan Al-Qur’an)",
    description: "Program peningkatan kualitas bacaan bagi yang sudah bisa membaca Al-Qur’an namun ingin memperbaiki kefasihan, tajwid, panjang pendek bacaan, serta adab tilawah sesuai kaidah yang benar."
  },
  {
    id: "tahfizh",
    name: "Program Tahfizh (Menghafal Al-Qur’an)",
    description: "Program pembinaan hafalan Al-Qur’an secara terstruktur dan berjenjang, mulai dari juz pilihan hingga target hafalan tertentu. Dilengkapi dengan sistem muroja’ah dan evaluasi berkala untuk menjaga kualitas hafalan."
  },
  {
    id: "tadabbur",
    name: "Program Tadabbur Al-Qur’an",
    description: "Program pendalaman makna ayat secara tematik untuk membangun kesadaran spiritual dan pembentukan karakter Qur’ani, sehingga Al-Qur’an tidak hanya dibaca, tetapi juga dipahami dan diamalkan."
  },
  {
    id: "tafsir",
    name: "Program Tafsir Al-Qur’an",
    description: "Program kajian tafsir secara sistematis dan ilmiah berdasarkan rujukan tafsir yang mu’tabar. Ditujukan bagi peserta yang ingin memahami kandungan Al-Qur’an secara lebih mendalam dan komprehensif."
  },
  {
    id: "pembinaan-dai",
    name: "Program Pembinaan Dai & Penguatan Organisasi Qur’ani",
    description: "Program kaderisasi untuk melahirkan pengajar Al-Qur’an dan dai Qur’ani yang siap membina masyarakat. Fokus pada penguatan manhaj, kepemimpinan, manajemen dakwah, dan sistem pembinaan di bawah naungan Hidayatullah."
  },
  {
    id: "training",
    name: "Program Training Al-Qur’an (Pelatihan Intensif & Sertifikasi)",
    description: "Program pelatihan intensif yang dirancang untuk meningkatkan kompetensi guru, pembina, dan pegiat Al-Qur’an. Materi meliputi metodologi pengajaran Al-Qur’an, manajemen halaqah, strategi pembinaan, serta standar kualitas pembelajaran. Program ini bertujuan mencetak tenaga pendidik Al-Qur’an yang profesional, terstruktur, dan siap memperkuat jaringan pembinaan Qur’an Center Hidayatullah."
  }
]