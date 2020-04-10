<template>
    <div>
        <div class="flex flex-wrap h-screen">
            <!--  -->
            <div class="w-full md:w-1/3 bg-light p-6">
                <div class="mx-4">
                    <p class="text-xl text-blue-900 font-light">India COVID-19 Tracker</p>
                    <div class="mt-2 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2" role="alert">
                        <p class="font-light text-sm text-left">Real time COVID-19 Stats for India</p>
                        <p class="font-light text-xs mt-3 text-left text-gray-600">Last Updated: {{ indiaData.lastupdatedtime }} </p>
                    </div>
                </div>
                <!--  -->
                <div class="flex content-start flex-wrap">
                    <div class="w-1/2 p-2">
                        <div class="mx-2 bg-indigo-100 border-t-4 mt-4 border-indigo-500 rounded-b text-indigo-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div>
                            <p class="font-bold">{{indiaData.confirmed}}</p>
                            <p class="text-sm">Confirmed Cases</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="w-1/2 p-2">
                        <div class="mx-2 bg-orange-100 border-t-4 mt-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div>
                            <p class="font-bold">{{indiaData.active}}</p>
                            <p class="text-sm">Active Cases</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="w-1/2 p-2">
                        <div class="mx-2 bg-red-100 border-t-4 mt-2 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div>
                            <p class="font-bold">{{indiaData.deaths}}</p>
                            <p class="text-sm">Deceased Cases</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="w-1/2 p-2">
                        <div class="mx-2 bg-teal-100 border-t-4 mt-2 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div>
                            <p class="font-bold">{{indiaData.recovered}}</p>
                            <p class="text-sm">Recovered Cases</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="bg-indigo-500 py-4 lg:px-4 border-l-8 border-indigo-700 mx-4 mt-6">
                  <div class="text-indigo-100 leading-none" role="alert">
                    <p class="font-semibold mr-2 text-left flex-auto">#Stay Home, Stay Safe</p>
                    <p class="mt-2 text-white text-xs">
                            Cooperate with the Doctors, Policemen & Governmant
                    </p>
                  </div>
                </div>
            </div>
            <!-- State -->
            <div class="w-full md:w-2/3 bg-light h-12 h-screen p-6">
                <p class="text-2xl text-gray-700 font-semibold font-light mx-2">Maharashtra State COVID-19 Tracker</p>
                <div class="flex items-center bg-blue-100 text-blue-900 text-xs font-light px-4 py-3 mx-2" role="alert">
                <p>Last Updated: {{ stateData.lastupdatedtime }}</p>
                </div>
                <div class="flex content-start flex-wrap">
                    <div class="sm:w-1/6 md:w-1/4  p-2">
                        <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                        <p class="font-bold text-xl bg-blue-400 inline-block px-2 text-white rounded">{{stateData.confirmed}}</p>
                        <p>Confirmed cases</p>
                        </div>
                    </div>
                    <div class="sm:w-1/6 md:w-1/4 p-2">
                        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                        <p class="font-bold text-xl bg-orange-400 inline-block px-2 text-white rounded">{{stateData.active}}</p>
                        <p>Active cases</p>
                        </div>
                    </div>
                    <div class="sm:w-1/6 md:w-1/4 p-2">
                        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                        <p class="font-bold text-xl bg-green-400 inline-block px-2 text-white rounded">{{stateData.recovered}}</p>
                        <p>Recovered cases</p>
                        </div>
                    </div>
                    <div class="sm:w-1/6 md:w-1/4 p-2">
                        <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                        <p class="font-bold text-xl bg-red-400 inline-block px-2 text-white rounded">{{stateData.deaths}}</p>
                        <p >Deceased cases</p>
                        </div>
                    </div>
                </div>
                <!--  -->
                <!-- Cities -->
                <div class="w-full bg-gray-200 h-1 mt-4 mb-4 mx-2"></div>
                <p class="text-base text-gray-700 font-light font-light mx-2">Maharashtra State City wise COVID-19 Tracker</p>
                <div class="flex items-center bg-blue-100 text-blue-900 text-xs font-light px-4 py-3 mx-2 mt-3 mb-3" role="alert">
                    <p>Data from few cities is unclear</p>
                </div>
                <div class="flex content-start flex-wrap">
                    <div class="sm:w-1/3 md:w-1/5 w-1/3 p-2" v-for="(city, index) in stateDistrictData" :key="index">
                        <div class="bg-gray-100 border-t-4 border-gray-500 text-gray-700 p-2 shadow rounded" role="alert">
                        <p class="font-bold text-base text-base bg-gray-800 inline-block px-2 text-white rounded">{{city.confirmed}}</p>
                        <p class="font-light text-sm mt-1">{{city.city}}</p>
                        </div>
                    </div>
                </div>
                <!-- {{stateDistrictData2}} -->
                <!-- {{ stateDistrictData}} -->
            </div>
        </div>
    </div>
</template>
<script>
const axios = require('axios');
const instance = axios.create({
    headers: {'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com', 'x-rapidapi-key' : 'd4632f0efdmshb9e1d1fe4621607p14324djsn1514c88ee0ad'} //don't forget to change API key to your exact key
})
var moment = require('moment');
export default {
    data(){
        return {
            moment: moment,
            coviddata: '',
            covidData2: '',
            indiaData: '',
            stateData: '',
            stateDistrictData: '',
            stateDistrictData2: [],
        }
    },
    created(){
        instance.get('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=India')
        .then(res => {
            this.coviddata = res.data.data.covid19Stats
        })

        axios.get('https://api.covid19india.org/data.json')
        .then(res => {
            this.indiaData = res.data.statewise[0]
            this.stateData = res.data.statewise[1]
        })

        axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(res => {
            this.stateDistrictData = res.data.Maharashtra.districtData
            console.log(this.stateDistrictData)
            console.log(Object.keys(this.stateDistrictData))
            Object.keys(this.stateDistrictData).forEach((key) => {
                console.log(this.stateDistrictData[key].city = key)
                this.stateDistrictData2.push(this.stateDistrictData)
            })
        })
    }
}
</script>