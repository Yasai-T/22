import { selector } from "recoil";
import { todoListFilterState } from "../atoms/todoFilter";
import { todoListState } from "../atoms/todoListState";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: async ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 500);
    });

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
