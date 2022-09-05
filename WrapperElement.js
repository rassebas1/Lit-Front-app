import { LitElement, css, html } from "lit";

class WrapperElement extends LitElement {
  static styles = css`
    .wrapper-container {
      margin: 2px;
      padding: 0px;
      border: 1px solid blue;
      height: 100%;
      width: 100%;
    }
    ::slotted(*) {
      border-radius: 4px;
      min-height: 500px;
      min-width: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;
  render() {
    return html`
      <div class="wrapper-container">
        <slot></slot>
      </div>
    `;
  }
}
customElements.define("wrapper-element", WrapperElement);
