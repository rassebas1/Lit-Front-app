import { LitElement, css, html } from "lit";
import "./style.css";
import "./WrapperElement";
//@customElement("lit-app")
export class App extends LitElement {
  static styles = css`
    body {
      padding: 0px;
      margin: 0px;
    }
    .header {
      padding: 20px;
      font-size: 25px;
      text-align: center;
      background: white;
    }
    .topnav {
      background-color: #4f4c4c;
      overflow: hidden;
      width: 100vw;
      border-radius: 8px;
    }
    .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }
    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }
    .topnav a.active {
      background-color: #008cba;
      color: white;
    }
  `;

  render() {
    return html`
      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </div>
      <div class="header">
        <h2>LitElement Website</h2>
      </div>

      <wrapper-element>
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
      </wrapper-element>
    `;
  }
}
customElements.define("lit-app", App);
