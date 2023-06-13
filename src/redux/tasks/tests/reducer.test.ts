import { tasksReducer} from "../reducer";
import { IAction } from "../reducer";
import { ITasksStore } from "types";
import { tasks } from "data";
import { UseTypedSelector } from "hooks/UseTypedSelector";
import { generateNewId } from "utilits/utilits";

// const state = UseTypedSelector(state => state.taskData);
const state:ITasksStore = {
      tasks: [],
      filtredTasks: [],
      itemsLeft: 0,
      filtredType: 'all',
      isTaskListOpen:true,
}
const stateNotEmpty:ITasksStore = {
      tasks:tasks ,
      filtredTasks: tasks,
      itemsLeft: 3,
      filtredType: 'all',
      isTaskListOpen:true,
}

describe('reducers', () => {
   it('return store' ,() => {
         const result = tasksReducer(state ,{type: ''});

         expect(result).toEqual(state);
   })

   it('add new' ,() => {
      const action:IAction = { type: 'ADDNEWTASK', payload: 'new Task'};
      const result =  tasksReducer(state , action);
      expect(result.filtredTasks[0].text).toBe('new Task');
   })

   it('change select value', () => {
      const action:IAction = { type: 'CHANGESELECTEDVALUE', payload: 1};
      const result = tasksReducer( stateNotEmpty, action );
      expect(result.filtredTasks[0].isCompleted).toBe(true);
      expect(result.itemsLeft).toBe(2);
   })

   it('pick all active task', () => {
      const action:IAction = { type: 'PICKNOTCOMPLETED'};
      const result = tasksReducer(stateNotEmpty , action)
      expect(result.filtredTasks.length).toBe(3);
   })

   it('pick all completedTask', () => {
      const action:IAction = { type: 'PICKALLCOMPLETED'};
      const result = tasksReducer(stateNotEmpty , action)
      expect(result.filtredTasks.length).toBe(0);
   })
}) 