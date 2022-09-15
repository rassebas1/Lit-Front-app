import { Router } from "@vaadin/router";

export default class initRouter {
    static routes;
    router;

    constructor() {
      this.routes = [{
        path: "/",
        component: "home",
        action:  () => {
           import("../../views/Home");
        }
      },
      {
        path: "/about",
        component: "about-element",
        action: () => {
           import("../../views/about-element");
          }
      },
      {
        path: "/login",
        component: "login-element",
        action: async () => {
          await import("../../views/login-element")
        }
      }];

      this.router = {}
    }
    get rutas(){
        return this.routes;
    }
    inicializar(outlet) {
        this.router = new Router(outlet);
        this.router.setRoutes(this.routes);
        return this.router;
    }
  }
  
  