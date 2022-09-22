import { LitElement, html, css } from "lit";

export class LoginElement extends LitElement {
  static styles = [
    css`
      .container {
        font-family: Georgia, 'Times New Roman', Times, serif;
        border-radius: 20px;
        background-color: rgb(190 248 255);
        padding: 15px;
        width: 25vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
      }
      .container h1 {
        text-align: center;
        color: #ea1717;
        text-shadow: #474646 2px 2px 4px;
        font-weight: bold;
        font-size: 2.7rem;
      }
      .container input {
        width: 96%;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin: 5px auto;
      }
      input:focus-visible {
        outline: none;
      }
      .container button {
        border-radius: 5px;
        margin: 6vh auto;
        width: 50%;
        border: none;
        background-color: #93e6f0;
        padding: 7px;
        color: #585858;
        cursor: pointer;
        font-weight: bold;
      }
      .container button:hover {
        background-color: #383839;
        color: #ffff;
      }
    `,
  ];
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
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      return true;
    }

    alert("You have entered an invalid email address!");

    return false;
  }

  login() {
    if (!!this.email && !!this.password && this.ValidateEmail()) {
      this.handleLogin();

      console.log("acceso concedido", this.acceso);
    } else {
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
          placeholder="Password"
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
