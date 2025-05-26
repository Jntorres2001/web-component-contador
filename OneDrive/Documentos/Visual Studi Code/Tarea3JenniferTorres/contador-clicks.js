class ContadorClicks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.contador = 0;
    this.tema = this.getAttribute('tema') || 'white';

    this.shadowRoot.innerHTML = `
      <style>
        .contador {
          padding: 20px;
          border: 2px solid black;
          border-radius: 10px;
          background-color: ${this.tema};
          text-align: center;
          width: 250px;
          margin: 0 auto;
        }

        button {
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #218838;
        }
      </style>

      <div class="contador">
        <slot name="titulo"></slot>
        <p>Clicks: <span id="cuenta">0</span></p>
        <slot name="mensaje"></slot>
        <button id="boton-sumar">+1 Click</button>
      </div>
    `;
  }

  static get observedAttributes() {
    return ['tema'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'tema') {
      this.tema = newVal;
      const contenedor = this.shadowRoot.querySelector('.contador');
      if (contenedor) {
        contenedor.style.backgroundColor = this.tema;
      }
    }
  }

  connectedCallback() {
    const boton = this.shadowRoot.querySelector('#boton-sumar');
    const cuenta = this.shadowRoot.querySelector('#cuenta');

    boton.addEventListener('click', () => {
      this.contador++;
      cuenta.textContent = this.contador;
    });
  }

  resetearContador() {
    this.contador = 0;
    this.shadowRoot.querySelector('#cuenta').textContent = this.contador;
  }
}

customElements.define('contador-clicks', ContadorClicks);
