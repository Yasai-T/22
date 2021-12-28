import {
  Box,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { VFC } from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selectors/todoListStatsState";
import { bgGradient } from "./colors";

export const TodoListStats: VFC = () => {
  const { totalCompletedNum, totalNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  return (
    <Box>
      <Stat bgGradient={bgGradient} bgClip={"text"}>
        <StatLabel>Completed</StatLabel>
        <StatNumber>
          {totalCompletedNum}/{totalNum}
        </StatNumber>
        <StatHelpText bgGradient={bgGradient} bgClip={"text"}>
          {percentCompleted}%
        </StatHelpText>
      </Stat>
    </Box>
  );
};
