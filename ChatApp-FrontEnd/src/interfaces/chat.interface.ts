import type { Message } from "./message.interface"

export interface Chat{
    id: number
    userIds: [number, number],
    messages: Message[]
}