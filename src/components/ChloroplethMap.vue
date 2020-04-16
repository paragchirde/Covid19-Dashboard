<template>
<l-map 
  :center="center" 
  :zoom="7" 
  style="height: 650px;" 
  :options="mapOptions"
  
  >
    <l-choropleth-layer 
      :data="district" 
      titleKey="district" 
      idKey="dt_code" 
      :value="value" 
      geojsonIdKey="dt_code" 
      :geojson="mahageojson" 
      :colorScale="colorScale"
      :strokeWidth="1"
      >
        <template slot-scope="props">
          <l-info-control 
            :item="props.currentItem" 
            :unit="props.unit" 
            title="District" 
            placeholder="Hover over a District"/>
          <l-reference-chart 
            title="Number of confirmed cases" 
            :colorScale="colorScale" 
            :min="props.min" 
            :max="props.max" 
            position="topright"/>
        </template>
    </l-choropleth-layer>
</l-map>
</template>

<script>
import {LMap } from 'vue2-leaflet';
import { InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth';
import  mahageojson  from '../assets/map-geojson.json';

// import axios from 'axios';


export default {
  
    props:['district'],
    name : 'ChloroplethMap',
    components: { 
      
    LMap,
    'l-info-control': InfoControl, 
    'l-reference-chart': ReferenceChart, 
    'l-choropleth-layer': ChoroplethLayer 
  },
  created (){
  
   
  },
  data(){
      return{
          
        mahageojson,
        
        center: [18.882347, 76.600000],
        colorScale: ["68d391", "f6e05e", "e53e3e"],
        value: {
            key: "cases",
            metric: "Active cases"
        },
         mapOptions: {
            attributionControl: false
        },

     }
      
  }
  


}
</script>

<style scoped>
@import "~leaflet/dist/leaflet.css";

body {
  background-color: #e7d090;
  margin-left: 100px;
  margin-right: 100px;
}
#map {
  background-color: rgb(255, 255, 255);
}
</style>