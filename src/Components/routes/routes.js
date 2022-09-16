import { Router } from "@vaadin/router";

export default class initRouter {
  static routes;
  router;

  constructor() {
    this.routes = [
      {
        name: "Home",
        path: "/",
        component: "home-page",
        action: () => {
          import("../../views/Home");
        },
      },
      {
        name: "About",
        path: "/about",
        component: "about-element",
        action: () => {
          import("../../views/about-element");
        },
      },
      {
        name: "Logout",
        path: "/login",
        component: "login-element",
        action: async () => {
          await import("../../views/login-element");
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
