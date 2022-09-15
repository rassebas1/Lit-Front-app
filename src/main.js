import { LitElement, css, html } from "lit";
import "../style.css";
import "./Components/WrapperElement";
import './Components/navbar/nav-bar'
import "./views/Home";
import initRouter from "./Components/routes/routes";
import { ProductService } from "./services/Products.js";
export class App extends LitElement {
  //#region css
  static styles = css`
    body {
      padding: 0px;
      margin: 0px;
    }
    .header {
      padding: 20px;
      font-size: 25px;
      text-align: center;
      background: white;
    }
    .topnav {
      background-color: #4f4c4c;
      overflow: hidden;
      width: 100vw;
      border-radius: 8px;
    }
    .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }
    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }
    .topnav a.active {
      background-color: #008cba;
      color: white;
    }
  `;
  //#endregion

  static properties = {
      link: { type: Array }
  }

  constructor(){
    super();
    this.productService = new ProductService();
    Promise.all([
      this.productService.fetchAllProducts(),
      this.productService.fetchProductById(2),
      this.productService.fetchCart(),
      this.productService.fetchUser(),
      //this.productService.isAuth(),
    ])
      .catch((e) => console.log("error", e))
      .finally(() => {
        console.log("cart", this.productService.cart);
        console.log("user", this.productService.user);
        console.log("product", this.productService.products);
      });
  }

  connectedCallback(){
      super.connectedCallback()
      const dominio = document.getElementById('outlet');
      const router = new initRouter;
      router.inicializar(dominio)
      this.link = router.rutas;
      console.log(this.link)
  }
  /*disconnectedCallback(){
    window.removeEventListener('load', () =>{
    })
  }*/
  
  transformar(){
    console.log(this.link)
    return this.link.map((item) =>{
      return {
        name: item.name,
        path: item.path,
      }
      })
  };
  render() {
    return html`
      <nav-bar .rutas=${this.transformar()}></nav-bar>
      <output></output>
      <slot></slot>
    `;
  }
}
customElements.define("lit-app", App);
