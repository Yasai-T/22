import { Box, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { TodoCard } from "../components/TodoCard";
import { todoListState } from "../recoil/todo";

const Home: NextPage = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <Head>
        <title>twenty two</title>
      </Head>
      <Box p="10">
        <VStack>
          {todoList.map((todo) => (
            <TodoCard todo={todo} key={todo.id} />
          ))}
        </VStack>
      </Box>
    </div>
  );
};

export default Home;
