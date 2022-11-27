<template>

    <Head title="Ice Creams" />
    <div class="min-h-screen w-full  bg-white font-pacifico font-bold pt-6 pb-20">
        <PageTitle pageTitle="Statistiche" :backHome="true" :routeName="routeName" />
        <div class="relative w-full px-20 min-h-[50vh] items-top justify-center sm:items-center sm:pt-0">

            <h3 class="text-6xl mb-20 font-raleway text-center text-seagreen-700 drop-shadow-sm">I Gusti più Votati</h3>
            <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                :width="width" :height="height" />
        </div>
    </div>
</template>

<script>
import PageTitle from '@/Components/PageTitle.vue'
import { Bar } from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar, PageTitle },
    props: {

        routeName: {
            type: String,
            default: ''
        },
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 120
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Object,
            default: () => { }
        },
        chocolate:{
            type:Number,
        },
        vanilla:{
            type:Number,
        },
        cream:{
            type:Number,
        },
        strawberry:{
            type:Number,
        },
        lemon:{
            type:Number,
        },
        cherry:{
            type:Number,
        },
        cremino:{
            type:Number,
        },
        nuts:{
            type:Number,
        },
        milk:{
            type:Number,
        },
        melon:{
            type:Number,
        },

    },
    data() {
        return {
            chartData: {
                labels: ['Cioccolato', 'Vanilla', 'Crema', 'Fragola', 'Limone','Amarena','Cremino','Nocciola','Fior di Latte','Melone'],
                datasets: [{ data: [this.chocolate, this.vanilla, this.cream,this.strawberry,this.lemon,this.cherry,this.cremino,this.nuts,this.milk,this.melon] }],
            },
            chartOptions: {
                responsive: true,
                backgroundColor: ['brown','beige','yellow','pink','lemon','cherry','brown','light-brown','white','orange']
            }
        }
    }
}


</script>

<style lang="postcss" scoped>

</style>
