import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import TaskList from 'components/TaskList/TaskList';
import Footer  from 'components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { UseTypedSelector } from 'hooks/UseTypedSelector';
import { useEffect, useCallback } from 'react';

function App() {
  const dispatch = useDispatch();
  const store = UseTypedSelector(store => store);
  const tasksList = UseTypedSelector(store => store.taskData.filtredTasks); 
  const itemsLeft = UseTypedSelector(store => store.taskData.itemsLeft); 
  const rootTaskList = UseTypedSelector(store => store.taskData.filtredTasks);
  const filterType = UseTypedSelector(store => store.taskData.filtredType);
  const isVisible = UseTypedSelector(store => store.taskData.isTaskListOpen);

  const callbacks = {
    changeSelectedValue: useCallback( (id:number) =>  dispatch({type: 'CHANGESELECTEDVALUE' , payload: id}), [store]),
    pickAllCompleted: useCallback( () =>  dispatch({type: 'PICKALLCOMPLETED'}), [store]),
    pickNotcompleted: useCallback( () =>  dispatch({type: 'PICKNOTCOMPLETED'}), [store]),
    pickAll: useCallback( () =>  dispatch({type: 'PICKALL'}), [store]),
    clearcompleted: useCallback( () =>  dispatch({type: 'ClEARCOMPLETED'}), [store]),
    changeTaskListVisible: useCallback( () =>  dispatch({type: 'CHANGETASKLISTVISIBLE'}), [store]),
    addNewTask: useCallback( (text:string) =>  dispatch({type: 'ADDNEWTASK' , payload: text}), [store]),
  }

  useEffect(()=>{
    switch (filterType){
      case 'active':
        callbacks.pickNotcompleted()
        break
      case 'all':
        callbacks.pickAll()
        break
      case 'completed':
        callbacks.pickAllCompleted()
        break
    }
  },[rootTaskList.length]);

  return (
    <div className="App">
      <div className="App_container">
        <Header 
          changeTaskListVisible={callbacks.changeTaskListVisible} 
          addTask={callbacks.addNewTask} 
          isVisible={isVisible}
        />
        <TaskList 
          tasks={tasksList} 
          isVisible={isVisible} 
          onChangeSelectValue={callbacks.changeSelectedValue}
        />
        <Footer 
          clearCompleted={callbacks.clearcompleted}
          itemsLeft={itemsLeft}
          pickAll={callbacks.pickAll}
          pickAllCompleted={callbacks.pickAllCompleted}
          pickNotCompleted={callbacks.pickNotcompleted}
          fiterType={filterType}
        />
      </div>
    </div>
  );
}

export default App;
