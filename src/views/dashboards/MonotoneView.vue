<script setup lang="ts">
import DashboardPane from '@/components/dashboards/DashboardPane.vue';
</script>

<template>
  <main>
    <DashboardPane
      pageName="monotone"
      navTitle="Monotone Dashboard"
      navBg="var(--vt-c-black-soft)"
      navIcon="mdiContrastCircle"
      sideBarBg="var(--vt-c-black-mute)" 
    />
  </main>
</template>