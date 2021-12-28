import { EditIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Checkbox,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState, VFC } from "react";
import { useRecoilState } from "recoil";
import { Todo, todoListState } from "../recoil/todo";

type Props = {
  todo: Todo;
};

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export const TodoCard: VFC<Props> = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((t) => t === todo);

  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => setIsEdit((prev) => !prev);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      isComplete: !todo.isComplete,
    });
    setTodoList(newList);
  };

  return (
    <Box maxW="sm" borderWidth="thin" borderRadius="lg" p="6">
      <HStack justifyContent="space-between">
        <Checkbox isChecked={todo.isComplete} onChange={toggleItemCompletion}>
          {todo.isComplete ? (
            <Badge colorScheme={"green"} variant={"outline"}>
              DONE
            </Badge>
          ) : (
            <Badge colorScheme={"red"} variant={"outline"}>
              TODO
            </Badge>
          )}
        </Checkbox>
        <IconButton
          isRound
          aria-label="edit todo item"
          icon={<EditIcon />}
          onClick={toggleIsEdit}
        />
      </HStack>
      <Heading as="h4" size="lg" py="2">
        {todo.title}
      </Heading>
      {todo.text && <Box>{todo.text}</Box>}
    </Box>
  );
};
