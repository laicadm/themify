<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DashboardPane from '@/components/dashboards/DashboardPane.vue';
import { displayModeTheme } from '@/composables/displayModeTheme';

const { navBg, sideBarBg } = displayModeTheme({
  navDefault: 'var(--vt-c-autumnsky-blue-2)',
  navDark: 'var(--vt-c-autumnsky-blue-1)',
  sideBarDefault: 'var(--vt-c-autumnsky-orange-2)',
  sideBarDark: 'var(--vt-c-autumnsky-orange-1)',
});

</script>

<template>
  <main>
    <DashboardPane
      pageName="autumnsky"
      navTitle="Autumn Sky Dashboard"
      :navBg="navBg"
      navIcon="mdiCloud"
      :sideBarBg="sideBarBg"
    />
  </main>
</template>