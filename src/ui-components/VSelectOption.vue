<template>
  <option :value="value">{{ label }}</option>
</template>
<script lang="ts" setup>
defineProps<{
  value: string;
  label: string;
}>();
</script>