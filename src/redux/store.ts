import { createStore} from 'redux';
import {combineReducers} from 'redux';
import { tasksReducer } from './tasks/reducer';

const rootReducer = combineReducers({
   taskData : tasksReducer
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>