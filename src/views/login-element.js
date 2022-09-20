import { LitElement, html, css } from 'lit';

export class LoginElement extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<h1>Hola Soy Anyela</h1>`;
    }
}
customElements.define('login-element', LoginElement);
