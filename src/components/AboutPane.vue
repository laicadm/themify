<script setup lang="ts">
import FeatureItem from './FeatureItem.vue'
import CustomIcon from './icons/CustomIcon.vue'
</script>

<template>
  <FeatureItem class="f-wrapper">
    <template #icon>
      <CustomIcon icon="mdiAccountCircle" :size="32" class="default-icon"/>
    </template>
    <template #heading>Author</template>

    Hello, this is
    <a href="https://github.com/laicadm" target="_blank" rel="noopener">laicadm</a>.
    I am a software developer who is passionate about web development. 
  </FeatureItem>

  <FeatureItem class="f-wrapper">
    <template #icon>
      <CustomIcon icon="mdiMenu" :size="32" class="default-icon"/>
    </template>
    <template #heading>Framework</template>

    This is made possible through
    <a href="/https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>,
    which is a popular JavaScript framework for building web user interfaces.
  </FeatureItem>

  <FeatureItem class="f-wrapper">
    <template #icon>
      <CustomIcon icon="mdiGithub" :size="32" class="default-icon"/>
    </template>
    <template #heading>Repository</template>

    Visit the public repository at
    <a href="https://github.com/laicadm" target="_blank" rel="noopener">GitHub</a>
    for reference. Impart your knowledge and skills, and be a contributor.
  </FeatureItem>

  <FeatureItem class="f-wrapper">
    <template #icon>
      <CustomIcon icon="mdiWeb" :size="32" class="default-icon"/>
    </template>
    <template #heading>Website</template>

    Created and managed by
    <a href="" target="_blank" rel="noopener">laicadm</a>.
    Please visit this personal website to view the other web applications I have developed. 
  </FeatureItem>

  <FeatureItem class="f-wrapper">
    <template #icon>
      <CustomIcon icon="mdiEmail" :size="32" class="default-icon"/>
    </template>
    <template #heading>Contact</template>

    For inquiries, requests, collaboration, and more, please contact me on my email
    <a href="" rel="noopener">marinoalaica@gmail.com</a>.
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
</style>