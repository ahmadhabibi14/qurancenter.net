<script lang="ts">
  import { Icon } from "svelte-icons-pack";
	import { RiBusinessMailLine, RiDevicePhoneLine, RiLogosFacebookCircleLine, RiLogosInstagramLine, RiLogosWhatsappLine, RiMapMapPinRangeLine } from "svelte-icons-pack/ri";

  const year: number = new Date().getFullYear();
</script>

<footer class="bg-jhc text-white flex flex-col pt-14 pb-8 px-6">
  <div class="container max-w-6xl mx-auto flex flex-col gap-5">
    <div class="w-full h-fit md:grid md:grid-cols-[3fr_1fr_2fr] flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <img
          src="/icons/logo-mono-light-text.svg"
          alt="JHC"
          class="w-32 h-auto"
        />
        <p>Mitra terpercaya Anda dalam pengurusan Sertifikasi Halal. Proses cepat, transparan, dan terjamin regulasi.</p>
        <div class="flex flex-row gap-1.5 items-center" role="navigation">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/jayakartahalalcenter"
            target="_blank"
            class="flex justify-center items-center p-2 bg-linear-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full"
          >
            <Icon
              src={RiLogosInstagramLine}
              size="22"
            />
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/jayakartahalalcenter"
            target="_blank"
            class="flex justify-center items-center p-2 bg-linear-to-b from-[#00c6ff] to-[#0072ff] text-white rounded-full"
          >
            <Icon
              src={RiLogosFacebookCircleLine}
              size="22"
            />
          </a>
          <a
            aria-label="WhatsApp"
            href="https://wa.me/6281322482220"
            target="_blank"
            class="flex justify-center items-center p-2 bg-linear-to-b from-[#25d366] to-[#2BB741] text-white rounded-full"
          >
            <Icon
              src={RiLogosWhatsappLine}
              size="22"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-white font-semibold">Navigation</h4>
        <nav class="flex flex-col gap-1">
          <a href="/#tentang" class="hover:underline hover:text-jhc-light">Tentang Kami</a>
          <a href="/#layanan" class="hover:underline hover:text-jhc-light">Layanan</a>
          <a href="/#proses-halal" class="hover:underline hover:text-jhc-light">Proses Halal</a>
          <a href="/#kontak" class="hover:underline hover:text-jhc-light">Kontak</a>
        </nav>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-white font-semibold">Contact</h4>
        <div class="flex flex-col gap-1">
          <a href="https://maps.app.goo.gl/D5JcyKYwyHBXSkWc6" target="_blank"
          class="flex flex-row gap-2 items-start hover:underline hover:text-jhc-light">
            <Icon size="20" className="text-jhc-orange fill-jhc-orange shrink-0" src={RiMapMapPinRangeLine} />
            <p class="grow">Jl. Assyafi'iyah No.247, RT.3/RW.5, Cilangkap, Kec. Cipayung, Jakarta Timur, DKI Jakarta. 13870</p>
          </a>
          <a href="mailto:jayakartahalalcenter@gmail.com" target="_blank"
          class="flex flex-row gap-2 items-center hover:underline hover:text-jhc-light">
            <Icon size="20" className="text-jhc-orange fill-jhc-orange shrink-0" src={RiBusinessMailLine} />
            <p class="grow">jayakartahalalcenter@gmail.com</p>
          </a>
          <a href="tel:+6282146021999" class="flex flex-row gap-2 items-center hover:underline hover:text-jhc-light">
            <Icon size="20" className="text-jhc-orange fill-jhc-orange shrink-0" src={RiDevicePhoneLine} />
            <p class="grow">(+62) 813-2248-2220</p>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-gray-400 pt-8">
      <div class="text-white flex flex-row items-center justify-center">
        <p class="">&copy; {year} Yayasan PP Tahfidz Global Jayakarta Cipayung</p>
      </div>
    </div>
  </div>
</footer>