import Code from '../Code';
import "./style.scss";

function ModalInstall(props: any) {
  return (
    <div className={`modal ${props.active && "active"}`}>
      <button className="modal-button" onClick={props.closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#f00"
            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3Z"
          />
        </svg>
      </button>
      <div className="modal-content">
        <h2>Installation</h2>
        <Code language="shell">npm install react-vlibras-plugin</Code>
        <h2>Usage</h2>
        <Code language="tsx">{`import ReactVLibras from 'react-vlibras-plugin';

<ReactVLibras position="left" />`}</Code>
        <h2 className="title">Widget Position</h2>
        <Code language="tsx">{`<ReactVLibras position="left" />`}</Code>
        <h3>Position Types:</h3>
        <span className="type">top</span>
        <span className="type">bottom</span>
        <span className="type">bottom-left</span>
        <span className="type">top-left</span>
        <span className="type">bottom-right</span>
        <span className="type">top-right</span>
        <h2 className="title">Avatar</h2>
        <Code language="tsx">{`<ReactVLibras avatar="hosana" />`}</Code>
        <h3>Avatar Options:</h3>
        <span className="type">icaro</span>
        <span className="type">hosana</span>
        <span className="type">guga</span>
        <span className="type">random</span>
        <h2 className="title">Opacity</h2>
        <Code language="tsx">{`<ReactVLibras opacity={0.8} />`}</Code>
      </div>
    </div>
  );
}

export default ModalInstall;
