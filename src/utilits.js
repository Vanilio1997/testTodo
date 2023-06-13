export const generateNewId = (state) => {
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