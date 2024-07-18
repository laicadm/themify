<script setup lang="ts">
import CustomIcon from '@/components/icons/CustomIcon.vue';
import { ref, watch, onMounted } from 'vue';

defineProps<{
  isCollapsed: boolean
}>()

// store display mode value
const isDarkMode = ref(false);
const toggleMode = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value));
};
watch(isDarkMode, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

// load stored display mode
onMounted(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode) {
    isDarkMode.value = JSON.parse(savedMode);
  }
});
</script>

<template>
    <button class="display-mode" @click="toggleMode">
        <CustomIcon :icon="isDarkMode ? 'mdiWeatherNight' : 'mdiBrightness7' " :size="26" />
        <span v-if="!isCollapsed">
            <p>{{ isDarkMode ? 'Dark' : 'Light' }} Mode</p>
        </span>
    </button>
</template>