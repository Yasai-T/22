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
  Textarea,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import { VFC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Todo } from "../recoil/todo";

export type TodoInput = Pick<Todo, "text" | "title">;

type Props = Pick<UseDisclosureReturn, "isOpen" | "onClose"> & {
  formType: "Add" | "Edit";
  onValid: SubmitHandler<TodoInput>;
};

export const TodoItemForm: VFC<Props> = ({
  isOpen,
  formType,
  onClose,
  onValid,
}) => {
  const { control, handleSubmit, reset } = useForm<TodoInput>();

  const onSubmit: SubmitHandler<TodoInput> = (values) => {
    onValid(values);
    reset({ title: "", text: "" });
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{formType} Todo</DrawerHeader>
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
                  render={({ field }) => <Textarea {...field} />}
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
