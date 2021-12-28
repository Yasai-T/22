import { Box, Button, Select, VStack } from "@chakra-ui/react";
import { VFC } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { otherTodoListState } from "../selectors/otherTodoListState";
import { TodoInput } from "./TodoItemForm";

type Props = {
  control: Control<TodoInput>;
  todoId?: string;
};

export const RelatedListForm: VFC<Props> = ({ control, todoId }) => {
  const otherTodoList = useRecoilValue(otherTodoListState(todoId));

  const { fields, append } = useFieldArray({
    control,
    name: "relatedList",
  });

  return (
    <VStack spacing={2} align={"stretch"}>
      {fields.map((field, index) => (
        <Box key={field.id}>
          <Controller
            control={control}
            name={`relatedList.${index}.id`}
            defaultValue={""}
            render={({ field: idField }) => (
              <Select {...idField}>
                {otherTodoList.map((otl) => (
                  <option value={otl.id} key={otl.id}>
                    {otl.title}
                  </option>
                ))}
              </Select>
            )}
          />
        </Box>
      ))}
      <Box>
        <Button onClick={() => append({ id: "" })}>Add Related Todo</Button>
      </Box>
    </VStack>
  );
};
