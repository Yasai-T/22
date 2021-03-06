import { datatype, lorem } from "faker";
import { atom } from "recoil";

export type Todo = {
  id: string;
  title: string;
  text?: string;
  isComplete: boolean;
  relatedList: Pick<Todo, "id">[];
};

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [
    {
      id: datatype.uuid(),
      title: lorem.word(),
      text: lorem.paragraph(),
      isComplete: false,
      relatedList: [],
    },
    {
      id: datatype.uuid(),
      title: lorem.word(),
      text: lorem.paragraph(),
      isComplete: false,
      relatedList: [],
    },
    {
      id: datatype.uuid(),
      title: lorem.word(),
      text: lorem.paragraph(),
      isComplete: false,
      relatedList: [],
    },
  ],
});
