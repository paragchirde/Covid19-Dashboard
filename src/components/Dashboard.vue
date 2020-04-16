<template>
    <div>
       
        <div class="flex flex-wrap h-screen mb-6">
            <!--  -->
            <div class="w-full md:w-1/3 bg-light p-6">
                <HeaderLogo/>
                <div class="w-full bg-gray-200 h-1 mt-4 mb-4 mx-2"></div>
                <!-- India Stats -->
                <IndiaTracker/>
                <!-- Information -->
                <Information class="hidden md:block" />
            </div>
            <!-- State -->
            <div class="w-full md:w-2/3 bg-light h-12 h-screen p-6">
                <div class="flex justify-between">
                    <p class="text-2xl text-gray-700 font-semibold font-light mx-2">Maharashtra State COVID-19 Tracker</p>
                    <!-- <p class="text-sm text-white bg-red-400 p-1 rounded-lg font-semibold font-light mx-2 align-middle">Helpline Number <a href="tel:020-26127394">020-26127394</a></p> -->
                    <div class="p-2 bg-red-500 items-center text-indigo-100 leading-none rounded flex lg:inline-flex mb-4 mt-2 text-sm" role="alert">
                        <span class="font-base mr-2 text-left flex-auto">Helpline Number <a href="tel:020-26127394">020-26127394</a></span>
                    </div>
                </div>
                <router-link to="/services">
                    <div class="p-2 bg-green-500 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex mb-4 mt-2 text-sm" role="alert">
                        <span class="flex rounded-full bg-green-400 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                        <span class="font-base mr-2 text-left flex-auto">Essential Services</span>
                        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                    </div>
                </router-link>
                <div class="flex items-center bg-blue-100 text-blue-900 text-xs font-light px-4 py-3 mx-2" role="alert">
                <p>Last Updated: {{ stateData.lastupdatedtime }}</p>
                </div>
                <div class="flex content-start flex-wrap">
                    <div class="w-1/2 md:w-1/4 p-2">
                        <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                            <div class="flex justify-between">
                                <p class="font-bold text-xl bg-blue-400 inline-block px-2 text-white rounded">{{stateData.confirmed}}</p>
                                <p class="font-bold text-sm text-red-500">&#8593; {{stateData.deltaconfirmed}}</p>
                            </div>
                            <p>Confirmed cases</p>
                        </div>
                    </div>
                    <div class="w-1/2 md:w-1/4 p-2">
                        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                        <p class="font-bold text-xl bg-orange-400 inline-block px-2 text-white rounded">{{stateData.active}}</p>
                        <p>Active cases</p>
                        </div>
                    </div>
                    <div class="w-1/2 md:w-1/4 p-2">
                        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                        <p class="font-bold text-xl bg-green-400 inline-block px-2 text-white rounded">{{stateData.recovered}}</p>
                        <p>Recovered cases</p>
                        </div>
                    </div>
                    <div class="w-1/2 md:w-1/4 p-2">
                        <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                        <p class="font-bold text-xl bg-red-400 inline-block px-2 text-white rounded">{{stateData.deaths}}</p>
                        <p >Deceased cases</p>
                        </div>
                    </div>
                </div>
                <!--  -->
                <!-- Cities -->
                <div class="w-full bg-gray-200 h-1 mt-4 mb-4 mx-2"></div>
                
                <p class="text-base text-gray-700 font-light font-light mx-2">Maharashtra State City/District wise COVID-19 Tracker</p>
                <div class="flex items-center bg-gray-200 text-blue-900 text-xs font-light px-4 py-3 mx-2 mt-3 mb-3" role="alert">
                    <p>Data from few cities is unclear</p>
                </div>
                <div class="flex content-start flex-wrap">
                    <div class="sm:w-1/3 md:w-1/5 w-1/3 p-2" v-for="(city, index) in stateDistrictData" :key="index">
                        <div class="flex-initial bg-blue-100 border-t-0 border-gray-500 text-gray-700 p-2 shadow rounded" role="alert">
                            <div class="flex justify-between">
                                    <p class="font-bold text-base text-base bg-blue-500 inline-block px-2 text-white rounded">{{city.confirmed}}</p> 
                                    <p class="font-bold text-sm text-red-500" v-if="city.delta.confirmed > 0">&#8593;  {{ city.delta.confirmed }}</p>    
                            </div>
                            <p class="font-light text-sm mt-1">{{city.city}}</p>
                        </div>
                    </div>
                </div>
                <!-- Information -->
                <Information class="md:hidden" />
                <div class="hidden md:block mt-2 mb-4 bg-gray-200 border-l-4 border-gray-500 text-blue-700 p-2" role="alert">
                    <p class="font-light text-sm text-left">Map Data - District wise data</p>
                </div>
                <ChloroplethMap :district="districtData" class="hidden md:block"></ChloroplethMap>
                <Footer/>
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
import district  from '../assets/districtdata.json';

