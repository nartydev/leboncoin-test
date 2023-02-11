import {FC} from 'react'
import {Layout} from '@/components'
import {ConversationList} from '@/features/ConversationList/ConversationList'
import {MessageList} from '@/features/MessageList/MessageList'
import {useWindowSize} from '@/shared/hooks/useWindowSize'

const Messages: FC = () => {
  const {width} = useWindowSize()
  return (
    <Layout>
      {width > 600 && (
        <aside>
          <ConversationList />
        </aside>
      )}
      <MessageList />
    </Layout>
  )
}

export default Messages
