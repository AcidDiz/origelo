<template>

    <Head title="Ice Creams" />
    <div class="min-h-screen bg-white font-pacifico font-bold pt-6 pb-20">
        <PageTitle pageTitle="Ice Creams" :backHome="true" :routeName="routeName" />
        <div
            class="relative w-full flex flex-col flex-grow min-h-[50vh] items-top justify-center sm:items-center sm:pt-0">
            <h3 class="text-6xl font-raleway text-center text-seagreen-700 drop-shadow-sm">Vota tre Gusti</h3>
            <form @submit.prevent="save()" class="flex flex-col items-center justify-center space-y-3">
                <div class="w-full py-10 mb-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-20 gap-x-6">
                    <div v-for="item in items" :key="item.id">
                        <div @click="selectCheckBox(item);" class="flex flex-col justify-center items-center text-center">
                            <img :src="`https://via.placeholder.com/200x200/DC2625/fff?text=${item.name_it}`" alt=""
                                class="rounded-full my-6 border-[6px] border-pink-800 shadow-md" />
                            <h1 class="text-3xl text-red-600">{{ item.name_it }}</h1>
                            <input type="checkbox" :id="`checkbox_${item.id}`" :value="item.id" v-model="form.checkboxItems"
                                class="mt-6" />
                        </div>
                    </div>
                </div>
                <PrimaryButton type="submit" class="text-2xl border-8 font-raleway border-seagreen-400">Invia</PrimaryButton>
            </form>
        </div>
    </div>
</template>

<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import PageTitle from "@/Components/PageTitle.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { useForm } from "@inertiajs/inertia-vue3";
defineProps({
    items: {
        type: Object,
        default: () => ({}),
    },
    routeName: {
        type: String,
        default: ''
    }
});

const form = useForm({
    checkboxItems : [],
})


const selectCheckBox = (item) => {

    const array = form.checkboxItems;

    if(array.includes(item.id)){
        const index = array.indexOf(item.id);
            array.splice(index,1);

    }else{
        array.push(item.id);
    }

}

const save = () => {
    form.post(route(`icecreams.store`));
};

</script>

<style lang="postcss" scoped>

</style>
