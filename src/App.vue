<template>
<div id="app">
  <div class="hero is-fullheight">
    <div class="hero-body">
      <ForgeGenerator msg="Generate an item!"/>
    </div>
    <div class="hero-foot">
      <SiteFooter/>
    </div>
  </div>
</div>
</template>

<script>
import ForgeGenerator from './components/ForgeGenerator.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'app',
  components: {
    ForgeGenerator,
    SiteFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
