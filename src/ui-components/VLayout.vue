<template>
  <div class="flex" :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  gap?: boolean;
  gapSmall?: boolean;
  horizontal?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  justifyEnd?: boolean;
  justifyEvenly?: boolean;
  itemsStart?: boolean;
  itemsCenter?: boolean;
  fill?: boolean;
}>();

const classes = computed(() => {
  return {
    'flex-1': props.fill,
    'flex-row': props.horizontal,
    'flex-col': !props.horizontal,
    'gap-3': props.gap,
    'gap-1': props.gapSmall,
    'justify-center': props.justifyCenter,
    'justify-between': props.justifyBetween,
    'justify-end': props.justifyEnd,
    'justify-evenly': props.justifyEvenly,
    'items-start': props.itemsStart,
    'items-center': props.itemsCenter
  };
});
</script>