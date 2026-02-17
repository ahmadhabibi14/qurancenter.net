<script lang="ts">
  import { onMount } from "svelte";

  let testimonials: {
    content: string;
    name: string;
    role: string;
  }[] = [
    {
      content:
        "Quran Center Hidayatullah hadir sebagai lembaga yang bukan hanya mengajarkan bacaan Al-Qur’an, tetapi juga membangun karakter dan peradaban Qur’ani. Program-programnya terstruktur, pengajarnya kompeten, dan dampaknya nyata dirasakan oleh masyarakat. Ini adalah gerakan strategis dalam penguatan dakwah berbasis Al-Qur’an.",
      name: "Imron Faizin",
      role: "Direktur HiGIVE"
    },
    {
      content: "Saya melihat Quran Center Hidayatullah sebagai pusat pembinaan Al-Qur’an yang serius dan profesional. Layanannya lengkap, mulai dari tahsin hingga kajian tafsir, serta mampu menjawab kebutuhan umat di era modern. Semoga terus menjadi pelopor kebangkitan generasi Qur’ani.",
      name: "Ade Syariful Allam",
      role: "Ketua JHC"
    },
    {
      content: "Quran Center Hidayatullah memberikan kontribusi besar dalam membumikan Al-Qur’an di tengah masyarakat. Komitmennya dalam dakwah, pendidikan, dan pelayanan keumatan patut diapresiasi dan didukung bersama. Ini adalah investasi akhirat yang berdampak luas.",
      name: "Abdurrahman Yusron",
      role: "Direktur PT. Wisata Global Tour"
    },

    {
      content:
        "Quran Center Hidayatullah hadir sebagai lembaga yang bukan hanya mengajarkan bacaan Al-Qur’an, tetapi juga membangun karakter dan peradaban Qur’ani. Program-programnya terstruktur, pengajarnya kompeten, dan dampaknya nyata dirasakan oleh masyarakat. Ini adalah gerakan strategis dalam penguatan dakwah berbasis Al-Qur’an.",
      name: "Imron Faizin",
      role: "Direktur HiGIVE"
    },
    {
      content: "Saya melihat Quran Center Hidayatullah sebagai pusat pembinaan Al-Qur’an yang serius dan profesional. Layanannya lengkap, mulai dari tahsin hingga kajian tafsir, serta mampu menjawab kebutuhan umat di era modern. Semoga terus menjadi pelopor kebangkitan generasi Qur’ani.",
      name: "Ade Syariful Allam",
      role: "Ketua JHC"
    },
    {
      content: "Quran Center Hidayatullah memberikan kontribusi besar dalam membumikan Al-Qur’an di tengah masyarakat. Komitmennya dalam dakwah, pendidikan, dan pelayanan keumatan patut diapresiasi dan didukung bersama. Ini adalah investasi akhirat yang berdampak luas.",
      name: "Abdurrahman Yusron",
      role: "Direktur PT. Wisata Global Tour"
    },
    {
      content:
        "Quran Center Hidayatullah hadir sebagai lembaga yang bukan hanya mengajarkan bacaan Al-Qur’an, tetapi juga membangun karakter dan peradaban Qur’ani. Program-programnya terstruktur, pengajarnya kompeten, dan dampaknya nyata dirasakan oleh masyarakat. Ini adalah gerakan strategis dalam penguatan dakwah berbasis Al-Qur’an.",
      name: "Imron Faizin",
      role: "Direktur HiGIVE"
    },
    {
      content: "Saya melihat Quran Center Hidayatullah sebagai pusat pembinaan Al-Qur’an yang serius dan profesional. Layanannya lengkap, mulai dari tahsin hingga kajian tafsir, serta mampu menjawab kebutuhan umat di era modern. Semoga terus menjadi pelopor kebangkitan generasi Qur’ani.",
      name: "Ade Syariful Allam",
      role: "Ketua JHC"
    },
    {
      content: "Quran Center Hidayatullah memberikan kontribusi besar dalam membumikan Al-Qur’an di tengah masyarakat. Komitmennya dalam dakwah, pendidikan, dan pelayanan keumatan patut diapresiasi dan didukung bersama. Ini adalah investasi akhirat yang berdampak luas.",
      name: "Abdurrahman Yusron",
      role: "Direktur PT. Wisata Global Tour"
    },
    {
      content:
        "Quran Center Hidayatullah hadir sebagai lembaga yang bukan hanya mengajarkan bacaan Al-Qur’an, tetapi juga membangun karakter dan peradaban Qur’ani. Program-programnya terstruktur, pengajarnya kompeten, dan dampaknya nyata dirasakan oleh masyarakat. Ini adalah gerakan strategis dalam penguatan dakwah berbasis Al-Qur’an.",
      name: "Imron Faizin",
      role: "Direktur HiGIVE"
    },
    {
      content: "Saya melihat Quran Center Hidayatullah sebagai pusat pembinaan Al-Qur’an yang serius dan profesional. Layanannya lengkap, mulai dari tahsin hingga kajian tafsir, serta mampu menjawab kebutuhan umat di era modern. Semoga terus menjadi pelopor kebangkitan generasi Qur’ani.",
      name: "Ade Syariful Allam",
      role: "Ketua JHC"
    },
    {
      content: "Quran Center Hidayatullah memberikan kontribusi besar dalam membumikan Al-Qur’an di tengah masyarakat. Komitmennya dalam dakwah, pendidikan, dan pelayanan keumatan patut diapresiasi dan didukung bersama. Ini adalah investasi akhirat yang berdampak luas.",
      name: "Abdurrahman Yusron",
      role: "Direktur PT. Wisata Global Tour"
    },
    {
      content:
        "Quran Center Hidayatullah hadir sebagai lembaga yang bukan hanya mengajarkan bacaan Al-Qur’an, tetapi juga membangun karakter dan peradaban Qur’ani. Program-programnya terstruktur, pengajarnya kompeten, dan dampaknya nyata dirasakan oleh masyarakat. Ini adalah gerakan strategis dalam penguatan dakwah berbasis Al-Qur’an.",
      name: "Imron Faizin",
      role: "Direktur HiGIVE"
    },
    {
      content: "Saya melihat Quran Center Hidayatullah sebagai pusat pembinaan Al-Qur’an yang serius dan profesional. Layanannya lengkap, mulai dari tahsin hingga kajian tafsir, serta mampu menjawab kebutuhan umat di era modern. Semoga terus menjadi pelopor kebangkitan generasi Qur’ani.",
      name: "Ade Syariful Allam",
      role: "Ketua JHC"
    },
    {
      content: "Quran Center Hidayatullah memberikan kontribusi besar dalam membumikan Al-Qur’an di tengah masyarakat. Komitmennya dalam dakwah, pendidikan, dan pelayanan keumatan patut diapresiasi dan didukung bersama. Ini adalah investasi akhirat yang berdampak luas.",
      name: "Abdurrahman Yusron",
      role: "Direktur PT. Wisata Global Tour"
    }
  ];
