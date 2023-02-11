import {FC} from 'react'
import * as Styled from './ModalContact.styles'
import useSWR, {mutate} from 'swr'
import {getLoggedUserId} from '@/shared/utils/getLoggedUserId'
import {getAllUsers} from '@/services/user'
import {UserCard} from '@/components/UserCard'
import {createConversation, getAllConversations} from '@/services/conversation'
import {X} from 'react-feather'

interface IProps {
  isVisible: boolean
  setVisible: (visible: boolean) => void
}

export const ModalContact: FC<IProps> = ({isVisible, setVisible}) => {
  const contacts = useSWR('/users', getAllUsers)
  const conversations = useSWR('/conversations', getAllConversations)
  const userId = getLoggedUserId()
  if (contacts.isLoading) {
    return <div data-testid="loading">Chargement en cours...</div>
  }

  return (
    <Styled.ModalContact isVisible={isVisible}>
      <div className="modal">
        <h3>Créer une nouvelle conversation</h3>
        <button className="close" type="button">
          <X color="#fff" onClick={() => setVisible(false)} size={20} />
        </button>
        <div className="list-contacts">
          {contacts.data
            ?.filter(user => user.id !== userId)
            .map(user => (
              <button
                key={user.id}
                onClick={() => {
                  mutate('/conversations', () =>
                    createConversation({
                      conversations: conversations.data,
                      users: contacts.data,
                      userId: userId.toString(),
                      recipientId: user.id.toString(),
                    })
                  )
                  setVisible(false)
                }}
                type="button">
                <UserCard nickname={user.nickname} />
              </button>
            ))}
          {contacts.data?.length === 0 && <p>Vous n&apos;avez pas encore de contact</p>}
        </div>
      </div>
      <button className="overlay" onClick={() => setVisible(false)} />
    </Styled.ModalContact>
  )
}
