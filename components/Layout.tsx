import { Container } from "@nextui-org/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};
