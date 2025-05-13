class MiFormulario extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          .formulario {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            text-align: center;
          }
  
          input {
            padding: 8px;
            margin-bottom: 10px;
            width: 80%;
          }
  
          ::slotted(button) {
            padding: 8px 15px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        </style>
  
        <div class="formulario">
          <label>Color de fondo:</label><br>
          <input type="text" id="colorInput" placeholder="Ej: lightblue" /><br>
          <slot name="boton-enviar"></slot>
        </div>
      `;
    }
  
    connectedCallback() {
      const boton = this.querySelector('[slot="boton-enviar"]');
      const input = this.shadowRoot.querySelector('#colorInput');
  
      boton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que recargue la página
  
        const nuevoColor = input.value.trim();
        const componenteContador = document.querySelector('#contador');
  
        if (componenteContador) {
          componenteContador.setAttribute('tema', nuevoColor);
          componenteContador.resetearContador(); // Llama al método del componente anterior
        }
      });
    }
  }
  
  customElements.define('formulario-accion', MiFormulario);
  