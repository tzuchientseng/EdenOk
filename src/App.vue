<template>
  <NavBar />
  <MainSection />
  <ContentSection />
  <FooterSection />
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import MainSection from './pages/MainSection.vue';
import FooterSection from './components/FooterSection.vue';
import ContentSection from './pages/ContentSection.vue';

</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
  background-color: #0D262B;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
