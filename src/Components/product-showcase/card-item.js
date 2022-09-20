import { LitElement, html, css } from "lit";

export class CardElement extends LitElement {
  static styles = css`
    .card-container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-items: center;
      border: 1px solid blue;
      border-radius: 10px;
      width: 300px;
      height: 400px;
      margin: 5px;
    }
    .card-container img {
      width: 250px;
      height: 250px;
      align-self: center;
    }
    .card-container ul {
      width: 250px;
      align-self: center;
      height: 200px;
      list-style: none;
      margin: 4px;
      padding: 4px;
    }
    .card-container h4 {
      margin: 2px;
    }
    .card-front {
      position: absolute;
      opacity: 1;
    }
    .card-back {
      position: absolute;
      opacity: 0;
    }
    .card-container:hover .card-front {
      animation: hoverCardFadeOut 0.5s ease-in-out;
    }
    .card-container:hover .card-back {
      animation: hoverCardFadeIN 0.5s ease-in-out;
    }
    @keyframes hoverCardFadeIN {
      0% {
        transform: rotateY(180deg);
        opacity: 0;
      }
      100% {
        transform: rotateY(0deg);
        opacity: 1;
      }
    }
    @keyframes hoverCardFadeOut {
      from {
          opacity: 1;
          transform: rotateY(0deg);
        }
        to {
          transform: rotateY(180deg);
        opacity: 0;
      }
    }
  `;
  static get properties() {
    return {
      cardItem: { type: Object, attribute: true },
    };
  }
  constructor() {
    super();
  }
  animate
  render() {
    console.log(this.cardItem);
    return html` <div class="card-container">
      <div class="card-front">
        <img src="${this.cardItem.image}" />
        <h4>${this.cardItem.title}</h4>
        <ul>
          <li>${this.cardItem.category}</li>
          <li>${this.cardItem.price}</li>
          <li>${this.cardItem.rating.rate}</li>
          <li>${this.cardItem.rating.count}</li>
        </ul>
      </div>
      <div class="card-back">
        <p>${this.cardItem.description}</p>
      </div>
    </div>`;
  }
}
customElements.define("card-element", CardElement);
