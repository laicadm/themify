<template>
    <svg
      :class="className"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path :d="iconPath"></path>
    </svg>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps } from 'vue';
  import * as icons from '@mdi/js';

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    className: {
      type: String,
      default: '',
    },
  });
  
  const iconPath = computed(() => {
    return (icons as Record<string, string>)[props.icon];
  });
  </script>
  
  <style scoped>
  svg {
    fill: currentColor;
  }
  </style>
  