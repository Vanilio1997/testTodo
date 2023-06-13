import React from 'react';
import { ITask } from 'types';
import './style.css';
import {cn as bem} from '@bem-react/classname';

interface ITaskProps{
  task: ITask,
  onChangeSelectValue: (id:number) => void,
}

export const Task = ({onChangeSelectValue,task}: ITaskProps) => {
  const {id,isCompleted,text} = task;
  const cn = bem('Task');
  return (
    <div className={cn('labelContainer')}>
      <label>
        <input type='checkbox' checked={isCompleted} className={cn('checkInput')} onChange={()=> onChangeSelectValue(id)}/>
        <span className={cn('checkbox')}></span>
        <span className={ isCompleted  ? cn('completed') : cn('text')}>{text}</span>
      </label>
    </div>
  )
}
