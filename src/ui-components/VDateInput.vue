<template>
  <VLayout>
    <VLabel v-if="label" :for="id">{{ label }}</VLabel>
    <input
      :id="id"
      type="date"
      :modelValue="dateString"
      :placeholder="placeholder"
      @change="onChange"
      :required="required"
      class="appearance-none rounded-md
      relative block w-full px-3 py-2 border
      border-gray-300 placeholder-gray-500
      text-gray-900  
      focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
      focus:z-10 sm:text-sm"
    />
  </VLayout>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import VLabel from './VLabel.vue';
import VLayout from './VLayout.vue';

const props = defineProps<{
  label?: string;
  placeholder?: string;
  modelValue: Date;
  required?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date): void;
}>();

const id = `input${Math.random()}`;
const dateString = computed(() => props.modelValue.toISOString().split('T')[0]);

function onChange(event: Event) {
  emit('update:modelValue', new Date((event.target as HTMLInputElement).value));
}
</script>