<template>
  <section class="w-full py-[4.3rem] midDesk:pt-0">
   <div class="w-[83.47%] mx-auto">
       <h3 class="text-[#E9EBF8] font-merri font-[700] text-[1.94rem] leading-[2.3rem] midDesk:text-[1.5rem]">
         Every year, floods displace thousands of children in Nigeria, disrupting their education and exposing them to physical and emotional trauma. In 2023, schools in Nigeria were closed for an average of 53 days due to extreme flood events. Despite the scale of this crisis, 90% of schools in the country lack sufficient disaster preparedness programs.
       </h3>
   </div>
   <div class=" border border-[red] h-[70.8rem] w-[95.8%] mx-auto">
       <!-- <component
        v-for="image in images"
        :is="image.source"
        :key="image.id"
        class="hover:!z-[9] hover:scale-[1.1] transitionAll cursor-pointer absolute"
        :style="{
            top: image.top,
            left: image.left,
            right: image.right || 0,
            zIndex: image.zIndex || 1,
        }"
       /> -->
   </div>
  </section>
</template>

<script setup>
// import papercut4 from '@/components/icons/papercut4.vue';
// import papercut7 from '@/components/icons/papercut7.vue';
// import papercut9 from '@/components/icons/papercut9.vue';
// import papercut10 from '@/components/icons/papercut10.vue';
// import papercut11 from '@/components/icons/papercut11.vue';
// import papercut12 from '@/components/icons/papercut12.vue';
// import papercut13 from '@/components/icons/papercut13.vue';
// import papercut14 from '@/components/icons/papercut14.vue';
// import papercut15 from '@/components/icons/papercut15.vue';
// import papercut from '@/components/icons/papercut.vue';
import papercut5 from '@/components/icons/papercut5.vue';
import papercut6 from '@/components/icons/papercut6.vue';
import papercut8 from '@/components/icons/papercut8.vue';
import papercut2 from '@/components/icons/papercut2.vue';
import papercut3 from '@/components/icons/papercut3.vue';

const images = [
   {
       id: 1,
       source: papercut2,
       top: "0",
       left: "0",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 2,
       source: papercut3,
       top: "0",
       left: "140",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 3,
       source: papercut5,
       top: "0",
       left: "460.8",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 4,
       source: papercut6,
       top: "0",
       left: "655",
       rotation: 0,
       zIndex: 1
   },
   {
       id: 5,
       source: papercut8,
       top: "0",
       right: "66.6",
       rotation: 0,
       zIndex: 1
   },
]
</script>

<style scoped>
</style>
