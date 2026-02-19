type ProgramSlug = string

const Program1: ProgramSlug = "ngaji-dasar";
const Program2: ProgramSlug = "tahsin";
const Program3: ProgramSlug = "tahfizh";
const Program4: ProgramSlug = "tadabbur";
const Program5: ProgramSlug = "tafsir";
const Program6: ProgramSlug = "pembinaan-dai";
const Program7: ProgramSlug = "training";  

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
}

export const programShortNames: Program[] = [
  { slug: Program1, shortName: "Ngaji Dasar" },
  { slug: Program2, shortName: "Tahsin" },
  { slug: Program3, shortName: "Tahfizh" },
  { slug: Program4, shortName: "Tadabbur" },
  { slug: Program5, shortName: "Tafsir" },
  { slug: Program6, shortName: "Pembinaan Dai" },
  { slug: Program7, shortName: "Training Al-Qur’an" }
]

export const programSlugs: Record<ProgramSlug, boolean> = {
  [Program1]: true,
  [Program2]: true,
  [Program3]: true,
  [Program4]: true,
  [Program5]: true,
  [Program6]: true,
  [Program7]: true
}

export const programContents: Record<ProgramSlug, ProgramContent> = {
  [Program1]: {
    type: "course",
    name: "Program Ngaji Dasar (Tahsinul Qira’ah Pemula)",
    content: "Program pembelajaran membaca Al-Qur’an dari nol bagi anak-anak, remaja, maupun orang dewasa. Fokus pada pengenalan huruf hijaiyah, makharijul huruf, dan dasar-dasar tajwid agar peserta mampu membaca Al-Qur’an dengan benar dan tartil.",
    target: "Pemula usia 7 tahun ke atas dan masyarakat umum yang belum lancar membaca Al-Qur’an.",
    curriculum: [
      "Pengenalan huruf hijaiyah (nama, bentuk, dan pelafalan)",
      "Makharijul huruf dasar",
      "Hukum tajwid dasar (mad, ghunnah, tanda baca)",
      "Praktik membaca bertahap dari Iqra hingga mushaf"
    ],
    output: "Peserta mampu membaca Al-Qur’an dengan lancar dan benar sesuai standar dasar tajwid."
  },
  [Program2]: {
    type: "course",
    name: "Program Tahsin (Perbaikan Bacaan Al-Qur’an)",
    content: "Program peningkatan kualitas bacaan bagi yang sudah bisa membaca Al-Qur’an namun ingin memperbaiki kefasihan, tajwid, panjang pendek bacaan, serta adab tilawah sesuai kaidah yang benar.",
    target: "Remaja, dewasa, mahasiswa, dan calon pengajar Al-Qur’an.",
    curriculum: [
      "Perbaikan makharijul huruf",
      "Perbaikan makharijul huruf",
      "Hukum nun mati & mim mati",
      "Mad dan waqaf",
      "Praktik talaqqi dan tashih (koreksi langsung)"
    ],
    output: "Bacaan peserta lebih tartil, standar, dan terukur sesuai ilmu tajwid."
  },
  [Program3]: {
    type: "course",
    name: "Program Tahfizh (Menghafal Al-Qur’an)",
    content: "Program pembinaan hafalan Al-Qur’an secara terstruktur dan berjenjang, mulai dari juz pilihan hingga target hafalan tertentu. Dilengkapi dengan sistem muroja’ah dan evaluasi berkala untuk menjaga kualitas hafalan.",
    target: "Anak-anak, remaja, dan dewasa dengan target hafalan bertahap (1–30 juz).",
    curriculum: [
      "Target hafalan per juz",
      "Metode setoran dan murojaah terjadwal",
      "Manajemen dan kontrol hafalan",
      "Pembinaan adab dan ruhiyah penghafal Qur’an"
    ],
    output: "Hafalan kuat, terjaga, dan memiliki kedisiplinan sebagai penjaga Al-Qur’an."
  },
  [Program4]: {
    type: "course",
    name: "Program Tadabbur Al-Qur’an",
    content: "Program pendalaman makna ayat secara tematik untuk membangun kesadaran spiritual dan pembentukan karakter Qur’ani, sehingga Al-Qur’an tidak hanya dibaca, tetapi juga dipahami dan diamalkan.",
    target: "Jamaah umum, profesional, komunitas, dan kader dakwah.",
    curriculum: [
      "Tafsir tematik (akhlak, keluarga, kepemimpinan, dll.)",
      "Tafsir per juz secara sistematis",
      "Tadabbur ayat kehidupan",
      "Implementasi nilai Qur’ani dalam kehidupan sosial dan organisasi"
    ],
    output: "Peserta memahami kandungan Al-Qur’an dan mampu mengamalkannya dalam kehidupan nyata."
  },
  [Program5]: {
    type: "course",
    name: "Program Tafsir Al-Qur’an",
    content: "Program kajian tafsir secara sistematis dan ilmiah berdasarkan rujukan tafsir yang mu’tabar. Ditujukan bagi peserta yang ingin memahami kandungan Al-Qur’an secara lebih mendalam dan komprehensif.",
    target: "Guru ngaji, calon pengajar, dan pengurus lembaga pendidikan.",
    curriculum: [
      "Metodologi pengajaran efektif",
      "Manajemen kelas Qur’ani",
      "Psikologi pembelajaran",
      "Micro teaching dan evaluasi praktik"
    ],
    output: "Peserta siap menjadi pengajar Al-Qur’an yang profesional dan kompeten."
  },
  [Program6]: {
    type: "course",
    name: "Program Pembinaan Dai & Penguatan Organisasi Qur’ani",
    content: "Program kaderisasi untuk melahirkan pengajar Al-Qur’an dan dai Qur’ani yang siap membina masyarakat. Fokus pada penguatan manhaj, kepemimpinan, manajemen dakwah, dan sistem pembinaan di bawah naungan Hidayatullah.",
    target: "Masyarakat umum, komunitas masjid, dan instansi.",
    curriculum: [
      "Identifikasi dan perbaikan kesalahan bacaan",
      "Talaqqi langsung bersama pengajar",
      "Evaluasi individual",
      "Standarisasi bacaan sesuai kaidah tajwid"
    ],
    output: "Peningkatan kualitas bacaan secara cepat dan terstandar."
  },
  [Program7]: {
    type: "service",
    name: "Program Training Al-Qur’an (Pelatihan Intensif & Sertifikasi)",
    content: "Program pelatihan intensif yang dirancang untuk meningkatkan kompetensi guru, pembina, dan pegiat Al-Qur’an. Materi meliputi metodologi pengajaran Al-Qur’an, manajemen halaqah, strategi pembinaan, serta standar kualitas pembelajaran. Program ini bertujuan mencetak tenaga pendidik Al-Qur’an yang profesional, terstruktur, dan siap memperkuat jaringan pembinaan Qur’an Center Hidayatullah.",
    target: "Masjid, sekolah, instansi, komunitas, dan masyarakat umum.",
    services: [
      "Ngaji Online dan Offline",
      "Ceramah dan Khutbah",
      "Panggil Ustadz",
      "Doa dan Pengisi Acara Keagamaan",
      "Dakwah Qur’an Keliling"
    ],
    output: "Tersebarnya nilai-nilai Al-Qur’an secara luas dan menguatnya pembinaan keumatan berbasis Qur’ani."
  }
}