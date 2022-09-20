import { LitElement, html, css } from "lit";

export class CardElement extends LitElement {
  static styles = css`
    .card-container {
      padding: 5px;
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
      width: 90%;
      height: 230px;
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
    .animarOut {
      display: none;
      opacity: 0;
    }
    .animarIn {
      display: block;
      opacity: 1;
      animation: hoverCardFadeIN 0.7s ease-in-out;
    }
    .card-container:hover .card-front {
      /*animation: hoverCardFadeOut 0.5s ease;*/
    }
    .card-container:hover .card-back {
      /*animation: hoverCardFadeIN 0.5s ease;*/
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
          display: block;
        }
        to {
          transform: rotateY(180deg);
          opacity: 0;
          display: none;
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
  _animate() {
    let tarjeta = this.shadowRoot.querySelector('.card-front')
    let tarjetaBack = this.shadowRoot.querySelector('.card-back')
    tarjeta.classList.add('animarOut');
    tarjetaBack.classList.add('animarIn');
    tarjetaBack.classList.remove('animarOut');
    tarjeta.classList.remove('animarIn');
    console.log('Entrada')
  }
  _animateIn() {
    let tarjeta = this.shadowRoot.querySelector('.card-front')
    tarjeta.classList.add('animarIn')
    tarjeta.classList.remove('animarOut')
    let tarjetaBack = this.shadowRoot.querySelector('.card-back')
    tarjetaBack.classList.remove('animarIn');
    tarjetaBack.classList.add('animarOut');
    console.log('salida')
  }

  render() {
    console.log(this.cardItem);
    return html` <div class="card-container" @mouseenter= ${this._animate} @mouseleave=${this._animateIn}>
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
