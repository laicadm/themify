<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  bgColor: string
  txtColor: string
}>()


const searchQuery = ref('');
const handleSearch = () => {
  console.log('Searching for:', searchQuery.value);
};

</script>

<template>
   <div class="search-container">
        <input 
            type="text" 
            v-model="searchQuery" 
            @input="handleSearch"
            placeholder="Search"
            class="search-input"
            :style="{ backgroundColor: bgColor, color: txtColor }"
        />
    </div>
</template>

<style scoped>
.search-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    height: 50%;
    margin: 1rem;
}

.search-input {
    padding: 0.5rem;
    border-radius: 4px;
    border: 2px solid white;
    font-size: 1rem;
}

.search-input::placeholder {
  color: #fff;
}

.search-input:focus,
.search-input:active {
    outline: none;
}
</style>