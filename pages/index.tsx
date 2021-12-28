import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useSetRecoilState } from "recoil";
import { AddIcon } from "@chakra-ui/icons";
import { TodoInput, TodoItemForm } from "../components/TodoItemForm";
import { datatype } from "faker";
import { SubmitHandler } from "react-hook-form";
import { TodoListFilters } from "../components/TodoListFilters";
import { TodoListStats } from "../components/TodoListStats";
import { ToggleDarkMode } from "../components/ToggleDarkMode";
import { todoListState } from "../atoms/todoListState";
import { TodoList } from "../components/TodoList";

const Home: NextPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const setTodoList = useSetRecoilState(todoListState);

  const onSubmit: SubmitHandler<TodoInput> = ({ title, text, relatedList }) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: datatype.uuid(),
        title,
        text,
        relatedList,
        isComplete: false,
      },
    ]);
  };

  return (
    <div>
      <Head>
        <title>twenty two</title>
      </Head>
      <Flex flexDir="column" minH="100vh" position="relative">
        <Container
          maxW={"container.xl"}
          backdropFilter="blur(6px)"
          position={"sticky"}
          top="0"
          zIndex={"sticky"}
        >
          <HStack justifyContent={"space-between"} p="2">
            <TodoListStats />
            <TodoListFilters />
            <Button leftIcon={<AddIcon />} onClick={onOpen}>
              Add
            </Button>
            <ToggleDarkMode />
          </HStack>
        </Container>
        <Container maxW={"container.xl"}>
          <Box flex={1}>
            <TodoList />
          </Box>
        </Container>
      </Flex>
      <TodoItemForm
        formType="Add"
        onValid={onSubmit}
        onClose={onClose}
        isOpen={isOpen}
      />
    </div>
  );
};

export default Home;
