<template>
    <div>
        <div class="mx-4">
                    <!-- <p class="text-xl text-blue-900 font-light">India COVID-19 Tracker</p> -->
                <div class="mt-2 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2" role="alert">
                    <!-- <p class="font-light text-sm text-left">Real time COVID-19 Stats for India</p> -->
                    <div class="flex justify-center">
                        <img src="../assets/line_india_covid_tracker_text.png" class="h-6">
                    </div>
                    <p class="font-light text-xs mt-3 text-left text-gray-600 text-center">Last Updated: {{ indiaData.lastupdatedtime }} </p>
                </div>
            </div>
            <div class="flex content-start flex-wrap">
                <div class="w-1/2 p-2">
                    <div class="mx-2 bg-indigo-100 border-t-4 mt-4 border-indigo-500 rounded-b text-indigo-900 px-4 py-3 shadow-md" role="alert">
                    <div class="flex">
                        <div>
                        <p class="font-bold">
                            <number
                            class="bold transition"
                            ref="number2"
                            :from="0"
                            :to="indiaData.confirmed"
                            :duration="duration"
                            easing="Power4.easeOut"
                            />
                        </p>
                        <p class="text-sm">Confirmed Cases</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="w-1/2 p-2">
                    <div class="mx-2 bg-orange-100 border-t-4 mt-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md" role="alert">
                    <div class="flex">
                        <div>
                        <p class="font-bold">
                            <number
                            class="bold transition"
                            ref="number2"
                            :from="0"
                            :to="indiaData.active"
                            :duration="duration"
                            easing="Power4.easeOut"
                            />
                        </p>
                        <p class="text-sm">Active Cases</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="w-1/2 p-2">
                    <div class="mx-2 bg-red-100 border-t-4 mt-2 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                    <div class="flex">
                        <div>
                        <p class="font-bold">
                            <number
                            class="bold transition"
                            ref="number2"
                            :from="0"
                            :to="indiaData.deaths"
                            :duration="duration"
                            easing="Power4.easeOut"
                            />
                        </p>
                        <p class="text-sm">Deceased Cases</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="w-1/2 p-2">
                    <div class="mx-2 bg-teal-100 border-t-4 mt-2 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div class="flex">
                        <div>
                        <p class="font-bold">
                            <number
                            class="bold transition"
                            ref="number2"
                            :from="0"
                            :to="indiaData.recovered"
                            :duration="duration"
                            easing="Power4.easeOut"
                            />
                        </p>
                        <p class="text-sm">Recovered Cases</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
const axios = require('axios');
export default {
    data(){
        return {
            indiaData: '',
            duration: 3,
            scaleClass: false
        }
    },
    created(){
        axios.get('https://api.covid19india.org/data.json')
        .then(res => {
            this.indiaData = res.data.statewise[0]
            // console.log(res)
        })
    },
    methods:{
        theFormat(number) {
            return number.toFixed(2);
        },
    }
}
</script>