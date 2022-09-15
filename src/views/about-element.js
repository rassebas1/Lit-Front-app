import { LitElement, html, css } from 'lit';

export class AboutElement extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<h1>Hola desde About</h1>`;
    }
}
customElements.define('about-element', AboutElement);
