import { ITasksStore } from "types";
import { tasks } from "data";
import { ITask } from "types";
import {generateNewId} from "utilits"

const intitialState: ITasksStore = {
   tasks: [],
   filtredTasks: [],
   itemsLeft: 0,
   filtredType: 'all',
   isTaskListOpen:true,
}

export interface IAction {
   type: string
   payload?: any
}

export const tasksReducer = (state = intitialState , action:IAction ) => {
   switch(action.type){
      case 'CHANGESELECTEDVALUE':
         {
            let itemsLeft = 0;
            const filtredValue  = state.filtredTasks.map(task => {
               return task.id === action.payload ?  {...task,  isCompleted: !task.isCompleted} : task
            })
            filtredValue.forEach(task => {
               itemsLeft = !task.isCompleted ? itemsLeft + 1 : itemsLeft;
            })
            return {...state, filtredTasks:filtredValue ,tasks: filtredValue, itemsLeft: itemsLeft ,filtredType: 'all' };
         }
      case 'PICKALLCOMPLETED':
         {
            const completedTasks = state.tasks.filter( item => item.isCompleted)
            return {...state, filtredTasks: completedTasks, filtredType: 'completed'};
         }
      case 'PICKNOTCOMPLETED':
         {
            const completedTasks = state.tasks.filter( item => !item.isCompleted)
            return {...state, filtredTasks: completedTasks,filtredType: 'active'}
         }
      case 'PICKALL':
            return {...state, filtredTasks: state.tasks, filtredType: 'all'}
      case 'ClEARCOMPLETED': 
         {
            const newData = state.tasks.filter( item => !item.isCompleted)
            return {...state , filtredTasks: newData , tasks: newData }
         }
      case 'ADDNEWTASK':
         const newTask:ITask = {id: generateNewId(state.tasks) ,isCompleted: false, text: action.payload};
            return {...state, 
                     tasks: [...state.tasks , newTask],
                     filtredTasks: [...state.filtredTasks , newTask],
                     itemsLeft: state.itemsLeft+ 1
                  }
      case 'CHANGETASKLISTVISIBLE':
         return {...state , isTaskListOpen: !state.isTaskListOpen}
      default: 
            return state
   }
}
