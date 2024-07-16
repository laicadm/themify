<script setup lang="ts">
import CustomIcon from '@/components/icons/CustomIcon.vue';
import { ref } from 'vue';


defineProps<{
  navTitle: string
  navBg: string
}>()

const searchQuery = ref('');
const handleSearch = () => {
  console.log('Searching for:', searchQuery.value);
};
</script>

<template>
    <nav class="dashboard-nav" :style="{ backgroundColor: navBg }">
      <CustomIcon icon="mdiCloud" :size="70" class="theme-icon"/>
      <h1 class="nav-title staatliches-regular">{{ navTitle }}</h1>
      <div class="search-container">
        <input 
            type="text" 
            v-model="searchQuery" 
            @input="handleSearch"
            placeholder="Search"
            class="search-input"
        />
        </div>
    </nav>
</template>

<style>
    .dashboard-nav {
        color: #fff;
        display: flex;
        justify-content: space-between;
    }

    .theme-icon {
        background-color: transparent;
        /* color: var(--vt-c-breezy-blue-1); */
        color: #fff;
        padding: 5px;
    }

    .nav-title {
        padding: 0.5rem;
        margin-left: 0.1rem;
        font-size: xx-large;
    }

    .staatliches-regular {
        font-family: "Staatliches", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .search-container {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        height: 50%;
        margin: 1rem;
    }

    .search-input {
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 1rem;
    }

</style>