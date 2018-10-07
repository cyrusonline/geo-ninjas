<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import 'materialize-css'
import Navbar from '@/components/layout/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  },
   mounted() {
      M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}
</script>

<style>

</style>
