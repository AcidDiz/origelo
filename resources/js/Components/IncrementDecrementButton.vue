<template>
    <div>
        <span class="w-8 h-8 flex items-center justify-center bg-pink-500 text-white font-inter">{{action === 'decrement' ? '-' : '+'}}</span>
    </div>
</template>

<script setup>

const props = defineProps({
    action:{
        type:String,
        default:'decrement',
    }
})

</script>

<style lang="postcss" scoped>

</style>
