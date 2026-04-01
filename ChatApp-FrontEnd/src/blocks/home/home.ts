import './home.css';

class HomeMenu extends HTMLElement{
    private shadow: ShadowRoot;

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    private render(){
        this.shadow.innerHTML = `
            <div class="home-container">
                <chat-list></chat-list>
            </div>
        `;
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define("home-menu", HomeMenu);