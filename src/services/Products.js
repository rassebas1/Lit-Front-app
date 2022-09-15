const API_URLS = {
  products: "https://fakestoreapi.com/products",
  carts: "https://fakestoreapi.com/carts",
  users: "https://fakestoreapi.com/users",
  auth: "https://fakestoreapi.com/auth/login",
};
export class ProductService {
  products;
  product;
  cart;
  user;
  constructor() {
    (this.products = [{}]), (this.cart = {}), (this.user = {});
  }
  fetchAllProducts = async () => {
    await fetch(API_URLS.products)
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(this.products);
      });
  };
  fetchProductById = async (id) => {
    await fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((json) => console.log("1", json));
  };
  fetchCart = async () => {
    await fetch("https://fakestoreapi.com/carts/1")
      .then((res) => res.json())
      .then((data) => {
        this.cart = data;
        console.log(this.cart);
      });
  };
  fetchUser = async () => {
    await fetch("https://fakestoreapi.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        this.user = data;
        console.log(this.user);
      });
  };
  isAuth = async () => {
    await fetch(API_URLS.auth, {
      method: "POST",
      body: {
        username: "johnd",
        password: "m38rmF$",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log("auth", json));
  };
  get products() {
    return this.products;
  }
  get cart() {
    return this.cart;
  }
  get user() {
    return this.user;
  }
  set products(value) {
    this.products = value;
  }
  set cart(value) {
    this.cart = value;
  }
  set user(value) {
    this.user = value;
  }
}
