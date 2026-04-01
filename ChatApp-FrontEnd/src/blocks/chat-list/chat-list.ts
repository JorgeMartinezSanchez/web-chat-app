import Handlebars from "handlebars";
import type { Chat } from "../../interfaces/chat.interface";
import { mockChats, mockMessages, mockUsers } from "../../data-test/mockup";
import type { User } from "../../interfaces/user.interface";
import './chat-list.css';

class ChatList extends HTMLElement{
    private shadow: ShadowRoot;

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    private render(){
        this.shadow.innerHTML = `

            <div class="option-menu">
                <button>+ Create new chat</button>
            </div>
            <div class="chat-list-container">
                ${this.render_list(mockChats, 1, mockUsers)}
            </div>
        `;
    }

    private render_list(chats: Chat[], currentUserId: number, users: User[]) {
        // Preparar los datos para el template
        const chatListData = chats.map(chat => {
            // Encontrar el ID del otro usuario en el chat
            const otherUserId = chat.userIds.find(id => id !== currentUserId);
            const otherUser = users.find(user => user.id === otherUserId);
            
            // Obtener el último mensaje
            const lastMessage = chat.messages[chat.messages.length - 1];
            
            return {
                chatId: chat.id,
                image: otherUser?.image || 'default-avatar.jpg',
                displayName: otherUser?.displayUsername || otherUser?.name || 'Usuario',
                lastMessage: lastMessage?.content || 'Sin mensajes',
                unreadCount: chat.messages.filter(m => !m.seen && m.userId !== currentUserId).length
            };
        });
        
        const compiled = Handlebars.compile(`
            {{#each this}}
            <div class="chat-card" data-chat-id="{{chatId}}">
                <img src="./public/avatar_imgs/{{image}}" alt="{{displayName}}">
                <div class="basic-data">
                    <h6>{{displayName}}</h6>
                    <p>{{lastMessage}}</p>
                    {{#if unreadCount}}
                        <span class="unread-badge">{{unreadCount}}</span>
                    {{/if}}
                </div>
            </div>
            {{/each}}
        `);
        
        // Renderizar pasando los datos
        return compiled(chatListData);
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define("chat-list", ChatList);