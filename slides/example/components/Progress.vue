<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  current: {
    type: Number,
    default: 0,
    required: true,
  },
  total: {
    type: Number,
    default: 0,
    required: true,
  },
});

const style = computed(() => {
  const { current, total } = props;
  const adjustedTotal = Math.max(1, total - 1);
  return {
    width: `${100 / adjustedTotal}%`,
    left: `${(100 / adjustedTotal) * (current - 2)}%`,
  };
});
</script>

<template>
  <div class="absolute z-50 bottom-5 left-0 right-0 flex justify-center">
    <div
      class="w-150 relative h-2 bg-green-500/50 rounded-full overflow-hidden"
    >
      <span
        class="absolute h-full bg-gray-500 transition-all duration-300 rounded-full"
        :style="style"
      ></span>
    </div>
  </div>
</template>
