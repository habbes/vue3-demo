<template>
  <VForm @submit="create">
    <VLayout gap>
      <VTextInput
        label="Name"
        v-model="task.name"
        placeholder="e.g. Wash dishes"
        required
      />
      <VSelectInput
        label="Priority"
        v-model="task.priority"
        required
      >
        <VSelectOption value="low" label="Low" />
        <VSelectOption value="medium" label="Medium" />
        <VSelectOption value="high" label="High" />
      </VSelectInput>
      <VDateInput
        label="Due Date"
        v-model="task.due"
        required
      />
      <VLayout>
        <VButton submit>Create</VButton>
      </VLayout>
    </VLayout>
  </VForm>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import type { CreateTaskArgs } from "@/core";

import VTextInput from "@/ui-components/VTextInput.vue";
import VDateInput from "@/ui-components/VDateInput.vue";
import VLayout from "@/ui-components/VLayout.vue";
import VButton from "@/ui-components/VButton.vue";
import VSelectOption from "@/ui-components/VSelectOption.vue";
import VSelectInput from "@/ui-components/VSelectInput.vue";
import VForm from "@/ui-components/VForm.vue";

const emit = defineEmits<{
  (e: 'create', task: CreateTaskArgs): void
}>();

const task = reactive<CreateTaskArgs>({
  name: "",
  priority: "low",
  due: new Date()
});

function create() {
  emit("create", task);
}
</script>