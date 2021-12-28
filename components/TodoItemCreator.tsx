import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Stack,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import { datatype } from "faker";
import { forwardRef, useRef, VFC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Todo, todoListState } from "../recoil/todo";

type InputValues = Pick<Todo, "text" | "title">;

type Props = Pick<UseDisclosureReturn, "isOpen" | "onClose">;

export const TodoItemCreator: VFC<Props> = ({ isOpen, onClose }) => {
  const { control, handleSubmit, reset } = useForm<InputValues>();
  const setTodoList = useSetRecoilState(todoListState);

  const onSubmit: SubmitHandler<InputValues> = ({ title, text }) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: datatype.uuid(),
        title,
        text,
        isComplete: false,
      },
    ]);
    reset({ title: "", text: "" });
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Add Todo</DrawerHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DrawerBody>
            <Stack spacing="2">
              <Box>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Controller
                  control={control}
                  name="title"
                  render={({ field }) => <Input type="text" {...field} />}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="text">Text</FormLabel>
                <Controller
                  control={control}
                  name="text"
                  render={({ field }) => <Input type="text" {...field} />}
                />
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button type="submit">Add</Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};
