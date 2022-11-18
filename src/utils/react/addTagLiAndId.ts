import { IItem } from "../../shared/GenericList";
import { assoc } from "../ts/assoc";
import { pipe } from "../ts/pipe";
import { generateId } from "./generateKey";

export const addTagLi = <O extends object>(obj: O) => assoc('As', 'li' as const)(obj);
export const addTagLiAndId = pipe<IItem>(generateId, addTagLi);
