<script setup lang="ts">
import DisplayModeToggle from './dashboards/components/toggles/DisplayModeToggle.vue';
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <div class="title">
      <h1 class="blue-link themify">{{ msg }}</h1>
      <span class="toggle-mode"><DisplayModeToggle :isCollapsed="true"/></span>
    </div>
    <h3>
      Offers you a dashboard of various themes.
      From forms to tables, we got the things you need!
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.title {
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
}

.themify {
  margin-right: 1rem;
}

.title >>> .display-mode {
  color: rgb(78, 133, 235);;
}

.toggle-mode {
  margin-top: -0.8rem;
}
</style>
