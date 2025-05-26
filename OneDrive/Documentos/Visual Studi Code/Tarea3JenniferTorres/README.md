# <contador-clicks>

Componente web personalizado que muestra un contador de clics. Usa Custom Elements y Shadow DOM para encapsular lógica y estilos.

## Características

- Estilos encapsulados
- 2 slots: `titulo` y `mensaje`
- Atributo `tema` para cambiar el fondo
- Comportamiento dinámico con JavaScript

## Uso

```html
<contador-clicks tema="lightblue">
  <h2 slot="titulo">Texto del título</h2>
  <p slot="mensaje">Texto personalizado</p>
</contador-clicks>
