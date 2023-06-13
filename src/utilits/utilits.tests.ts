import { generateNewId } from "./utilits";
import { tasks } from "data";

describe('utilitsTest' , () => {
   it('generate new unique id', ()=>{
      expect(generateNewId(tasks)).toBe(4);
      expect(generateNewId([])).toBe(1);
   })
})