import { assoc } from "../ts/assoc";

export function generateKey () {
  return Math.random().toString(16).substring(3, 9);
}

export const assignId = assoc('id', generateKey());

export const generateId = <O extends object>(obj: O) => assoc('id', generateKey())(obj); 

