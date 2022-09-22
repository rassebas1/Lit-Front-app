import { LitElement, html, css, render } from "lit";
import "./card-item";
import { ProductService } from "../../services/Products";
import '../Indicador/carga'

export class ProductsElement extends LitElement {
  static styles = css`
    .products-container {
      width: 91vw;
      height: 70vh;
      display: grid;
      grid-auto-rows: 27rem;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
      
    }
  `;
  static get properties() {
    return {
      products: { type: Array },
      productService: { type: Object },
    };
  }
  constructor() {
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
        this.products = this.productService.products;
      });
  }
  render() {
    if(this.products !== undefined) {
      return  html`<div class="products-container">${this._renderCards()}</div>`;
    }else {
      return html`<carga-indicador></carga-indicador>`
    }
  }

  _renderCards() {
    console.log("aja", this.products);
    return this.products.map((product) => {
      return html`<card-element .cardItem="${product}"></card-element>`;
    });
  }
}
customElements.define("products-element", ProductsElement);
