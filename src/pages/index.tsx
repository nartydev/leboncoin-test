import {FC} from 'react'
import {Layout} from '@/components'
import {ConversationList} from '@/features/ConversationList/ConversationList'

const Conversations: FC = () => {
  return (
    <Layout>
      <ConversationList />
    </Layout>
  )
}

export default Conversations
