import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, VFC } from "react";
import { useRecoilState } from "recoil";
import { TodoFilter, todoListFilterState } from "../recoil/todo";

export const TodoListFilters: VFC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as TodoFilter);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="filter">Filter</FormLabel>
        <Select id="filter" value={filter} onChange={updateFilter}>
          <option value={"Show All"}>All</option>
          <option value={"Show Completed"}>Completed</option>
          <option value={"Show Uncompleted"}>Uncompleted</option>
        </Select>
      </FormControl>
    </Box>
  );
};
