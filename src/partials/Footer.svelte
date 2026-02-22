<script lang="ts">
  import { Icon } from "svelte-icons-pack";
	import { RiBusinessMailLine, RiDevicePhoneLine, RiLogosFacebookCircleLine, RiLogosInstagramLine, RiLogosWhatsappLine, RiMapMapPinRangeLine } from "svelte-icons-pack/ri";

  const year: number = new Date().getFullYear();
</script>

<footer class="bg-qc-darker text-qc-white flex flex-col pt-14 pb-8 px-6">
  <div class="container max-w-6xl mx-auto flex flex-col gap-5">
    <div class="w-full h-fit md:grid md:grid-cols-[3fr_1fr_2fr] flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <img
          src="/icons/logo-mono-melon-text.svg"
          alt="Qurancenter Logo"
          class="w-64 h-auto"
        />
        <p>
          Menjadi pusat pembinaan dan pengembangan Al-Qur’an yang unggul dalam melahirkan generasi Qur’ani serta memperkuat dakwah dan organisasi Hidayatullah.
        </p>
        <div class="flex flex-row gap-1.5 items-center" role="navigation">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/qurancenter"
            target="_blank"
            class="flex justify-center items-center p-2 border border-qc-melon text-qc-melon bg-qc-melon/10 rounded-full"
          >
            <Icon
              src={RiLogosInstagramLine}
              size="22"
            />
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/qurancenter"
            target="_blank"
            class="flex justify-center items-center p-2 border border-qc-melon text-qc-melon bg-qc-melon/10 rounded-full"
          >
            <Icon
              src={RiLogosFacebookCircleLine}
              size="22"
            />
          </a>
          <a
            aria-label="WhatsApp"
            href="https://wa.me/6281285960701"
            target="_blank"
            class="flex justify-center items-center p-2 border border-qc-melon text-qc-melon bg-qc-melon/10 rounded-full"
          >
            <Icon
              src={RiLogosWhatsappLine}
              size="22"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-qc-white font-semibold">Navigation</h4>
        <nav class="flex flex-col gap-1">
          <a href="/profil" class="hover:underline hover:text-qc-melon">Profil</a>
          <a href="/#layanan" class="hover:underline hover:text-qc-melon">Layanan</a>
          <a href="/program" class="hover:underline hover:text-qc-melon">Program</a>
          <a href="/posts" class="hover:underline hover:text-qc-melon">Berita</a>
          <a href="/khutbah" class="hover:underline hover:text-qc-melon">Khutbah</a>
          <a href="/kontak" class="hover:underline hover:text-qc-melon">Kontak</a>
        </nav>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-qc-white font-semibold">Contact</h4>
        <div class="flex flex-col gap-1">
          <a href="https://maps.app.goo.gl/D5JcyKYwyHBXSkWc6" target="_blank"
          class="flex flex-row gap-2 items-start hover:underline hover:text-qc-melon">
            <Icon size="20" className="text-qc-melon fill-qc-melon shrink-0" src={RiMapMapPinRangeLine} />
            <p class="grow">Jl. Cipinang Cempedak 1.no.14 Polonia Jakarta Timur</p>
          </a>
          <a href="mailto:info@qurancenter.net" target="_blank"
          class="flex flex-row gap-2 items-center hover:underline hover:text-qc-melon">
            <Icon size="20" className="text-qc-melon fill-qc-melon shrink-0" src={RiBusinessMailLine} />
            <p class="grow">info@qurancenter.net</p>
          </a>
          <a href="tel:+6282146021999" class="flex flex-row gap-2 items-center hover:underline hover:text-qc-melon">
            <Icon size="20" className="text-qc-melon fill-qc-melon shrink-0" src={RiDevicePhoneLine} />
            <p class="grow">(+62) 812-8596-0701</p>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-qc-white pt-8">
      <div class="text-qc-white flex flex-row items-center justify-center">
        <p class="">&copy; {year} Majelis al-Qur'an Hidayatullah</p>
      </div>
    </div>
  </div>
</footer>