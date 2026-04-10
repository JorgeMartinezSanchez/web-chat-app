import './home.css';
import './../chat-list/chat-list'

class HomeMenu extends HTMLElement{

    constructor(){
        super();
    }

    private render(): void{
        this.innerHTML = `
            <div class="home-container">
                <chat-list></chat-list>
                <a href="/login" role="button" class="btn">Log out</a>
            </div>
        `;
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define("home-menu", HomeMenu);

export default `<home-menu></home-menu>`