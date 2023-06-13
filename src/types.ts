export interface  ITask {
   text: string
   id: number
   isCompleted: boolean
}

export type TTasks = ITask[] | [];

export type FiltredType = 'all' | 'active' | 'completed';

export interface ITasksStore {
   tasks: TTasks;
   filtredTasks: TTasks;
   itemsLeft: number;
   filtredType: FiltredType;
   isTaskListOpen: boolean
}


export interface IStore{
   taskData: ITasksStore
}