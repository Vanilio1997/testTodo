import React,{useState, useRef} from 'react';
import './style.css';
import {cn as bem} from '@bem-react/classname';


interface IHeaderProps {
   addTask: (text:string) => void
   changeTaskListVisible: () => void
   isVisible: boolean
}

const Header = ({addTask,changeTaskListVisible,isVisible}:IHeaderProps) => {
   const cn = bem('Header');
   const [inputValue, setInputValue] = useState('');
   const ref = useRef<HTMLTextAreaElement | null>(null);  
   const handleKeyDown = (event:React.KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Enter' && inputValue.trim().length) {
         event.preventDefault()
         addTask(inputValue);
         setInputValue('');
      }
   }
   return (
      <div className={cn()}>
         <div className={cn('arrowContainer')}>
            <div className={isVisible ? cn('arrowDown') :  cn('arrowUp')} onClick={() => changeTaskListVisible()}></div>
         </div>
         <div className={cn('inputContainer')}>
            <textarea
               className={cn('input')}
               placeholder='What needs to be done?'
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyDown={handleKeyDown}
               rows={1}
               ref={ref}
            />
         </div>
      </div>
   )
}

export default Header
