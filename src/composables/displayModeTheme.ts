import { ref, watch, onMounted } from 'vue';
import type { Ref } from 'vue';

interface ThemeColors {
    navDefault: string;
    navDark: string;
    sideBarDefault: string;
    sideBarDark: string;
}

export function displayModeTheme(colors: ThemeColors) {
    const navBg: Ref<string> = ref(colors.navDefault);
    const sideBarBg: Ref<string> = ref(colors.sideBarDefault);
    const darkModeClass: Ref<boolean> = ref(document.documentElement.classList.contains('dark'));
  
    const updateTheme = () => {
      navBg.value = document.documentElement.classList.contains('dark')
        ? colors.navDark
        : colors.navDefault;
      sideBarBg.value = document.documentElement.classList.contains('dark')
        ? colors.sideBarDark
        : colors.sideBarDefault;
    };
  
    updateTheme();
  
    watch(darkModeClass, () => {
      updateTheme();
    });
  
    const observer = new MutationObserver(() => {
      darkModeClass.value = document.documentElement.classList.contains('dark');
    });
  
    onMounted(() => {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    });
  
    return {
      navBg,
      sideBarBg,
      darkModeClass,
      updateTheme,
    };
}