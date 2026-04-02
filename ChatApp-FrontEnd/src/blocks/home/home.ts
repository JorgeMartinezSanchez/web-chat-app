import './home.css';

class HomeMenu extends HTMLElement{

    constructor(){
        super();
    }

    private render(){
        this.innerHTML = `
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