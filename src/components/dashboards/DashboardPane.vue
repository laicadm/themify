<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
    <div class="dashboard">
      <Navbar />
      <div class="main">
        <Sidebar />
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
</template>
  
<style>
.dashboard {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
}
  
.main {
    display: flex;
    flex: 1;
}
  
.content {
    flex: 1;
    padding: 1rem;
}
</style>
  