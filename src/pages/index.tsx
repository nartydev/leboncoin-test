import { FC, useState } from "react";
import { Layout } from "@/components";
import { ConversationList } from "@/features/ConversationList/ConversationList";
import { MessageList } from "@/features/MessageList/MessageList";
import { useWindowSize } from "@/shared/hooks/useWindowSize";

const Chats: FC = () => {
  const { width } = useWindowSize();
  // On mobile we want to display only conversation list
  const [selectedConv, setSelectedConv] = useState<null | number>(
    width > 600 ? 0 : null
  );
  return (
    <Layout>
      <ConversationList />
      {!Number.isNaN(selectedConv) && <MessageList />}
    </Layout>
  );
};

export default Chats;
