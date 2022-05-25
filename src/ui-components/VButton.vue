<template>
  <button
    :type="type"
    class="relative w-full sm:w-auto block text-sm font-semibold
    bg-slate-500 rounded-md text-white py-3 px-4 focus:outline-none
    focus-visible:ring-2 focus-visible:ring-slate-600
    focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
    hover:bg-slate-400"
    >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  submit?: boolean;
}>();

const type = computed(() => props.submit ? "submit" : "button");
</script>