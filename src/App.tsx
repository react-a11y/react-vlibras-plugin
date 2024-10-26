import ReactVLibras from "react-vlibras-plugin";
import NucleusReact, { NucleusBox } from "nucleus-react-js";
import { configApp } from "./App.config";
import "./App.scss";

function App() {
  return (
    <NucleusReact config={configApp}>
      <ReactVLibras />
      <NucleusBox className="example" title="Usage Example">
        <h3>Widget Position</h3>
        <p>
          You can set the widget's position using the <code>position</code>{" "}
          attribute. For example:
        </p>
        <pre>
          <code>&lt;react-vlibras-plugin position="left" /&gt;</code>
        </pre>

        <h3>Available Position Types</h3>
        <p>The position options that can be used are:</p>
        <ul>
          <li>left</li>
          <li>right</li>
          <li>top</li>
          <li>bottom</li>
          <li>bottom-left</li>
          <li>top-left</li>
          <li>bottom-right</li>
          <li>top-right</li>
        </ul>

        <h3>Avatar</h3>
        <p>
          You can select the widget's avatar using the <code>avatar</code>{" "}
          attribute. Example:
        </p>
        <pre>
          <code>&lt;react-vlibras-plugin avatar="hosana" /&gt;</code>
        </pre>

        <h3>Available Avatar Options</h3>
        <ul>
          <li>icaro</li>
          <li>hosana</li>
          <li>guga</li>
          <li>random</li>
        </ul>

        <h3>Opacity</h3>
        <p>
          To adjust the widget's opacity, use the <code>opacity</code>{" "}
          attribute:
        </p>
        <pre>
          <code>&lt;react-vlibras-plugin opacity="0.8" /&gt;</code>
        </pre>
      </NucleusBox>
    </NucleusReact>
  );
}

export default App;
