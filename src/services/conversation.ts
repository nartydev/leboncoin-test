import { Conversation } from "@/shared/types/conversation"
import client from "@/shared/utils/client"

export const getAllConversations = async ({userId}: {userId: string}) => {
    try {
      const response = await client.get<Conversation[]>(`conversations/${userId}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
}

export const createConversation = async ({userId, recipientId}: {userId: string; recipientId: string}) => {
    try {
        const response = await client.post<Conversation>(`conversations/${userId}`, {
            recipientId,
        })
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}