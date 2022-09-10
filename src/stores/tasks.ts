import { ref } from "vue";
import type { Task, CreateTaskArgs } from "@/core";

function createTasksStore() {
  const tasks = ref<Task[]>([
    {
      id: 1,
      name: 'Learn Vue 3',
      priority: 'medium',
      due: new Date(2022, 5, 1),
      done: true
    },
    {
      id: 2,
      name: 'Launch awesome app',
      priority: 'high',
      due: new Date(2022, 7, 25),
      done: false
    },
    {
      id: 3,
      name: 'Create awesome app',
      priority: 'high',
      due: new Date(2022, 6, 1),
      done: false
    },
    {
      id: 4,
      name: 'Road trip',
      priority: 'low',
      due: new Date(2025, 5, 24),
      done: false
    }
  ]);

  let nextId = tasks.value.length + 1;

  function createTask(args: CreateTaskArgs) {
    const task: Task = {
      ...args,
      id: nextId++,
      done: false
    };

    tasks.value.push(task);
  }

  return {
    tasks,
    createTask
  }
}

const tasks = createTasksStore();

export const useTasksStore = () => tasks;
