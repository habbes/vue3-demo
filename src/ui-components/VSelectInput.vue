<template>
  <VLayout>
    <VLabel v-if="label" :for="id">{{ label }}</VLabel>
    <select
      :id="id"
      :required="required"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="appearance-none rounded-md
      relative block w-full px-3 py-2 border
      border-gray-300 placeholder-gray-500
      text-gray-900  
      ocus:outline-none focus:ring-indigo-500 focus:border-indigo-500
      focus:z-10 sm:text-sm"
    >
      <option disabled :value="undefined">{{ placeholder || 'Select item' }}</option>
      <slot></slot>
    </select>
  </VLayout>
</template>
<script lang="ts" setup>
import VLabel from "./VLabel.vue";
import VLayout from "./VLayout.vue";

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