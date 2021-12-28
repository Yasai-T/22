import { atom } from "recoil";

export type TodoFilter = "Show All" | "Show Completed" | "Show Uncompleted";

export const todoListFilterState = atom<TodoFilter>({
  key: "todoListFilterState",
  default: "Show All",
});
