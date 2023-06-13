import { TTasks } from "types";

export const generateNewId = (state:TTasks): number => {
   let maxCode = 0;
   if (state.length){
    state.forEach(element => {
      if (element.id > maxCode) {
        maxCode = element.id;
      }
    })
  }
   return maxCode + 1;
 }