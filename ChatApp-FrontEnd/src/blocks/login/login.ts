import './login.css'
import { mockUsers } from '../../data-test/mockup';
import { handleLocation } from "../../routes";

class LoginMenu extends HTMLElement{
    constructor(){
        super();
    }

    private render(){
        this.innerHTML = `
            <div class="auth-container">
                <form id="login-form" class="login-form">
                    <h1>Hello Again!</h1>

                    <div class="login-inputs">
                        <div class="log-input">
                            <label for="username">Introduce your username, phone or gmail</label>
                            <input type="text" id="username" name="username">
                        </div>
                        <div class="log-input">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password">
                        </div>
                    </div>

                    <button id="login-button">Log In</button>
                    <button id="create-acc-button">Create Account</button>
                </form>
            </div>
            `;
    }

    public submit(){
        const userdata = (document.getElementById("username") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        const targetUser = mockUsers.find(u => ((u.displayUsername = userdata) || 
                                                    (u.email = userdata) || 
                                                    (u.phone = userdata)) &&
                                                    (u.password = password));

        if(targetUser){
            sessionStorage.setItem("currentUser", JSON.stringify(targetUser)); // saves user in local storages
            window.history.pushState({}, "", "/");
            handleLocation();
        } else {
            const existing = document.getElementById("login-error");
            if (!existing) {
                const error = document.createElement("p");
                error.id = "login-error";
                error.textContent = "Usuario o contraseña incorrectos.";
                error.style.color = "red";
                document.getElementById("login-form")?.appendChild(error);
            }
        }
    }

    connectedCallback(){
        this.render();

        document.getElementById("login-button")!.addEventListener("click", (e) => {
            e.preventDefault();
            this.submit();
        });
    }
}

customElements.define("login-menu", LoginMenu);

export default `<login-menu></login-menu>`