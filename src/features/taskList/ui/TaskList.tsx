import { TaskCard } from 'entities/task'
import { FilterButton } from 'shared/filterButton'

import { useTasks, FILTER, type Filter } from '../model/useTasks'

import module from './TaskList.module.css'


export const TaskList = () => {

  const { tasks, setFilter, removeTask } = useTasks()

  const filterCallback = (onChangeValue: string) => setFilter(onChangeValue as Filter)

  return (
    <>
      <FilterButton onChangeCallBack={filterCallback} name='фильтрация по статусу'>
        <option value={FILTER.all} key='0'>{FILTER.all}</option>
        <option value={FILTER.completed} key='1'>{FILTER.completed}</option>
        <option value={FILTER.incomplete} key='2'>{FILTER.incomplete}</option>
      </FilterButton>
      <ol className={module.TaskList}>
        {tasks.map(({ id, completed, title }) =>
          <li onClick={() => removeTask(id)} key={id}>
            <TaskCard id={id} completed={completed} title={title} />
          </li>
        )}
      </ol>
    </>
  )
}
