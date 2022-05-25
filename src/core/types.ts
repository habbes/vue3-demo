export interface Task {
  id: number;
  name: string;
  priority: TaskPriority;
  done: boolean;
  due: Date;
}

export interface CreateTaskArgs {
  name: string;
  priority: TaskPriority;
  due: Date;
}

export type TaskPriority = 'high' | 'medium' | 'low';