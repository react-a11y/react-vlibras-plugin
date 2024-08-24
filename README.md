# React VLibras Plugin

**React VLibras Plugin** integra o widget de acessibilidade VLibras em aplicações React, traduzindo conteúdo para Língua Brasileira de Sinais (Libras).

## Instalação

Instale com npm:

```bash
npm install react-vlibras-plugin
```

## Uso

### 1. Importe o Componente

```javascript
import ReactVLibras from 'react-vlibras-plugin';
```

### 2. Adicione o Componente ao JSX

```jsx
<ReactVLibras />
```

### Propriedades

- **`position`**: Posição do widget (`left`, `right`, `top`, `bottom`, `bottomLeft`, `topLeft`, `bottomRight`, `topRight`). Padrão: `left`.

  Exemplo:
  ```jsx
  <ReactVLibras position="right" />
  ```

- **`avatar`**: Avatar do widget (`icaro`, `hosana`, `guga`, `random`). Padrão: `random`.

  Exemplo:
  ```jsx
  <ReactVLibras avatar="guga" />
  ```

- **`opacity`**: Opacidade do widget (`0` a `1`). Padrão: `1`.

  Exemplo:
  ```jsx
  <ReactVLibras opacity={0.8} />
  ```