import type { Chat } from "./chat.interface"

export interface User{
    id: number,
    image: string,
    displayUsername: string
    name: string,
    email: string,
    phone: string,
    password: string,
    chats: Chat[]
}