import type { Task } from "./types";

export type SortBy = 'dueDate' | 'priority';
export type FilterBy = 'all' | 'active' | 'done';

export function sortTasks(tasks: Task[], by: SortBy) {
  const comparer = by === 'dueDate' ? dateComparer : priorityComparer;
  return [...tasks].sort(comparer);
}

export function filterTasks(tasks: Task[], by: FilterBy) {
  if (by === 'all') {
    return tasks;
  }

  if (by === 'active') {
    return tasks.filter(t => !t.done);
  }

  return tasks.filter(t => t.done);
}

function priorityComparer(a: Task, b: Task) {
  if (a.priority === 'high') {
    return b.priority === 'high' ? 0 : -1;
  }

  if (a.priority === 'medium') {
    return b.priority === 'high' ? 1
    : b.priority === 'medium' ? 0
    : -1;
  }

  return b.priority === 'low' ? 0 : 1;
}

function dateComparer(a: Task, b: Task) {
  console.log('HERE');
  return a.due.getTime() - b.due.getTime();
}
