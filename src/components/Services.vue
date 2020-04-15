<template>
    <div>
        <div class="w-full bg-blue-100 text-center p-4">
           <p class="text-indigo-800 font-light">Be a true Indian. Show compassion, Be considerate,Help those in need. We will get through this!  </p>
       </div>
        <div class="flex flex-wrap h-screen mb-4">
            <!--  -->
                <!-- Logo  -->
                <div class="w-full md:w-1/4 bg-light p-6"> 
                    <HeaderLogo/>
                    <div class="flex justify-center mt-2">
                        <router-link to="/">
                            <div class="p-2 bg-blue-100 items-center text-gray-800 leading-none rounded-sm flex lg:inline-flex mb-4 mt-2 text-sm" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#5a67d8" d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
                                <span class="font-base mr-2 text-left flex-auto mt-1 ml-2">Dashboard</span>
                            </div>
                        </router-link>  
                    </div>
                </div>
                <!-- Mid -->
                <div class="hidden md:block w-full md:w-2/4 bg-light p-6"> 
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
                        <p>Active<br> cases</p>
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
            </div>
            <div class="w-full md:w-1/4 bg-light p-6">
                <div class="form flex flex-col bg-gray-100 p-6 shadow -mt-8 md:mt-8">
                    <p class="text-gray-700 font-light mb-2">Select your city</p>
                        <div class="relative w-full ">
                            <select v-model="currentCity" class="block appearance-none   w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option disabled value="">Please select one</option>
                            <option v-for="(city, index) in stateDistrictData" :key="index">{{ city.city }}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <button @click="search()"
                        class="bg-indigo-500 hover:bg-indigo-700 w-full mt-2 text-white font-light py-1 px-4 rounded">
                        Search
                        </button>
                    <p v-show="currentCity!==''" class="text-gray-500 font-light mb-2 mt-2 text-sm">Showing data for {{ currentCity }}</p>
                </div>
            </div>
            <!-- Table -->
            <div class="w-full md:w-full bg-light h-12 h-screen p-6">
                <!-- <p class="text-2xl text-gray-700 font-semibold font-light mx-2">Maharashtra State COVID-19 Tracker</p> -->
                <table class="table-auto text-sm w-full">
                    <thead class="bg-gray-200 text-gray-700">
                        <tr>
                        <th class="px-4 py-2 font-base">#Sr.No</th>
                        <th class="px-4 py-2 font-base">Organisation Name</th>
                        <th class="px-4 py-2 font-base">Website</th>
                        <th class="px-4 py-2 font-base">Contact</th>
                        <th class="px-4 py-2 font-base">Category</th>
                        </tr>
                    </thead>
                        <p v-if="loading" class="text-center font-light text-gray-800 mt-2 mb-2">Loading Data...</p>
                    <tbody>
                        <tr v-for="(data, index) in Edata2" :key="index" class="">
                        <td class="border px-4 py-2">{{ index+1 }}</td>
                        <td class="border px-4 py-2">{{ data.nameoftheorganisation}} <br><span class="text-xs text-gray-700">{{ data.descriptionandorserviceprovided }}</span></td>
                        <td class="border px-4 py-2"><a :href="data.contact"> {{  data.contact   }}</a></td>
                        <td class="border px-4 py-2">{{ data.phonenumber }}</td>
                        <td class="border px-4 py-2">{{ data.category }}</td>
                        </tr>
                    </tbody>
                </table>
                <p v-if="error!=''" class="text-left font-light text-white mt-4 mb-2 bg-red-400 inline px-4 py-1">{{ error }}</p>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require('axios');
export default {
    props:['data'],
    data(){
        return {
            stateDistrictData: [],
            currentCity: '',
            Edata: '',
            Edata2: [],
            loading: false,
            error: '',
            stateData: '',
        }
    },
    created(){
        axios.get('https://api.covid19india.org/data.json')
        .then(res => {
            this.stateData = res.data.statewise[1]
            // console.log(res)
        })

        axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(res => {
            // console.log(res)
            this.stateDistrictData = res.data.Maharashtra.districtData
            // console.log(this.stateDistrictData)
            // console.log(Object.keys(this.stateDistrictData))
            Object.keys(this.stateDistrictData).forEach((key) => {
                this.stateDistrictData[key].city = key
                // this.stateDistrictData2.push(this.stateDistrictData)
            })
            // console.log(this.stateDistrictData)
        })

        axios.get('https://api.covid19india.org/resources/resources.json')
            .then(res => {
                // console.log(res.data.resources)
                this.Edata = res.data.resources
            })

    },
    methods:{
        async search(){
            this.Edata2 = [],
            this.error = ''
            this.loading = true
            console.log(this.currentCity)
            this.sort().then(res => {
                console.log(res)
                console.log(this.Edata2)
                this.loading = false
            })
            .catch(err => {
                console.log(err)
                this.loading = false
                this.error = `Sorry, No data forund for ${this.currentCity}`
            })
        },
        sort(){
            const data = new Promise((resolve, reject) => {
                this.Edata.filter(d => {
                   if(d.city == this.currentCity){
                       this.Edata2.push(d)
                   }
                })
                if(this.Edata2.length != 0){
                    resolve('ok', this.Edata2)
                } else {
                    reject('not found')
                }
            }) 
            return data
        }
    }
}
</script>