<template>
  <span :class="classes"><slot></slot></span>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  small?: boolean;
  light?: boolean;
}>();

const classes = computed(() => {
  return {
    'text-xs': props.small,
    'font-light': props.light,
    'text-slate-400': props.light
  }
});
</script>