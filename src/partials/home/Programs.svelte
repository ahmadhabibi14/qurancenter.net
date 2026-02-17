<script lang="ts">
	import { Icon, type IconType } from "svelte-icons-pack";
	import { RiBusinessCalendarEventFill, RiDocumentBook3Line, RiFinanceHandHeartLine, RiOthersGraduationCapLine } from "svelte-icons-pack/ri";

  const programs: {
    name: string;
    desc: string;
    icon: IconType
  }[] = [
    {
      name: "Event Nasional",
      desc: "Perhelatan akbar berskala nasional yang menjadi panggung syiar dan kompetisi bagi para pencinta Al-Qur'an dari seluruh Indonesia.",
      icon: RiBusinessCalendarEventFill
    },
    {
      name: "Anugerah Sanad Al-Qur'an",
      desc: "Penghargaan prestisius bagi hafiz yang telah menguasai bacaan dengan transmisi keilmuan yang tersambung resmi hingga Rasulullah SAW.",
      icon: RiDocumentBook3Line
    },
    {
      name: "Wisuda Qur'an Center",
      desc: "Prosesi kelulusan resmi sebagai bentuk apresiasi bagi santri yang telah tuntas menghafal dan mendalami kurikulum Al-Qur'an.",
      icon: RiOthersGraduationCapLine
    },
    {
      name: "Sinergi Kebaikan",
      desc: "Kolaborasi aktif antara lembaga, pemerintah, dan masyarakat dalam mengokohkan dakwah serta pembinaan generasi Qur'ani.",
      icon: RiFinanceHandHeartLine
    }
  ]
</script>

<section class="container max-w-6xl mx-auto my-10 md:scroll-mt-28 scroll-mt-20 px-5 md:px-0" id="program">
  <div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-5 w-full h-auto">
    {#each programs as pg, idx}
      <div class="{idx == 0 || idx == programs.length - 1
        ? 'md:bg-qc-darker! md:text-qc-white!' : 'md:bg-qc-melon! md:text-qc-darker!'}
        odd:bg-qc-darker odd:text-qc-white even:bg-qc-melon even:text-qc-darker
        rounded-lg p-5 flex flex-col gap-3">
        <div class="flex flex-row items-center gap-3">
          <Icon
            src={pg.icon}
            size="35"
            className="shrink-0 fill-current"
          />
          <h3 class="text-2xl font-bold ">{pg.name}</h3>
        </div>
        <p class="">{pg.desc}</p>
      </div>
    {/each}
  </div>
</section>