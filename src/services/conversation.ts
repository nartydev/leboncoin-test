import { Conversation } from "@/shared/types/conversation"
import { User } from "@/shared/types/user"
import client from "@/shared/utils/client"

export const getAllConversations = async ({userId}: {userId: string}) => {
    try {
      const response = await client.get<Conversation[]>(`conversations/${userId}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
}

export const createConversation = async ({conversations, users, userId, recipientId}: {conversations: Conversation[], users: User[], userId: string, recipientId: string}) => {
    try {
        const response = await client.post<Conversation>(`conversations/${userId}`, {
            recipientId: +recipientId,
            senderId: +userId,
            recipientNickname: users.find((user) => user.id === +recipientId).nickname,
            senderNickname: users.find((user) => user.id === +userId).nickname,
            lastMessageTimestamp: Date.now()
        })
        return [...conversations, response.data]
    } catch (error) {
        throw new Error(error)
    }
}