<script setup lang="ts">
import DashboardPane from '@/components/dashboards/DashboardPane.vue';
import { displayModeTheme } from '@/composables/displayModeTheme';

const { navBg, sideBarBg } = displayModeTheme({
  navDefault: 'var(--vt-c-macaroons-pink-2)',
  navDark: 'var(--vt-c-macaroons-pink-1)',
  sideBarDefault: 'var(--vt-c-macaroons-teal-2)',
  sideBarDark: 'var(--vt-c-macaroons-teal-1)',
});
</script>

<template>
  <main>
    <DashboardPane
      pageName="macaroons"
      navTitle="Macaroons Dashboard"
      :navBg="navBg"
      navIcon="mdiIceCream"
      :sideBarBg="sideBarBg" 
    />
  </main>
</template>