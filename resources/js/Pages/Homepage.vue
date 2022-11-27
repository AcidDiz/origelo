<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import PageTitle from "@/Components/PageTitle.vue";
defineProps({
  routeName: String,
});
</script>

<template>
  <Head title="Home" />
  <div class="min-h-screen bg-white font-pacifico font-bold">
    <PageTitle pageTitle="Benvenuto, scegli il tuo Gelato!" :route="routeName"  />
    <div
      class="relative flex flex-grow h-[60vh] items-top justify-center sm:items-center sm:pt-0 space-x-32"
    >
      <div>
        <Link
          :href="route('icecreams')"
          class="group cursor-pointer w-96 h-96 bg-white flex flex-col text-red-200 justify-center items-center space-y-4 rounded-full border-8 border-red-400 hover:border-red-600 hover:text-red-600"
        >
          <Fontawesome
            :icon="['fas', 'fa-ice-cream']"
            class="text-[200px] stroke-[10px] stroke-red-400 group-hover:stroke-red-600"
            stroke="red"
          />
          <span class="text-2xl font-semibold text-red-600">Gelati</span>
        </Link>
      </div>
      <!-- <div>
        <Link
          :href="route('cups')"
          class="group cursor-pointer w-96 h-96 bg-pink-300 flex flex-col text-white justify-center items-center space-y-4 rounded-full border-8 border-pink-400 hover:bg-pink-200 hover:border-pink-300"
        >
          <Fontawesome
            :icon="['fas', 'fa-bowl-rice']"
            class="text-[200px] stroke-[10px] stroke-pink-400 group-hover:stroke-pink-300"
            stroke="red"
          />
          <span class="text-2xl font-semibold">Coppe Gourmet</span>
        </Link>
      </div> -->
    </div>
  </div>
</template>
