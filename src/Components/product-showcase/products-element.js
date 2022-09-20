import { LitElement, html, css, render } from "lit";
import "./card-item";
import { ProductService } from "../../services/Products";

export class ProductsElement extends LitElement {
  static styles = css`
    .products-container {
      width: 100%;
      height: 70vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
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
    return html`<div class="products-container">${this._renderCards()}</div>`;
  }

  _renderCards() {
    console.log("aja", this.products);
    return this.products.map((product) => {
      return html`<card-element .cardItem="${product}"></card-element>`;
    });
  }
}
customElements.define("products-element", ProductsElement);
