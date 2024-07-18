<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import HomeContent from './components/contents/HomeContent.vue'
import ButtonsContent from './components/contents/ButtonsContent.vue'
import FieldsContent from './components/contents/FieldsContent.vue'
import FormsContent from './components/contents/FormsContent.vue'
import TablesContent from './components/contents/TablesContent.vue'
import { ref } from 'vue';

defineProps<{
  pageName: string
  navTitle: string
  navBg: string
  navIcon: string
  sideBarBg: string
}>()

const isSidebarCollapsed = ref(true);

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

const componentsMap = {
  Home: HomeContent,
  Buttons: ButtonsContent,
  Fields: FieldsContent,
  Forms: FormsContent,
  Tables: TablesContent
};
type ComponentKey = keyof typeof componentsMap;

const currentComponent = ref<typeof HomeContent>(HomeContent);

function changeContent(selectedItem: ComponentKey) {
  currentComponent.value = componentsMap[selectedItem] || HomeContent;
}

</script>

<template>
    <div class="dashboard">
      <Navbar :navTitle="navTitle"
              :navBg="navBg"
              :navIcon="navIcon"
              :pageName="pageName"
              />
      <div class="main">
        <Sidebar :pageName="pageName"
                 :sideBarBg="sideBarBg"
                 :isCollapsed="isSidebarCollapsed"
                 @toggle="toggleSidebar"
                 @select="changeContent"/>
        <div class="content">
          <component :is="currentComponent" />
        </div>
      </div>
    </div>
</template>
  
<style>
.dashboard {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
}
  
.main {
    display: flex;
    flex: 1;
}
  
.content {
    flex: 1;
    padding: 1rem;
}
</style>
  