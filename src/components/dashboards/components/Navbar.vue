<script setup lang="ts">
import CustomIcon from '@/components/icons/CustomIcon.vue';
import { defineProps } from 'vue';
import { ref, computed } from 'vue';


const props = defineProps<{
  navTitle: string
  navBg: string
  navIcon: string
  pageName: string
}>()

const searchQuery = ref('');
const isOptionsOpen = ref(false);

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value);
};

const toggleOptions = () => {
    isOptionsOpen.value = !isOptionsOpen.value;
};

const themeItems = ref([
  { name: 'Breezy', page: 'breezy', route: '/breezy', icon: 'mdiWaves' },
  { name: 'Pasture', page: 'pasture', route: '/pasture', icon: 'mdiGrass' },
  { name: 'Autumn Sky', page: 'autumnsky', route: '/autumnsky', icon: 'mdiCloud' },
  { name: 'Macaroons', page: 'macaroons', route: '/macaroons', icon: 'mdiIceCream' },
  { name: 'Monotone', page: 'monotone', route: '/monotone', icon: 'mdiContrastCircle' }
]);

const filteredThemeItems = computed(() => {
  return themeItems.value.filter(item => item.page !== props.pageName);
});

</script>

<template>
    <nav class="dashboard-nav" :style="{ backgroundColor: navBg }">
      <CustomIcon :icon="navIcon" :size="70" class="theme-icon"/>
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
      <div class="settings-container">
        <button class="settings-button" @click="toggleOptions">
            <CustomIcon :icon="'mdiFormatPaint'" :size="24" />
        </button>
        <ul v-if="isOptionsOpen" class="dropdown-menu">
            <li v-for="item in filteredThemeItems" :key="item.route">
                <router-link :to="item.route" >
                    <span class="theme-item" :style="{ color: props.navBg }">
                        <CustomIcon :icon="item.icon" :size="24"/>
                        <p>{{ item.name }}</p>
                    </span>
                </router-link>
            </li>
        </ul>
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

    .settings-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    .settings-button {
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        margin-right: 10px;
    }

    .dropdown-menu {
        width: 160px;
        position: absolute;
        top: 80%;
        right: 0;
        background-color: white;
        color: black;
        border: 1px solid #ccc;
        border-radius: 5px;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-right: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .dropdown-menu li {
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    .dropdown-menu li:hover {
        background-color: #f0f0f0;
    }

    .theme-item {
        display: flex;
        margin: -1rem 0;
    }

    .theme-item p {
        margin-left: 0.5rem;
    }

</style>