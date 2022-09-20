import { LitElement, html, css } from "lit";

export class LoginElement extends LitElement {
  static styles = [
    css`
      .container{
        padding: 5px;
        border: 1px solid red;
        width: 25vw;
        height: 45vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
      }
      .container h1{
        text-align: center;
        color: blue;
        text-shadow: 2px 2px 4px grey;
        font-weight: bold;
        font-size: 2.7rem;
      }
      .container input{
        width: 90%;
        border-radius: 5px;
        padding: 5px;
        margin: 5px auto;
      }
      .container button{
        border-radius: 5px;
        margin: 20px auto;
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
