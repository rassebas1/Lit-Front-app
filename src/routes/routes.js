import { Router } from "@vaadin/router";

export default class initRouter {
  static routes;
  router;

  constructor() {
    this.routes = [
      {
        name: "login",
        path: "/",
        component: "login-element",
        action: () => {
          import("../views/login-element.js");
        },
      },
      {
        name: "About",
        path: "/about",
        component: "about-element",
        action: () => {
          import("../views/about-element");
        },
      },
      {
        name: "home",
        path: "/home",
        component: "home-page",
        action: async () => {
          await import("../views/Home.js");
        },
      },
      {
        name: "products",
        path: "/products",
        component: "products-element",
        action: async () => {
          await import("../Components/product-showcase/products-element");
        },
      },
    ];

    this.router = {};
  }
  get rutas() {
    return this.routes;
  }
  inicializar(outlet) {
    this.router = new Router(outlet);
    this.router.setRoutes(this.routes);
    return this.router;
  }
}
