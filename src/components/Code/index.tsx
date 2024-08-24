/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/scss/atom-one-light.scss';

function ModalInstall(props: any) {
  const codeRef: any = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, [props.children]);

  return (
    <div className="code-wrapper">
      <code ref={codeRef} className={`language-${props.language}`}>{props.children}</code>
    </div>
  );
}

export default ModalInstall;
