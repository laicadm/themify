<script setup lang="ts">
import { ref } from 'vue';
import FeatureItem from './FeatureItem.vue'
import CustomIcon from './icons/CustomIcon.vue'
import { featureItems as featureItemsData } from '@/assets/data/home/featureData';

const featureItems = ref(featureItemsData);
</script>

<template>
  <FeatureItem 
      v-for="(item, index) in featureItems" 
      :key="index" 
      class="f-wrapper">
      <template #icon>
        <CustomIcon :icon="item.icon" :size="32" :class="item.iconClass"/>
      </template>
      <template #heading>
        <a :href="item.link" class="head-title" rel="noopener">{{ item.heading }}</a>
      </template>
      <div v-html="item.description"></div>
  </FeatureItem>
</template>

<style scoped>
.breeze-icon {
  color: blue;
}

.pasture-icon {
  color: green;
}

.autumn-sky-icon {
  color: rgb(78, 133, 235);
}

.macaroons-icon {
  color: palevioletred;
}

.f-wrapper {
  padding: 0 5rem;
  text-align: justify;
  line-height: 2rem;
  padding-bottom: 2rem;
}

a, .item-link {
  color: #4182b4;
}

.head-title {
  font-weight: bolder;
  margin-left: -0.3em;
}
</style>