<template>
  <div class="min-h-screen bg-pink-100 font-pacifico font-bold">
    <PageTitle pageTitle="Cups"  backHome="true"/>
    <div
      class="relative flex flex-grow h-[60vh] items-top justify-center sm:items-center sm:pt-0 space-x-32"
    >
      <div>
        <Link
          :href="route('icecreams')"
          class="group cursor-pointer w-96 h-96 bg-pink-300 flex flex-col text-white justify-center items-center space-y-4 rounded-full border-8 border-pink-400 hover:bg-pink-200 hover:border-pink-300"
        >
          <Fontawesome
            :icon="['fas', 'fa-ice-cream']"
            class="text-[200px] stroke-[10px] stroke-pink-400 group-hover:stroke-pink-300"
            stroke="red"
          />
          <span class="text-2xl font-semibold">Gelati</span>
        </Link>
      </div>
      <div>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from '@/Components/PageTitle.vue';

defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  laravelVersion: String,
  phpVersion: String,
});
</script>

<style lang="postcss" scoped></style>
