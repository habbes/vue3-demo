<template>
  <VLayout gap>
    <TaskControls />
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @taskStatusChange="task.done = $event"
    />
  </VLayout>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useControlsStore, useTasksStore } from "@/stores";
import { sortTasks, filterTasks } from "@/core";
import VLayout from "../ui-components/VLayout.vue";
import TaskItem from "@/components/TaskItem.vue";
import TaskControls from "../components/TaskControls.vue";

const taskStore = useTasksStore();
const controls= useControlsStore();

const tasks = computed(() =>
  sortTasks(
    filterTasks(taskStore.tasks.value, controls.filterBy),
    controls.sortBy
  ));
</script>