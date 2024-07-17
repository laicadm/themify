<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import CustomIcon from '@/components/icons/CustomIcon.vue';
import DisplayModeToggle from './toggles/DisplayModeToggle.vue';
import { ref } from 'vue';

const props = defineProps<{
  pageName: string
  sideBarBg: string
  isCollapsed: boolean
}>()

// used to loop sidebar items
const menuItems = ref([
  { name: 'Home', route: `/${props.pageName}`, icon: 'mdiHome', tooltip: 'Home' },
  { name: 'Buttons', route: `/${props.pageName}/buttons`, icon: 'mdiButtonPointer', tooltip: 'Buttons' },
  { name: 'Fields', route: `/${props.pageName}/fields`, icon: 'mdiFormTextbox', tooltip: 'Fields' },
  { name: 'Forms', route: `/${props.pageName}/forms`, icon: 'mdiSelect', tooltip: 'Forms' },
  { name: 'Tables', route: `/${props.pageName}/tables`, icon: 'mdiTable', tooltip: 'Tables' }
]);

const emit = defineEmits(['toggle', 'exit', 'select']);

function selectItem(itemName: string) {
  emit('select', itemName);
}
</script>

<template>
    <aside :style="{ backgroundColor: sideBarBg }" :class="{ collapsed: isCollapsed }">
      <button class="toggle-button" @click="$emit('toggle')">
        <CustomIcon :icon="isCollapsed ? 'mdiMenu' : 'mdiChevronLeft'" :size="26"/>
      </button>
      <ul>
        <li v-for="item in menuItems" :key="item.route" :class="{ tooltip: isCollapsed }">
            <router-link :to="item.route" active-class="active" @click="selectItem(item.name)">
                <CustomIcon v-if="isCollapsed" :icon="item.icon" :size="24" class="bar-icon" />
                <span v-else class="not-collapsed-link">
                    <CustomIcon :icon="item.icon" :size="24" />
                    <p class="bar-txt">{{ item.name }}</p>
                </span>
            </router-link>
            <span v-if="isCollapsed" class="tooltip-text" :style="{ color: props.sideBarBg }">{{ item.tooltip }}</span>
        </li>
      </ul>
      <DisplayModeToggle :isCollapsed="isCollapsed" />
      <router-link to="/">
        <button class="exit-button" @click="$emit('exit')">
            <CustomIcon :icon="'mdiExitToApp'" :size="26"/>
            <span v-if="!isCollapsed">
                <p>Exit Demo</p>
            </span>
        </button>
      </router-link>
    </aside>
</template>

<style>
    aside {
        width: 180px;
        padding: 1rem;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    a {
        color: white;
    }

    .collapsed {
        width: 70px;
    }

    .toggle-button {
        position: absolute;
        top: 12px;
        right: 10px;
        background: none;
        border: 2px solid white;
        border-radius: 3px;
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
    
    li:hover .bar-txt, .active .bar-txt {
        font-weight: bolder;
        border-bottom: 2px solid white;
        transition: 0.3s;
    }

    li:hover .bar-icon, .active .bar-icon {
        width: 100%;
        height: 80%;
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

    .exit-button, .display-mode {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 1rem 0;
        justify-content: center;
        transition: padding 0.3s ease;
        margin-top: auto;
    }

    .exit-button span, .display-mode span {
        margin-left: 1rem;
    }

</style>