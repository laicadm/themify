<script setup lang="ts">
import FeatureItem from './FeatureItem.vue'
import CustomIcon from './icons/CustomIcon.vue'
</script>

<template>
  <FeatureItem>
    <template #icon>
      <CustomIcon icon="mdiWaves" :size="32" class="breeze-icon"/>
    </template>
    <template #heading>Breezy</template>

    Relax with the standard blue theme called
    <a href="/breezy" rel="noopener">Breezy</a> as it
    exudes a sense of tranquility and stability to revitalize those around it.
  </FeatureItem>

  <FeatureItem>
    <template #icon>
      <CustomIcon icon="mdiGrass" :size="32" class="pasture-icon"/>
    </template>
    <template #heading>Pasture</template>

    Bring a sense of freedom and appreciation for nature with the green themed
    <a href="/monotone" rel="noopener">Pasture</a>.
    It prefers simplicity and a slower pace of life.
  </FeatureItem>

  <FeatureItem>
    <template #icon>
      <CustomIcon icon="mdiCloud" :size="32" class="autumn-sky-icon"/>
    </template>
    <template #heading>Autumn Sky</template>

    The nostalgic blue and orange called
    <a href="/autumnsky" rel="noopener">Autumn Sky</a>
    blends the beautiful transitions of a warm summer to the deeper hues of winter.
  </FeatureItem>

  <FeatureItem>
    <template #icon>
      <CustomIcon icon="mdiIceCream" :size="32" class="macaroons-icon"/>
    </template>
    <template #heading>Macaroons</template>

    Embody the gentleness and serene demeanor with our pastel theme called
    <a href="/monotone" rel="noopener">Macaroons</a>. 
    A combination of subtle pink and teal that reflects sweetness.
  </FeatureItem>

  <FeatureItem>
    <template #icon>
      <CustomIcon icon="mdiContrastCircle" :size="32" />
    </template>
    <template #heading>Monotone</template>

    For a calm and composed demeanor, it is the black and white theme called
    <a href="/monotone" rel="noopener">Monotone</a>. 
    It speaks in a measured and even tone that rarely changes pitch. 
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
</style>