// App.vue
<template>
  <div class="app">
    <PortfolioHero />
    <About />
    <Skills />
    <ExperienceSection />
  </div>
</template>

<script setup>
import PortfolioHero from './components/PortfolioHero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import ExperienceSection from './components/ExperienceSection.vue';


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #0a0a16;
  color: #ffffff;
}

.app {
  width: 100%;
  min-height: 100vh;
}
</style>

