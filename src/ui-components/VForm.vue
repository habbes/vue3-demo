<template>
  <form @submit.prevent="$emit('submit')">
    <slot></slot>
  </form>
</template>
<script lang="ts" setup>
defineEmits<{
  (e: "submit"): void;
}>();
</script>