import './style.css'
import './blocks/home/home'
import './blocks/chat-list/chat-list'

export type RouteModule = {
    default?: string;
    render?: () => string;
};


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <home-menu></home-menu>
`

