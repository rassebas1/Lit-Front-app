import { LitElement, css, html } from "lit";

class HomePage extends LitElement {
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
      <div class="home-container">
        <h3>home Page</h3>
        <p>
          Deserunt aliquip ullamco ex consequat ut deserunt esse ipsum sint
          irure sint. Nisi nisi reprehenderit dolor proident nostrud sint
          laboris. Consectetur qui anim adipisicing irure amet cillum. Sit
          cillum aliquip laborum commodo. Ex ea velit nisi amet qui proident
          aliqua deserunt pariatur excepteur sit consequat. Enim duis sint est
          commodo sit pariatur. Non duis nisi adipisicing eiusmod. Nulla laboris
          amet anim esse laborum et. Ut pariatur cillum laborum aliquip culpa.
          Nostrud tempor qui in aute deserunt.
        </p>
      </div>
    `;
  }
}
customElements.define("home-page", HomePage);
