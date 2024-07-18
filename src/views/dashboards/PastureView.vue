<script setup lang="ts">
import DashboardPane from '@/components/dashboards/DashboardPane.vue';
import { displayModeTheme } from '@/composables/displayModeTheme';

const { navBg, sideBarBg } = displayModeTheme({
  navDefault: 'var(--vt-c-pasture-green-2)',
  navDark: 'var(--vt-c-pasture-green-1)',
  sideBarDefault: 'var(--vt-c-pasture-green-2)',
  sideBarDark: 'var(--vt-c-pasture-green-1)',
});
</script>

<template>
  <main>
    <DashboardPane
      pageName="pasture"
      navTitle="Pasture Dashboard"
      :navBg="navBg"
      navIcon="mdiGrass"
      :sideBarBg="sideBarBg" 
    />
  </main>
</template>