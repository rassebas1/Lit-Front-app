import { LitElement, html, css } from 'lit';

export class Carga extends LitElement {
    static styles = [
        css`
            .carga{
                border: 15px solid #ccc;
                border-top-color: #f4266A;
                border-top-style: groove;
                width: 150px;
                height: 150px;
                border-radius: 100%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                animation: girar 1.5s linear infinite;
            }
            @keyframes girar {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
        `
    ];

    render() {
        return html`
            <div class="carga"></div>
        `;
    }
}
customElements.define('carga-indicador', Carga);
