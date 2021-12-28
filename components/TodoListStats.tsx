import { Box, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { VFC } from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/todo";

export const TodoListStats: VFC = () => {
  const { totalCompletedNum, totalNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  return (
    <Box>
      <Stat>
        <StatLabel>Completed</StatLabel>
        <StatNumber>
          {totalCompletedNum}/{totalNum}
        </StatNumber>
        <StatHelpText>{percentCompleted}%</StatHelpText>
      </Stat>
    </Box>
  );
};
