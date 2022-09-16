import { LitElement, html, css } from "lit";

export class NavBar extends LitElement {
  static properties = {
    rutas: { type: Array, attribute: true },
  };
  static styles = [
    css`
      nav {
        margin: 5% auto;
        background-color: #594cec;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        height: 5vh;
        border-radius: 30px;
        box-shadow: 4px 10px 40px #df9292, -4px -10px 30px #dcdcdd;
      }
      a {
        font-family: Georgia, "Times New Roman", Times, serif;
        text-decoration: none;
        color: white;
        font-weight: bold;
      }
      a:hover {
        color: #9f0909;
        text-shadow: 2px 2px 4px #ffff;
      }
    `,
  ];

  constructor() {
    super();
    this.rutas = {
      name: "",
      path: "",
    };

    this.addEventListener("login", (e) => {
      console.log(e);
    });
  }

  render() {
    console.log(this.rutas);
    return html`
      <nav>
        ${this.rutas.map(
          (ruta) => html` <a href=${ruta.path}>${ruta.name}</a> `
        )}
      </nav>
    `;
  }
}
customElements.define("nav-bar", NavBar);
