import { Router } from "@vaadin/router";

export default class initRouter {
    static routes;
    router;

    constructor() {
      this.routes = [{
        name: 'Home',
        path: "/home",
        component: "home",
        action:  () => {
           import("../../views/Home");
        }
      },
      {
        name: 'About',
        path: "/about",
        component: "about-element",
        action: () => {
           import("../../views/about-element");
          }
      },
      {
        name: 'Logout',
        path: "/",
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
  
  