import { memo } from 'react'

import type { Task } from '../model/types'

import './TaskCard.module.css'

export const TaskCard = memo(({ id, title, completed }: Task) =>
  <article key={id}>
    <h3>{title}</h3>
    <input type="checkbox" checked={completed} disabled/>
  </article>)