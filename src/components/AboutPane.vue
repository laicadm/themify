<script setup lang="ts">
import { ref } from 'vue';
import FeatureItem from './FeatureItem.vue'
import CustomIcon from './icons/CustomIcon.vue'
import { aboutItems as aboutItemsData } from '@/assets/data/home/aboutData';

// get data from assets
const aboutItems = ref(aboutItemsData);
</script>

<template>
  <FeatureItem
      v-for="item in aboutItems"
      :key="item.heading"
      class="f-wrapper"
  >
      <template #icon>
        <CustomIcon :icon="item.icon" :size="item.size" :class="item.className" />
      </template>
      <template #heading>
        {{ item.heading }}
      </template>
      {{ item.description }}
      <a :href="item.link" target="_blank" rel="noopener">{{ item.linkText }}</a>
      {{ item.additionalText }}
  </FeatureItem>
</template>

<style scoped>
.default-icon {
  color: rgb(78, 133, 235);
}

.f-wrapper {
  padding: 0 5rem;
  text-align: justify;
  line-height: 2rem;
  padding-bottom: 2rem;
}

a {
    color: #4182b4;
}
</style>