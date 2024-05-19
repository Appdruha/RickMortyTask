<script setup lang='ts'>
import Home from '../pages/Home.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main :class='[$style.container]'>
    <Header />
    <Home />
    <Footer />
  </main>
</template>

<style module>
.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  min-height: 100vh;
}
</style>
