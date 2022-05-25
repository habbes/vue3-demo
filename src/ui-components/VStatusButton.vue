<template>
  <div class="inline-block cursor-pointer px-1" :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  active?: boolean;
}>();

const classes = computed(() => {
  return {
    'border': props.active,
    'border-slate-400': props.active,
    'rounded-sm': props.active
  }
});
</script>