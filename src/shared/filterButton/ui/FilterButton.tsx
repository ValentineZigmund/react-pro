import type { IFilterButtonProps } from '../model/types'

import module from './FilterButton.module.css'

export const FilterButton = ({ name, onChangeCallBack, children }: IFilterButtonProps) =>
  <div className={module.FilterButton}>
    {name}
    <select name={name} onChange={e => onChangeCallBack(e.target.value)}>
      {children}
    </select>
  </div>