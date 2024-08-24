# React VLibras Plugin

**React VLibras Plugin** é uma biblioteca React que integra o widget de acessibilidade VLibras em suas aplicações React. O VLibras fornece tradução automática de conteúdo digital para a Língua Brasileira de Sinais (Libras), aumentando a acessibilidade para os usuários.

## Instalação

Instale a biblioteca `react-vlibras-plugin` via npm:

```bash
npm install react-vlibras-plugin
```

ou com yarn:

```bash
yarn add react-vlibras-plugin
```

## Uso

Após a instalação, siga os passos abaixo para integrar o widget VLibras em sua aplicação React:

### 1. Importe o Componente `ReactVLibras`

No arquivo onde deseja usar o componente (por exemplo, `App.js`), importe o componente `ReactVLibras`:

```javascript
import React from 'react';
import ReactVLibras from 'react-vlibras-plugin';

function App() {
  return (
    <div>
      <ReactVLibras />
      {/* Outros componentes */}
    </div>
  );
}

export default App;
```

### 2. Use o Componente `<ReactVLibras />`

Adicione o componente `<ReactVLibras />` ao seu JSX para ativar o widget VLibras:

```jsx
<ReactVLibras />
```

### Propriedades

O componente aceita as seguintes propriedades:

- **`position`**: Define a posição do widget VLibras na tela. Os valores possíveis são:
  - `left` (padrão)
  - `right`
  - `top`
  - `bottom`
  - `bottomLeft`
  - `topLeft`
  - `bottomRight`
  - `topRight`
  
  Exemplo:
  ```jsx
  <ReactVLibras position="right" />
  ```

- **`avatar`**: Especifica o avatar usado no widget VLibras. As opções incluem:
  - `icaro`
  - `hosana`
  - `guga`
  - `random` (padrão)

  Exemplo:
  ```jsx
  <ReactVLibras avatar="guga" />
  ```

- **`opacity`**: Define a opacidade do widget VLibras. O valor deve ser um número entre `0` e `1`. O valor padrão é `1`.

  Exemplo:
  ```jsx
  <ReactVLibras opacity={0.8} />
  ```