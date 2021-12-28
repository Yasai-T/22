import { datatype, lorem } from "faker";
import { atom, selector } from "recoil";

export type Todo = {
  id: string;
  title: string;
  text?: string;
  isComplete: boolean;
};

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [
    {
      id: datatype.uuid(),
      title: lorem.word(),
      text: lorem.paragraph(),
      isComplete: false,
    },
    {
      id: datatype.uuid(),
      title: lorem.word(),
      text: lorem.paragraph(),
      isComplete: false,
    },
    {
      id: datatype.uuid(),
      title: lorem.word(),
      text: lorem.paragraph(),
      isComplete: false,
    },
  ],
});

export type TodoFilter = "Show All" | "Show Completed" | "Show Uncompleted";

export const todoListFilterState = atom<TodoFilter>({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

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

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : Math.round((totalCompletedNum / totalNum) * 100);

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
