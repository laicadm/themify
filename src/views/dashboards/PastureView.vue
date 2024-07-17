<script setup lang="ts">
import DashboardPane from '@/components/dashboards/DashboardPane.vue';
</script>

<template>
  <main>
    <DashboardPane
      pageName="pasture"
      navTitle="Pasture Dashboard"
      navBg="var(--vt-c-pasture-green-2)"
      navIcon="mdiGrass"
      sideBarBg="var(--vt-c-pasture-green-1)" 
    />
  </main>
</template>