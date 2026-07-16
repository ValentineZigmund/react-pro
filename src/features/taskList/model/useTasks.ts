import { useGetTasksQuery } from 'entities/task/api/tasksApi';
import type { Task } from 'entities/task/model/types';
import { useMemo, useState, useEffect, useCallback } from 'react';

export const FILTER = {
  all: 'all',
  completed: 'completed',
  incomplete: 'incomplete'
} as const;

export const API = {
  tasksApi: 'tasksApi'
} as const;

export type Filter = keyof typeof FILTER;

const statusToBool = (status: Filter) =>
  status === FILTER.completed

export const useTasks = () => {

  const { data = [] } = useGetTasksQuery()
  const [remoteTasks, setRemotelTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>(FILTER.all)

  const removeTask = useCallback((id: string) =>
    setRemotelTasks(remoteTasks.filter(task => task.id !== id)), [remoteTasks])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (data.length) setRemotelTasks(data)
  }, [data])


  const tasks = useMemo(() => {
    if (filter === FILTER.all) return remoteTasks
    return remoteTasks.filter((task) => task.completed === statusToBool(filter))
  }, [remoteTasks, filter])

  return { tasks, setFilter, removeTask }
}