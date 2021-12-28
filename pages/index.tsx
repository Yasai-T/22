import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { TodoCard } from "../components/TodoCard";
import { todoListState } from "../recoil/todo";
import { AddIcon } from "@chakra-ui/icons";
import { TodoItemCreator } from "../components/TodoItemCreator";

const Home: NextPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <Head>
        <title>twenty two</title>
      </Head>
      <Flex flexDir="column" minH="100vh">
        <Container maxW={"container.xl"}>
          <HStack justifyContent={"end"}>
            <Button leftIcon={<AddIcon />} onClick={onOpen}>
              Add
            </Button>
          </HStack>
          <Box flex={1}>
            <VStack spacing={2} align={"stretch"}>
              {todoList.map((todo) => (
                <TodoCard todo={todo} key={todo.id} />
              ))}
            </VStack>
          </Box>
        </Container>
      </Flex>
      <TodoItemCreator onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default Home;
