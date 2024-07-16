<script setup lang="ts">
defineProps<{
  sideBarBg: string
}>()
</script>

<template>
    <aside :style="{ backgroundColor: sideBarBg }">
      <ul>
        <li><router-link to="/breezy/buttons">Buttons</router-link></li>
        <li><router-link to="/breezy/fields">Fields</router-link></li>
        <li><router-link to="/breezy/forms">Forms</router-link></li>
        <li><router-link to="/breezy/tables">Tables</router-link></li>
      </ul>
    </aside>
</template>

<style>
    aside {
        width: 140px;
        padding: 1rem;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        
    }
</style>