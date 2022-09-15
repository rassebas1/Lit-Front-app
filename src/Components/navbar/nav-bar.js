import { LitElement, html, css } from 'lit';

export class NavBar extends LitElement {
    static properties = {
        rutas: {type: Array, attribute: true}
    }
    static styles = [
        css`
            :host {
                display: block;
                border: 2px solid blue;
            }
        `
    ];

    constructor() {
        super();
        this.rutas={
            name:'',
            path: ''
        }
    }

    render() {
        console.log(this.rutas)
        return html`
            <nav>
                ${this.rutas.map(ruta => html`
                    <a href=${ruta.path}>${ruta.name}</a>
                `
                )}
            </nav>
        `;
    }
}
customElements.define('nav-bar', NavBar);
