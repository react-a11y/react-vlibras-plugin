import ReactVLibras from 'react-vlibras-plugin';
import NucleusReact from 'nucleus-react-js';
import { configApp } from './App.config';

function App() {
  return (
    <NucleusReact config={configApp}>
      <ReactVLibras />
    </NucleusReact>
  )
}

export default App
