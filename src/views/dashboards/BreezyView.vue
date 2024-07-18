<script setup lang="ts">
import DashboardPane from '@/components/dashboards/DashboardPane.vue';
import { displayModeTheme } from '@/composables/displayModeTheme';

const { navBg, sideBarBg } = displayModeTheme({
  navDefault: 'var(--vt-c-breezy-blue-2)',
  navDark: 'var(--vt-c-breezy-blue-1)',
  sideBarDefault: 'var(--vt-c-breezy-blue-2)',
  sideBarDark: 'var(--vt-c-breezy-blue-1)',
});
</script>

<template>
  <main>
    <DashboardPane
      pageName="breezy"
      navTitle="Breezy Dashboard"
      :navBg="navBg"
      navIcon="mdiWaves"
      :sideBarBg="sideBarBg" 
    />
  </main>
</template>