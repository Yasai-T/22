import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { VFC } from "react";

export const ToggleDarkMode: VFC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      isRound
      aria-label="toggle dark mode"
      size="lg"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
};
