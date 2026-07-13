import type { Task } from 'entities/task/model/types';
import { useEffect, useState } from 'react';

export const FILTER = {
  all: 'all',
  completed: 'completed',
  incomplete: 'incomplete'
} as const;

export type Filter = keyof typeof FILTER;

const TASKS: Task[] = [
  { id: '0', title: 'one', completed: false },
  { id: '1', title: 'two', completed: false },
  { id: '2', title: 'three', completed: true }
]

const statusToBool = (status: Filter) =>
  status === FILTER.completed


export const useTasks = (initial: Task[] = TASKS) => {

  const [initialTasks, setInitialTasks] = useState(initial)
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>(FILTER.all)

  useEffect(() => {
    // Если фильтр установлен на 'all' - отображаем все таски
    if (filter === FILTER.all) return setTasks(initialTasks)
    // В противном случае - оставляем только соотвествующие фильтру
    setTasks(initialTasks.filter((task) => task.completed === statusToBool(filter)))
  }, [initialTasks, filter])

  const removeTask = (id: string) =>
    setInitialTasks(initialTasks.filter(task => task.id !== id))

  return { tasks, setFilter, removeTask }
}