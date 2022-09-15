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
        return html``;
    }
}
customElements.define('login-element', LoginElement);
