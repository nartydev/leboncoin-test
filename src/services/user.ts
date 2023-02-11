import { User } from "@/shared/types/user"
import client from "@/shared/utils/client"

export const getAllUsers = async () => {
    try {
      const response = await client.get<User[]>(`users`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
}