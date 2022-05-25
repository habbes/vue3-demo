<template>
  <VCard>
    <VLayout>
      <VLayout horizontal itemsCenter gap>
        <VCheckBox
          :modelValue="task.done"
          @update:modelValue="$emit('taskStatusChange', $event)"
        />
        <VLayout fill>
          {{ task.name }}
        </VLayout>
        <VLayout>
          <VText small light>Priority: {{ task.priority }}</VText>
          <VText small light>Due: {{ getDateString(task.due) }}</VText>
        </VLayout>
      </VLayout>
    </VLayout>
  </VCard>
</template>
<script lang="ts" setup>
import { getDateString, type Task } from "@/core";
import VLayout from "../ui-components/VLayout.vue";
import VCheckBox from "../ui-components/VCheckBox.vue";
import VCard from "../ui-components/VCard.vue";
import VText from "../ui-components/VText.vue";

defineProps<{
  /**
   * The task to render
   */
  task: Task;
}>();

defineEmits<{
  (e: 'taskStatusChange', value: boolean): void;
}>();
</script>