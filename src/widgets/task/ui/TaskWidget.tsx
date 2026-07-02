import { TaskList } from 'features/taskList'

import module from './TaskWidget.module.css'

export const TaskWidget = () =>
  <div className={module.TaskWidget}>
    <TaskList />
  </div>