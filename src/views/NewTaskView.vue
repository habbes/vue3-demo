<template>
  <CreateTaskForm @create="onCreate" />
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import type { CreateTaskArgs } from "@/core";
import { useTasksStore } from "@/stores";
import CreateTaskForm from "@/components/CreateTaskForm.vue";

const router = useRouter();
const taskStore = useTasksStore();

function onCreate(task: CreateTaskArgs) {
  taskStore.createTask(task);
  router.push({ name: 'home' });
}
</script>