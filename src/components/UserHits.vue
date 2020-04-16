<template>
    <div>
        <!-- <div class="flex content-start flex-wrap">
            <div class="w-1/2 md:w-1/4 p-2" v-for="(hit, index) in hits" :key="index">
                <div class="bg-gray-100 border-t-4 border-gray-500 text-gray-700 p-2 shadow rounded" role="alert">
                <div class="flex flex-row">
                    <p class="w-1/4 font-light text-sm bg-indigo-400 inline-block px-2 text-white">ID: {{hit.id}}</p>
                    <p class="w-3/4 font-light text-sm bg-indigo-600 inline-block px-2 text-white">IP: {{hit.ip}}</p>
                </div>
                <p class="font-light text-sm mt-1">Visited <span class="bg-green-700 px-1 text-white"> {{hit.count}}</span> times</p>
                <p class="font-light text-sm mt-1">City: {{hit.city}} </p>
                <div class="flex flex-row">
                    <p class="w-2/3 font-light text-sm mt-1">Region: {{hit.region}} </p>
                    <p class="w-1/3 font-light text-sm mt-1">Country: {{hit.country}} </p>
                </div>
                <p class="font-light text-sm mt-1">ISP: {{hit.org}} </p>
                <p class="font-light text-sm mt-1">First Visited: {{hit.first_visited}} </p>
                <p class="font-light text-sm mt-1">Last Visited: {{hit.last_visited}} </p>
                </div>
            </div>
        </div> -->
        <table class="table-auto w-full text-sm">
            <thead class="bg-gray-100">
                <tr>
                <th class="px-4 py-2">ID</th>
                <th class="px-4 py-2">IP</th>
                <th class="px-4 py-2">Region</th>
                <th class="px-4 py-2">ISP</th>
                <th class="px-4 py-2">First Visited</th>
                <th class="px-4 py-2">Last Visited</th>
                <th class="px-4 py-2">Count</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                <tr v-for="(hit, index) in fHits" :key="index">
                <td class="border px-4 py-2">{{index}}</td>
                <td class="border px-4 py-2">{{hit.data.ip}}</td>
                <td class="border px-4 py-2">{{hit.data.city}} | {{hit.data.region}} |
                {{hit.data.country}}
                </td>
                <td class="border px-4 py-2">{{hit.data.org}}</td>
                <td class="border px-4 py-2">{{hit.data.first_visited}}</td>
                <td class="border px-4 py-2">{{hit.data.last_visited}}</td>
                <td class="border px-4 py-2 bg-indigo-600 text-white">{{hit.data.count}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
// import axios from 'axios'
const faunadb = require('faunadb')
const client = new faunadb.Client({secret: process.env.VUE_APP_FAUNA_DB_SECRET})
const q = faunadb.query
export default {
    data(){
        return {
            hits: [],
            fHits:[]
        }
    },
    created(){
        // axios.get('https://json-server-rest.herokuapp.com/hits')
        // .then(res => {
        //     this.hits = res.data
        // })
        //fauna
        client.query(q.Paginate(q.Match(q.Ref("indexes/all_hits"))))
        .then(res => {
            var x = res.data
            const data = x.map(ref => {
                return q.Get(ref)
            })
            client.query(data).then(res => {
                this.fHits = res
                console.log(this.fHits)
            })
        })
    }
}
</script>