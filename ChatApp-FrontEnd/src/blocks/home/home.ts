class Home extends HTMLElement{
    shadow: ShadowRoot;

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    render(){
        this.shadow.innerHTML = `
            <div class="home-container">
                <>
            </div>
        `;
    }
}