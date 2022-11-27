<template>
  <div
    class="relative w-full text-center flex flex-col items-center justify-center text-seagreen-700"
    :class="routeName === 'homepage' ? 'h-[25vh]' : 'h-[30vh]'"
  >
    <h1 class="drop-shadow-md text-7xl">
      Gelateria Artigianale
    </h1>
    <h2 v-if="pageTitle" class="mt-10 text-4xl text-red-600 drop-shadow-sm">
      {{ pageTitle }}
    </h2>
    <Link v-if="backHome" :href="route('homepage')" class="absolute top-6 right-6 text-center bg-seagreen-700 border-[5px] border-seagreen-500 font-raleway text-white py-1.5 px-6 rounded-full">
        <Fontawesome :icon="['fas', 'fa-chevron-left']" class="mr-3"/>Indietro
    </Link>
  </div>
</template>

<script setup>
const props = defineProps({
  pageTitle: { type: String, default: "" },
  routeName: { type: String, default: "" },

  backHome:{type:Boolean, default:false},
});
</script>

<style lang="postcss" scoped></style>
