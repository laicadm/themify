<script setup lang="ts">
import DashboardPane from '@/components/dashboards/DashboardPane.vue';
import { displayModeTheme } from '@/composables/displayModeTheme';

const { navBg, sideBarBg } = displayModeTheme({
  navDefault: 'var(--vt-c-black-mute)',
  navDark: 'var(--vt-c-black-soft)',
  sideBarDefault: 'var(--vt-c-black-mute)',
  sideBarDark: 'var(--vt-c-black-soft)',
});
</script>

<template>
  <main>
    <DashboardPane
      pageName="monotone"
      navTitle="Monotone Dashboard"
      :navBg="navBg"
      navIcon="mdiContrastCircle"
      :sideBarBg="sideBarBg"
    />
  </main>
</template>