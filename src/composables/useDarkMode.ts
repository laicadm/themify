import { ref, onMounted, watch } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

  const updateDarkMode = () => {
    isDarkMode.value = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode.value.toString());
  };

  onMounted(() => {
    const observer = new MutationObserver(updateDarkMode);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    updateDarkMode();
  });

  return isDarkMode;
}
