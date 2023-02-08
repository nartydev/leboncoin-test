import { UserContext } from "@/shared/store/user";
import { FC, useContext } from "react";
import * as Styled from "./ConversationList.styles";

interface IProps {}

export const ConversationList: FC<IProps> = () => {
  const userId = useContext(UserContext);
  console.log("userdid", userId);
  return <Styled.ConversationList>conversations</Styled.ConversationList>;
};
