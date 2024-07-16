<script setup lang="ts">
defineProps<{
  navTitle: string
  navBg: string
}>()
</script>

<template>
    <nav class="dashboard-nav" :style="{ backgroundColor: navBg }">
      <h1>{{ navTitle }}</h1>
    </nav>
</template>

<style>
    .dashboard-nav {
        color: #fff;
        padding: 1rem;
    }
</style>