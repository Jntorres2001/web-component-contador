export class EspeModal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
  
          .contenido {
            background: white;
            padding: 20px;
            border-radius: 10px;
            max-width: 90%;
            text-align: center;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
          }
  
          button {
            margin-top: 15px;
            padding: 8px 16px;
            background-color: #dc3545;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        </style>
  
        <div class="modal">
          <div class="contenido">
            <slot>Mensaje por defecto del modal.</slot>
            <br />
            <button id="cerrarBtn">Cerrar</button>
          </div>
        </div>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      this.shadowRoot.querySelector('#cerrarBtn').addEventListener('click', () => {
        this.close();
        this.dispatchEvent(new CustomEvent('modal-cerrado', {
          bubbles: true,
          composed: true,
          detail: { mensaje: 'El modal se ha cerrado correctamente.' }
        }));
      });
    }
  
    open() {
      this.shadowRoot.querySelector('.modal').style.display = 'flex';
    }
  
    close() {
      this.shadowRoot.querySelector('.modal').style.display = 'none';
    }
  }
  
  customElements.define('espe-modal', EspeModal);
  