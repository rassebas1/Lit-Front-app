import { LitElement, css, html } from "lit";
import "../style.css";
import "./Components/WrapperElement";
import "./views/Home";
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
      <wrapper-element>
        <home-page></home-page>
      </wrapper-element>
    `;
  }
}
customElements.define("lit-app", App);
