import { onMounted, onUnmounted, onUpdated, ref } from "vue";

function useAvailableHeight() {
  const componentRef = ref();
  const componentHeight = ref("100%");

  function _setRemainingHeight() {
    if (!componentRef.value) {
      return;
    }

    componentRef.value.style.setProperty('box-sizing', 'border-box')
    const rect = componentRef.value.getBoundingClientRect(); // position relative to viewport [web:3]
    const top = rect.top; // pixels from viewport top [web:3]
    const remaining = Math.max(0, window.innerHeight - top); // distance to viewport b

    componentHeight.value = `${remaining}px`;
  }

  onMounted(() => {
    _setRemainingHeight();
  });

  onUpdated(() => {
    _setRemainingHeight();
  });

  onUnmounted(() => {});

  return {
    componentRef,
    componentHeight,
  };
}

export default useAvailableHeight;
