class ContadorClicks extends HTMLElement {
  constructor() {
    super();
    this.contador = 0;

    // Creamos el Shadow DOM
    this.shadow = this.attachShadow({ mode: 'open' });

    // Plantilla del componente
    this.shadow.innerHTML = `
      <style>
        .contenedor {
          background: #e0e0e0;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          font-family: sans-serif;
        }
        button {
          padding: 10px;
          font-size: 16px;
          margin-top: 10px;
          cursor: pointer;
        }
      </style>
      <div class="contenedor">
        <slot name="titulo"></slot>
        <p>Clicks: <span id="numero">0</span></p>
        <button id="boton">Aumentar</button>
        <slot name="mensaje"></slot>
      </div>
    `;
  }

  connectedCallback() {
    this.shadow.querySelector('#boton').addEventListener('click', () => {
      this.contador++;
      this.shadow.querySelector('#numero').textContent = this.contador;
    });
  }

  static get observedAttributes() {
    return ['tema'];
  }

  attributeChangedCallback(nombre, viejo, nuevo) {
    if (nombre === 'tema') {
      this.shadow.querySelector('.contenedor').style.background = nuevo;
    }
  }
}

// Registramos el componente
customElements.define('contador-clicks', ContadorClicks);
