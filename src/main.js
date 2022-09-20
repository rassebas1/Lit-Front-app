import { LitElement, css, html } from "lit";
import "../style.css";
import "./Components/WrapperElement";
import './Components/navbar/nav-bar'
import "./views/Home";
import initRouter from "./routes/routes";


export class App extends LitElement {
  //#region css
  static styles = css`
    body {
      padding: 0px;
      margin: 0px;
    }
    .content-app{
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

    }
    .content{
      width: 100vw;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
  `;
  //#endregion

  static properties = {
    link: { type: Array },
    loginSuccess: { type: Boolean },
    router: { type: Object },
  };

  constructor(){
    super();
    this.loginSuccess = false;
    this.addEventListener('login', (e)=> {
      this.loginSuccess = e.detail;
      console.log(e)
    })
  }

  connectedCallback() {
    super.connectedCallback();
    const dominio = document.getElementById("outlet");
    this.router = new initRouter();
    this.router.inicializar(dominio);
    this.link = this.router.rutas;
    console.log(this.link);
    console.log("this.router.router", this.router.router);
  }

  transformar(){
    console.log(this.link)
    return this.link.map((item) =>{
      return {
        name: item.name,
        path: item.path,
      };
    });
  }

  loginAccess(logged) {
    if (logged) {
      this.router.router.urlForName("home");
    } else {
      return ;
    }
  }

  render() {
    return html`
    <div class= 'content-app'>
      ${this.loginSuccess
        ? html`<nav-bar .rutas=${this.transformar()}></nav-bar>`
        : ''}
      <slot class='content'></slot>
    </div>
    `;
  }
}
customElements.define("lit-app", App);
