<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import CustomIcon from '@/components/icons/CustomIcon.vue';
import { ref } from 'vue';

defineProps<{
  sideBarBg: string
  isCollapsed: boolean
}>()

const menuItems = ref([
  { name: 'Home', route: '/breezy', icon: 'mdiHome', tooltip: 'Home' },
  { name: 'Buttons', route: '/breezy/buttons', icon: 'mdiButtonPointer', tooltip: 'Buttons' },
  { name: 'Fields', route: '/breezy/fields', icon: 'mdiFormTextbox', tooltip: 'Fields' },
  { name: 'Forms', route: '/breezy/forms', icon: 'mdiSelect', tooltip: 'Forms' },
  { name: 'Tables', route: '/breezy/tables', icon: 'mdiTable', tooltip: 'Tables' }
]);

const emit = defineEmits(['toggle']);
</script>

<template>
    <aside :style="{ backgroundColor: sideBarBg }" :class="{ collapsed: isCollapsed }">
      <button class="toggle-button" @click="$emit('toggle')">
        <CustomIcon :icon="isCollapsed ? 'mdiMenu' : 'mdiChevronLeft'" :size="26" class="macaroons-icon"/>
      </button>
      <ul>
        <li v-for="item in menuItems" :key="item.route" :class="{ tooltip: isCollapsed }">
            <router-link :to="item.route">
                <CustomIcon v-if="isCollapsed" :icon="item.icon" :size="24" class="bar-icon" />
                <span v-else class="not-collapsed-link">
                    <CustomIcon :icon="item.icon" :size="24" />
                    <p class="bar-txt">{{ item.name }}</p>
                </span>
            </router-link>
            <span v-if="isCollapsed" class="tooltip-text">{{ item.tooltip }}</span>
        </li>
      </ul>
    </aside>
</template>

<style>
    aside {
        width: 180px;
        padding: 1rem;
        /* transition: width 0.3s ease; */
        position: relative;
    }

    a {
        color: white;
    }

    .collapsed {
        width: 70px;
    }

    .toggle-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: 2px solid white;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        font-size: 18px;
        width: 50px;
        height: 30px;
        transition: transform 0.3s ease;
    }

    .toggle-button:focus {
        outline: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin-top: 40px;
    }

    li {
        padding: 1rem 0;
        transition: padding 0.3s ease;
    }

    li:hover {
        .bar-txt {
            font-weight: bolder;
            border-bottom: 2px solid white;
        }
        .bar-icon {
            width: 100%;
            height: 80%;
        }
    }

    .not-collapsed-link {
        display: flex;
        padding: 2px;
        margin: -1.5rem 0;
    }

    .bar-txt {
        margin-left: 1rem;
    }

    .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .tooltip .tooltip-text {
        visibility: hidden;
        width: 100px; 
        background-color: whitesmoke;
        color: var(--vt-c-breezy-blue-2);
        text-align: center;
        box-shadow: 3px 3px;
        border-radius: 5px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        top: 50%; 
        left: 130%; 
        margin-left: 0; 
        opacity: 0;
        transform: translateY(-50%);
        transition: opacity 0.5s;
    }

    .tooltip:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }

</style>