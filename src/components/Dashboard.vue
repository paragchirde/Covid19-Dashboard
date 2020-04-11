<template>
    <div>
        <div class="flex flex-wrap h-screen mb-6">
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
                            Cooperate with the Doctors, Policemen & Government
                    </p>
                  </div>
                </div>
                <div class="bg-green-500 py-4 lg:px-4 border-l-8 border-green-700 mx-4 mt-6">
                  <div class="text-green-100 leading-none" role="alert">
                    <p class="mt-2 text-white text-xs">
                        For More guidelines visit
                    </p>
                    <p class="font-semibold mr-2 mt-1 text-left flex-auto"> <a href="https://www.mohfw.gov.in/">Ministry of Health and Family Affairs</a></p>
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
                <div class="w-full bg-gray-200 h-1 mt-4 mb-4"></div>
                <div class="flost-right bg-indigo-100 mt-8 mb-8 inline-block">
                    <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc_2y5N0I67wDU38DjDh35IZSIS30rQf7_NYZhtYYGU1jJYT6_kDx4YpF-qw0LSlGsBYP8pqM_a1Pd/pubhtml#" target="blank"><div class="flex items-center bg-green-100 text-gray-600 text-sm font-light  px-4 py-3" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mr-2"><path fill="#68d391" d="M1 3.488c0-1.926 4.656-3.488 10-3.488 5.345 0 10 1.562 10 3.488s-4.655 3.487-10 3.487c-5.344 0-10-1.561-10-3.487zm10 14.823c.34 0 .678-.007 1.011-.019.045-1.407.537-2.7 1.342-3.745-.839.067-1.643.1-2.353.1-3.006 0-7.588-.523-10-2.256v2.434c0 1.925 4.656 3.486 10 3.486zm0-5.665c5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487zm1.254 7.635c-.438.02-.861.03-1.254.03-2.995 0-7.582-.518-10-2.256v2.458c0 1.925 4.656 3.487 10 3.487 1.284 0 2.526-.092 3.676-.256-1.155-.844-2.02-2.055-2.422-3.463zm6.246-6.281c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm-.563 6.55l-1.84-1.778.736-.758 1.089 1.05 2.43-2.439.751.744-3.166 3.181z"/></svg>
                    <p>Crowdsourced Patient Database</p>
                    </div></a>
                </div>
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
            ip: '',
            userInfo: [],
            usersAllData: [],
            ipExists: false
        }
    },
    created(){

        //users
        axios.get('https://json-server-rest.herokuapp.com/hits')
        .then(res => {
            this.usersAllData = res.data
            // console.log("All Users Data Main ",this.usersAllData)
        })
        .then(() => {
            this.getIp()
        })

        instance.get('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=India')
        .then(res => {
            this.coviddata = res.data.data.covid19Stats
        })

        axios.get('https://api.covid19india.org/data.json')
        .then(res => {
            this.indiaData = res.data.statewise[0]
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
    },
    methods:{
        getIp(){
            // console.log("Inside GetIP")
            axios.get("https://api.ipify.org?format=json")
            .then(res => {
                this.ip = JSON.stringify(res.data.ip, null,2)
                const ip2  = this.ip.substring(1, this.ip.length-1)
                // console.log("Got IP ", ip2)
                // console.log("Getting IP Info...")
                this.getIpInfo(ip2)
            })
        },
        getIpInfo(uip){
            // console.log("Inside Getting Info")
            axios.get(`https://ipinfo.io/${uip}/json?token=36e70d700814d8`)
            .then(res => {
                this.userInfo = res.data
            })
            .then(() => {
                // console.log("Checking entry...")
                this.checkEntry(uip, this.userInfo)
                if(this.ipExists){
                    // console.log("Trigger Increment")
                    this.increaseCounter(uip, this.userInfo)
                } else {
                    // console.log("Trigger Add Method")
                    this.addData(this.userInfo)
                }
            })
        },
        checkEntry(uip){ 
            // console.log("Inside Checking Entey")
            // console.log("Whats the All User data now?",this.usersAllData)  
            for(var i=0;i<this.usersAllData.length;i++){
                if(this.usersAllData[i]["ip"] == uip){
                    // console.log("Found ID", this.usersAllData[i]["ip"] )
                    this.ipExists = true
                } else {
                    this.ipExists = false
                }
            }
            console.log(this.ipExists)
        },
        addData(data){
            // console.log("Inside Add Method")
            axios.post('https://json-server-rest.herokuapp.com/hits', {
                ip: data.ip,
                city: data.city,
                region: data.region,
                country: data.country,
                latLng: data.loc,
                org: data.org,
                count: 0,
                first_visited: moment().format('MMMM Do YYYY, h:mm:ss a'),
                last_visited: moment().format('MMMM Do YYYY, h:mm:ss a')
            })
            .then(() => {
                console.log('ok')
            })
            .catch(err => {
                console.log(err)
            })
        },
        increaseCounter(uip){
            var id = this.getIdByIp(uip)
            var count = this.getCountByIp(uip)
            count += 1
            axios.patch(`https://json-server-rest.herokuapp.com/hits/${id}`, {
                // ip: data.ip,
                // city: data.city,
                // region: data.region,
                // country: data.country,
                // latLng: data.loc,
                // org: data.org,
                count: count,
                // first_visited: data.first_visited,
                last_visited: moment().format('MMMM Do YYYY, h:mm:ss a')
            }).then(() => {
                // console.log('ok Done! Counter++')
            })
        },
        getIdByIp(uip){
            for(var i=0;i<this.usersAllData.length;i++){
                if(this.usersAllData[i]["ip"] == uip){
                    // console.log("Found!", uip, this.usersAllData[i]["id"])
                    return this.usersAllData[i]["id"]
                }
            }
        },
        getCountByIp(uip){
            for(var i=0;i<this.usersAllData.length;i++){
                if(this.usersAllData[i]["ip"] == uip){
                    // console.log("Found!", uip, this.usersAllData[i]["id"])
                    return this.usersAllData[i]["count"]
                }
            }
        }
    }
}
</script>