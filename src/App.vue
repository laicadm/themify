<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import IntroPane from './components/IntroPane.vue'
import { ref, watch } from 'vue'


const showHeader = ref(true)
const route = useRoute()
watch(
  () => route.path,
  (newPath) => {
    showHeader.value = newPath === '/' || newPath === '/about'
  },
  { immediate: true }
)
</script>

<template>
  <header v-if="showHeader">
    <img alt="themify logo" class="logo" src="@/assets/themify-logo.png" width="125" height="125" />

    <div class="wrapper">
      <IntroPane msg="Themify" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <div v-else>
  </div>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 3rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  
}

nav a.router-link-exact-active {
  font-weight: bold;
  font-size: large;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

a {
  color: #4182b4;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
