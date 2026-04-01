import type { Message } from "./../interfaces/message.interface";
import type { Chat } from "./../interfaces/chat.interface";
import type { User } from "./../interfaces/user.interface";

export const mockMessages: Message[] = [
  {
    id: 1,
    chatId: 1,
    userId: 1,
    content: "¡Hola! ¿Cómo estás?",
    seen: true
  },
  {
    id: 2,
    chatId: 1,
    userId: 2,
    content: "Hola, bien ¿y tú?",
    seen: true
  },
  {
    id: 3,
    chatId: 1,
    userId: 1,
    content: "Todo bien, ¿qué planes tienes para hoy?",
    seen: false
  },
  {
    id: 4,
    chatId: 2,
    userId: 1,
    content: "¿Viste el partido de ayer?",
    seen: true
  },
  {
    id: 5,
    chatId: 2,
    userId: 3,
    content: "Sí, increíble final",
    seen: false
  },
  {
    id: 6,
    chatId: 3,
    userId: 2,
    content: "¿Nos vemos mañana?",
    seen: true
  },
  {
    id: 7,
    chatId: 3,
    userId: 4,
    content: "Claro, ¿a qué hora?",
    seen: true
  },
  {
    id: 8,
    chatId: 3,
    userId: 2,
    content: "A las 3pm",
    seen: false
  }
];

export const mockChats: Chat[] = [
  {
    id: 1,
    userIds: [1, 2],
    messages: mockMessages.filter(m => m.chatId === 1)
  },
  {
    id: 2,
    userIds: [1, 3],
    messages: mockMessages.filter(m => m.chatId === 2)
  },
  {
    id: 3,
    userIds: [2, 4],
    messages: mockMessages.filter(m => m.chatId === 3)
  },
  {
    id: 4,
    userIds: [3, 4],
    messages: []
  },
  {
    id: 5,
    userIds: [1, 5],
    messages: []
  }
];

export const mockUsers: User[] = [
  {
    id: 1,
    image: "avatar1.jpg",
    displayUsername: "juan_perez",
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "+1234567890",
    password: "password123",
    chats: mockChats.filter(chat => chat.userIds.includes(1))
  },
  {
    id: 2,
    image: "avatar2.jpg",
    displayUsername: "maria_garcia",
    name: "María García",
    email: "maria@example.com",
    phone: "+1234567891",
    password: "password456",
    chats: mockChats.filter(chat => chat.userIds.includes(2))
  },
  {
    id: 3,
    image: "avatar3.jpg",
    displayUsername: "carlos_lopez",
    name: "Carlos López",
    email: "carlos@example.com",
    phone: "+1234567892",
    password: "password789",
    chats: mockChats.filter(chat => chat.userIds.includes(3))
  },
  {
    id: 4,
    image: "avatar4.jpg",
    displayUsername: "ana_martinez",
    name: "Ana Martínez",
    email: "ana@example.com",
    phone: "+1234567893",
    password: "password101",
    chats: mockChats.filter(chat => chat.userIds.includes(4))
  },
  {
    id: 5,
    image: "avatar5.jpg",
    displayUsername: "luis_rodriguez",
    name: "Luis Rodríguez",
    email: "luis@example.com",
    phone: "+1234567894",
    password: "password202",
    chats: mockChats.filter(chat => chat.userIds.includes(5))
  }
];