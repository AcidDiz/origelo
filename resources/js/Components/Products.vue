<template>

</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import Checkbox from './Checkbox.vue';
import IncrementDecrementButton from './IncrementDecrementButton.vue';

const props = defineProps({
    orderId: {
        type: String,
        default: "",
    },
    items: {
        type: Object,
        default: () => ({}),
    },
});





</script>

<style lang="postcss" scoped>

</style>
