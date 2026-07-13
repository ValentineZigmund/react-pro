import type { Task } from 'entities/task/model/types';
import { useMemo, useCallback, useState } from 'react';

export const FILTER = {
  all: 'all',
  completed: 'completed',
  incomplete: 'incomplete'
} as const;

export type Filter = keyof typeof FILTER;

export const TASKS: Task[] = Array.from({ length: 1000 }, (_, index) =>
  ({ id: String(index), title: String(index), completed: Boolean(index % 2) }))

const statusToBool = (status: Filter) =>
  status === FILTER.completed

export const useTasks = (initial: Task[] = TASKS) => {

  console.log('render')

  const [initialTasks, setInitialTasks] = useState(initial)
  const [filter, setFilter] = useState<Filter>(FILTER.all)

  const removeTask = useCallback((id: string) =>
    setInitialTasks(initialTasks.filter(task => task.id !== id)), [initialTasks])

  const tasks = useMemo(() => {
    if (filter === FILTER.all) return initialTasks
    return initialTasks.filter((task) => task.completed === statusToBool(filter))
  }, [initialTasks, filter])

  return { tasks, setFilter, removeTask }
}