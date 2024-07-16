<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import { ref } from 'vue';

defineProps<{
  navTitle: string
  navBg: string
  sideBarBg: string
}>()

const isSidebarCollapsed = ref(true);

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

</script>

<template>
    <div class="dashboard">
      <Navbar :navTitle="navTitle" :navBg="navBg"/>
      <div class="main">
        <Sidebar :sideBarBg="sideBarBg" :isCollapsed="isSidebarCollapsed" @toggle="toggleSidebar"/>
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
  