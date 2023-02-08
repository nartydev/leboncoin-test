import { FC } from "react";
import { Head } from "../Head";
import * as Styled from "./internal/Layout.styles";

interface IProps {
  children: JSX.Element[] | JSX.Element;
  title?: string;
  descr?: string;
}
const DEFAULT_TITLE = "Frontend Technical test - Leboncoin";
const DEFAULT_DESCR =
  "Frontend exercise for developpers who want to join us on leboncoin.fr";

export const Layout: FC<IProps> = ({ children, title, descr }) => {
  const year = new Date().getFullYear();
  return (
    <Styled.Container>
      <Head title={title || DEFAULT_TITLE} descr={descr || DEFAULT_DESCR} />
      <main>{children}</main>
      <footer>&copy; leboncoin - {year}</footer>
    </Styled.Container>
  );
};
