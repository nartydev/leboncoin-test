import {FC} from 'react'
import * as Styled from './ConversationList.styles'
import {ConversationCard} from '@/components'
import {useRouter} from 'next/router'
import useSWR from 'swr'
import {getAllConversations} from '@/services/conversation'
import {getLoggedUserId} from '@/shared/utils/getLoggedUserId'

export const ConversationList: FC = () => {
  const userId = getLoggedUserId()
  const router = useRouter()
  const {id} = router.query
  const {data, isLoading} = useSWR('/conversations', () => getAllConversations({userId: `${userId || getLoggedUserId()}`}))

  if (isLoading) return <div data-testid="loading">Chargement en cours..</div>

  return (
    <Styled.ConversationList>
      <h1>Conversations</h1>
      <div className="container-conv">
        {data?.map(conv => (
          <ConversationCard key={conv.id} conversation={conv} isSelected={+id === conv.id ? true : false} />
        ))}
      </div>
    </Styled.ConversationList>
  )
}
