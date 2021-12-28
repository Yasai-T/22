import { EditIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { VFC } from "react";
import { SubmitHandler } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Todo, todoListState } from "../atoms/todoListState";
import { TodoInput, TodoItemForm } from "./TodoItemForm";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((t) => t === todo);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      isComplete: !todo.isComplete,
    });
    setTodoList(newList);
  };

  const editItem: SubmitHandler<TodoInput> = (edited) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      title: edited.title,
      text: edited.text,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <Box borderWidth="thin" borderRadius="lg" p="6">
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
          onClick={onOpen}
        />
      </HStack>
      <Heading as="h4" size="lg" py="2">
        {todo.title}
      </Heading>
      {todo.text && <Box>{todo.text}</Box>}
      <TodoItemForm
        formType="Edit"
        isOpen={isOpen}
        onClose={onClose}
        onValid={editItem}
        initialValue={todo}
        footerContent={
          <Button colorScheme={"red"} onClick={deleteItem}>
            Delete
          </Button>
        }
      />
    </Box>
  );
};
