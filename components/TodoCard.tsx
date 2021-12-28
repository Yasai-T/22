import { Badge, Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { Todo } from "../recoil/todo";

type Props = {
  todo: Todo;
};

export const TodoCard: VFC<Props> = ({ todo }) => {
  return (
    <Box maxW="sm" borderWidth="thin" borderRadius="lg" p="6">
      <HStack>
        {todo.isComplete ? (
          <Badge colorScheme={"green"} variant={"outline"}>
            DONE
          </Badge>
        ) : (
          <Badge colorScheme={"red"} variant={"outline"}>
            TODO
          </Badge>
        )}
      </HStack>
      <Heading as="h4" size="lg" py="2">
        {todo.title}
      </Heading>
      {todo.text && <Box>{todo.text}</Box>}
    </Box>
  );
};
