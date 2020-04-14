<template>
  <div id="app"> 
    <Header />
    <div class="bg-indigo-600 w-full h-2">
    </div>
    <router-view></router-view>
    <!-- <Dashboard msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import Dashboard from './components/Dashboard.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

