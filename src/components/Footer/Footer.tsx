import React from 'react';
import { FiltredType } from 'types';
import {cn as bem} from '@bem-react/classname';
import './style.css';

interface IFooterProps{
  pickAllCompleted: () => void
  pickNotCompleted: () => void
  pickAll: () => void
  clearCompleted: () => void
  itemsLeft: number
  fiterType: FiltredType
}

const Footer = ({clearCompleted,pickAll,pickAllCompleted,pickNotCompleted,itemsLeft,fiterType}:IFooterProps) => {
  const cn = bem('Footer');
  return (
    <div className={cn()}>
      <div>items left {itemsLeft}</div>
      <div>
        <button 
          className={ fiterType === 'all' ? `${cn('active')}`:''}  
          onClick={()=> pickAll()}
        > 
          All 
        </button>
        <button 
          className={ fiterType === 'active' ? `${cn('active')}`:''} 
          onClick={()=> pickNotCompleted()}
        >
          Active
        </button>
        <button 
           className={ fiterType === 'completed' ? `${cn('active')}`:''} 
          onClick={()=> pickAllCompleted()}
        >
          Completed
        </button>
      </div>
      <div>
        <button onClick={()=> clearCompleted()}>Clear completed</button>
      </div>
    </div>
  )
}

export default Footer