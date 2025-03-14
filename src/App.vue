<script setup>
import navbar from './components/navbar.vue'
</script>

<template>
  <div class="bg-gray-200 roundedb-lx">
    <navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  
</template>

<style></style>