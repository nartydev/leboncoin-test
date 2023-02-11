import {createMessage} from '@/services/message'
import {COLORS} from '@/shared/constants/colors'
import {getLoggedUserId} from '@/shared/utils/getLoggedUserId'
import {FC, useState} from 'react'
import {Send} from 'react-feather'
import {mutate} from 'swr'

interface IProps {
  idConversation: string
}

export const InputMessageList: FC<IProps> = ({idConversation}) => {
  const userId = getLoggedUserId()
  const [valueInput, setValueInput] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    if (valueInput.length === 0) return
    const newMessage = {
      body: valueInput,
      conversationId: +idConversation,
      authorId: userId,
      timestamp: Date.now(),
    }
    try {
      await createMessage({conversationId: idConversation.toString(), message: newMessage})
      await mutate(`/messages/${idConversation}`)
      setValueInput('')
    } catch (err) {
      throw new Error(err)
    }
  }

  return (
    <form>
      <div className="message-input">
        <input
          data-testid="input-text"
          onChange={e => setValueInput(e.target.value)}
          value={valueInput}
          placeholder="Ecrivez quelques choses"
        />
        <button data-testid="sender-btn" type="submit" onClick={onSubmit}>
          <Send color={COLORS.white} />
        </button>
      </div>
    </form>
  )
}
