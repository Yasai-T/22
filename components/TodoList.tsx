import { Skeleton, VStack } from "@chakra-ui/react";
import { VFC } from "react";
import { useRecoilValueLoadable } from "recoil";
import { filteredTodoListState } from "../selectors/filteredTodoListState";
import { TodoCard } from "./TodoCard";

export const TodoList: VFC = () => {
  const todoList = useRecoilValueLoadable(filteredTodoListState);

  switch (todoList.state) {
    case "hasValue":
      return (
        <VStack spacing={2} align={"stretch"}>
          {todoList.contents.map((todo) => (
            <TodoCard todo={todo} key={todo.id} />
          ))}
        </VStack>
      );
    case "loading":
      return <TodoListSkeleton />;
    case "hasError":
      throw todoList.contents;
  }
};

const TodoListSkeleton: VFC = () => {
  return (
    <VStack spacing={2} align={"stretch"}>
      <Skeleton borderRadius="lg">
        <TodoCard
          todo={{ id: "", title: "", isComplete: true, relatedList: [] }}
        />
      </Skeleton>
      <Skeleton borderRadius="lg">
        <TodoCard
          todo={{ id: "", title: "", isComplete: true, relatedList: [] }}
        />
      </Skeleton>
      <Skeleton borderRadius="lg">
        <TodoCard
          todo={{ id: "", title: "", isComplete: true, relatedList: [] }}
        />
      </Skeleton>
    </VStack>
  );
};
