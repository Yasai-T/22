import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";

export const otherTodoListState = (id?: string) =>
  selector({
    key: "otherTodoListState",
    get: ({ get }) => {
      const list = get(todoListState);
      if (!id) {
        return list;
      }
      return list.filter((item) => item.id !== id);
    },
  });
