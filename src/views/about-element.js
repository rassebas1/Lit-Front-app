import { LitElement, html, css } from "lit";

export class AboutElement extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<div>
      <h3>About Element</h3>
      <p>
        Proident ut Lorem fugiat velit nisi non magna officia dolor adipisicing
        occaecat ullamco magna nulla. Id minim cupidatat nostrud magna sit
        cillum pariatur commodo non deserunt sunt reprehenderit. Quis tempor
        voluptate eiusmod aute minim deserunt incididunt aliquip exercitation
        anim irure aute id est. Mollit officia nulla et quis mollit eiusmod
        occaecat nostrud cillum dolor. Non commodo mollit labore laboris ex
        nulla laboris Lorem. Cupidatat ut deserunt qui dolore. Commodo
        adipisicing excepteur reprehenderit exercitation eu amet excepteur
        proident culpa.
      </p>
    </div>`;
  }
}
customElements.define("about-element", AboutElement);
