import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import TaskList from 'components/TaskList/TaskList';
import Footer  from 'components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { UseTypedSelector } from 'hooks/UseTypedSelector';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const tasksList = UseTypedSelector(store => store.taskData.filtredTasks); 
  const itemsLeft = UseTypedSelector(store => store.taskData.itemsLeft); 
  const rootTaskList = UseTypedSelector(store => store.taskData.filtredTasks);
  const filterType = UseTypedSelector(store => store.taskData.filtredType);
  const isVisible = UseTypedSelector(store => store.taskData.isTaskListOpen);

  function changeSelectedValue(id:number){
    dispatch({type: 'CHANGESELECTEDVALUE' , payload: id});
  };

  function pickAllCompleted(){
    dispatch({type: 'PICKALLCOMPLETED'});
  };

  function pickNotcompleted(){
    dispatch({type:'PICKNOTCOMPLETED'});
  };

  function pickAll(){
    dispatch({type: 'PICKALL'});
  };

  function clearcompleted(){
    dispatch({type:'ClEARCOMPLETED'});
  };

  function addNewTask(text:string){
    dispatch({type: 'ADDNEWTASK', payload: text});
  };

  function changeTaskListVisible(){
    dispatch({type:'CHANGETASKLISTVISIBLE'})
  }

  useEffect(()=>{
    switch (filterType){
      case 'active':
        pickNotcompleted()
        break
      case 'all':
        pickAll()
        break
      case 'completed':
        pickAllCompleted()
        break
    }
  },[rootTaskList.length]);

  return (
    <div className="App">
      <div className="App_container">
        <Header 
          changeTaskListVisible={changeTaskListVisible} 
          addTask={addNewTask} 
          isVisible={isVisible}
        />
        <TaskList 
          tasks={tasksList} 
          isVisible={isVisible} 
          onChangeSelectValue={changeSelectedValue}
        />
        <Footer 
          clearCompleted={clearcompleted}
          itemsLeft={itemsLeft}
          pickAll={pickAll}
          pickAllCompleted={pickAllCompleted}
          pickNotCompleted={pickNotcompleted}
          fiterType={filterType}
        />
      </div>
    </div>
  );
}

export default App;