const faunadb = require('faunadb')
const client = new faunadb.Client({secret: process.env.VUE_APP_FAUNA_DB_SECRET})
const q = faunadb.query
export default {
    // components: {ChloroplethMap},
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
            ipExists: false,
            districtWiseData: {},
            districtData: [],
            district,
            ipStatus: '',
            fHits: []
        }
    },
    created(){
        //get all fauna doc
        client.query(q.Paginate(q.Match(q.Ref("indexes/all_hits"))))
        .then(res => {
            var x = res.data    
            const data = x.map(ref => {
                return q.Get(ref)
            })
            client.query(data).then(res => {
                this.usersAllData = res
            })
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
            let data = {}
            Object.keys(this.stateDistrictData).forEach((key) => {
                this.stateDistrictData[key].city = key
                data[key] =  this.stateDistrictData[key].confirmed
                // this.stateDistrictData2.push(this.stateDistrictData)
            })
            
            this.district.forEach((d, i) => {
              if(this.stateDistrictData[d['district']] !== undefined){
                this.district[i]['cases'] = this.stateDistrictData[d['district']].confirmed
              }
              else{
                 this.district[i]['cases'] = 0
              }
            })
            this.districtData = this.district
            // console.log(this.districtData)
        })  
        
    },
    mounted(){
            
    },
    computed:{
        
    },
    methods:{
        getIp(){
            // console.log("Inside GetIP")
            axios.get("https://api.ipify.org?format=json")
            .then(res => {
                this.ip = JSON.stringify(res.data.ip, null,2)
                const ip2  = this.ip.substring(1, this.ip.length-1)
                this.getIpInfo(ip2)
            })
        },
        getIpInfo(uip){
            axios.get(`https://ipinfo.io/${uip}/json?token=36e70d700814d8`)
            .then(res => {
                this.userInfo = res.data
            })
            .then(() => {
                this.faunaGetByIp(uip)
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
                count: count,
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
                if(this.usersAllData[i].data.ip == uip){
                    // console.log("Found!", uip, this.usersAllData[i]["id"])
                    return this.usersAllData[i].data.count
                }
            }
        },
        //Fauna
        faunaAdd(){
            const data = this.userInfo
                client.query(q.Create(q.Collection("hits"), {
                    data: {
                        "ip": data.ip,
                        "city": data.city,
                        "region": data.region,
                        "country": data.country,
                        "loc": data.loc,
                        "org": data.org,
                        "postal": data.postal,
                        "timezone": data.timezone,
                        "count": 0,
                        "first_visited": moment().format('MMMM Do YYYY, h:mm:ss a'),
                        "last_visited": moment().format('MMMM Do YYYY, h:mm:ss a')
                    }
                })).then(() => {
                    console.log('ok')
                })
        },
        faunaGetByIp(uip){
                client.query(q.Get(q.Match(q.Index('user_by_ip'), uip)))
                .then(res => {
                    // console.log("Found: ", res)
                    //Update the time & counter
                    var id = res.ref.value.id
                    this.faunaUpdateIp(id, uip)
                    this.ipStatus = 'exists'
                }). catch(err => {
                    console.log(err.name)
                    this.faunaAdd()
                    this.ipStatus = 'not exists'
                })
        },
        faunaUpdateIp(id, uip){
            var count = this.getCountByIp(uip)
            count += 1
            client.query(
                q.Update(
                    q.Ref(q.Collection('hits'), id),
                    {
                        data: {
                            count: count,
                            last_visited: moment().format('MMMM Do YYYY, h:mm:ss a')
                        }
                    }
                    )
            ).then(() => {
                console.log("Updated")
            })
        },
        createFaunaIndex(){
            client.query(
            q.CreateIndex({
                name: 'user_by_ip',
                source: q.Collection('hits'),
                terms: [{ field: ['data', 'ip'] }],
            })
            )
            .then((res) => console.log(res))
        }
    }
}
</script>