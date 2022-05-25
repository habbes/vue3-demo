<template>
  <div class="flex flex-col">
    <VLabel v-if="label" :for="id">{{ label }}</VLabel>
    <input
      :id="id"
      :type="type || 'text'"
      :modelValue="modelValue"
      :placeholder="placeholder"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :required="required"
      class="appearance-none rounded-md
      relative block w-full px-3 py-2 border
      border-gray-300 placeholder-gray-500
      text-gray-900  
      ocus:outline-none focus:ring-indigo-500 focus:border-indigo-500
      focus:z-10 sm:text-sm"
    />
  </div>
</template>
<script lang="ts" setup>
import VLabel from "./VLabel.vue";
defineProps<{
  type?: string;
  label?: string;
  placeholder?: string;
  modelValue: string;
  required?: boolean;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const id = `input${Math.random()}`;
</script>