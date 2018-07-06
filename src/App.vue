<template>
<div id="app">
  <section class="hero is-fullheight">
    <!-- <div class="hero-head">
      <header class="navbar">
        <SiteHeader/>
      </header>
    </div> -->
    <div class="hero-body">
      <ForgeGenerator msg="Generate an item!"/>
    </div>
    <footer class="footer">
      <SiteFooter/>
    </footer>
  </section>
</div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import ForgeGenerator from './components/ForgeGenerator.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'app',
  components: {
    SiteHeader,
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
