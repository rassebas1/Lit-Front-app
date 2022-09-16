import { LitElement, html, css } from "lit";

export class LoginElement extends LitElement {
  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
      acceso: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.email = "";
    this.password = "";
    this.acceso = false;
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  handleLogin() {
    this.acceso = true;
    this.dispatchEvent(
      new CustomEvent("login", {
        detail: this.acceso,
        bubbles: true,
        composed: true,
      })
    );
  }
  
  ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
      return (true)
    }
    alert("You have entered an invalid email address!")
      return (false)
  }

  login() {
    if (!!this.email && !!this.password && this.ValidateEmail()) {
      this.handleLogin();
      console.log("acceso concedido", this.acceso);
    }else {
      this.acceso = false;
      this.dispatchEvent(
        new CustomEvent("login", {
          detail: this.acceso,
          bubbles: true,
          composed: true,
        })
      );
      console.log("acceso denegado", this.acceso);
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>Login</h1>

        <label for="user-email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          id="user-email"
          @change=${(e) => {
            this.email = e.target.value;
          }}
          }
        />

        <label for="user-pass">Password:</label>
        <input
          type="password"
          placeholder="password"
          id="user-pass"
          @change=${(e) => {
            this.password = e.target.value;
          }}
        />

        <button @click="${this.login}">Submit</button>
      </div>
    `;
  }
}

customElements.define("login-element", LoginElement);
