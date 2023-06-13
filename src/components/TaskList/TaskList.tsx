import React from 'react';
import { ITask, TTasks } from 'types';
import { Task } from 'components/Task/Task';

interface ITaskList {
  tasks:TTasks,
  onChangeSelectValue: (id:number) => void,
  isVisible: boolean
}

const TaskList = ({onChangeSelectValue,tasks,isVisible}: ITaskList) => {
  
  return (
    <>
      {
        isVisible ?
        <div>
          { 
            tasks.map( (task) => (
              <Task onChangeSelectValue={onChangeSelectValue} task={task} key={task.id}/>
            )) 
          }
        </div>
        : null
      }
    </>
  )
}

export default TaskList
