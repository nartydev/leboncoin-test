import { Message, MessageWithoutId } from "@/shared/types/message"
import client from "@/shared/utils/client"


export const getAllMessages = async ({conversationId}: {conversationId: string}) => {
    try {
      const response = await client.get<Message[]>(`messages/${conversationId}`)
      return response.data.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
    } catch (error) {
      throw new Error(error)
    }
  }
  
export const createMessage = async ({conversationId, message}: {conversationId: string; message: MessageWithoutId}) => {
    try {
        const response = await client.post<Message>(`messages/${conversationId}`, message)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}