</script>

<section class="container max-w-6xl mx-auto my-16 md:px-5 lg:px-0 px-5 scroll-mt-20" id="testimonials">
  <div class="flex flex-col gap-7">
    <div class="flex flex-col gap-2 text-center">
      <span class="text-qc-darker text-xl font-medium">Testimonial</span>
      <h3 class="font-semibold text-4xl">Apa Kata Mereka ?</h3>
    </div>
    <div class="testimonial-wrapper h-[310px] group">
      {#each testimonials as t, idx}
        <div style="animation-delay: calc(50s / 6 * (6 - {idx+1}) * -1);"
        class="testimonial-item group-hover:[animation-play-state:paused]">
          <div
            class="h-[260px] w-full
            flex flex-col gap-2 shadow-md rounded-xl border border-gray-200
            py-4 px-5 bg-white
            justify-between z-10"
          >
            <blockquote class="italic font-medium leading-6 pb-2 line-clamp-7">
              {t.content}
            </blockquote>
            <div class="flex flex-col gap-4">
              <div class="w-full h-1 border-dashed border-t border-qc-melon"></div>
              <div class="flex flex-col justify-end gap-0 items-end">
                <span class="text-sm font-semibold capitalize">{t.name}</span>
                <p class="text-xs text-end">{t.role}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "tailwindcss";

  .testimonial-wrapper {
    width: 100%;
    max-width: 1536px;
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
  }

  @keyframes scrollLeftTestimoni {
    to {
      left: -400px;
    }
  }

  .testimonial-item {
    width: 400px;
    height: fit-content;
    position: absolute;
    left: max(calc(350px * 6), 100%);
    animation-name: scrollLeftTestimoni;
    animation-duration: 50s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>