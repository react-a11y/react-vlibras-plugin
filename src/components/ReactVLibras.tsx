import { useEffect, useRef } from 'react';
import { containsVpOrVw, generateUniqueKeyframeName, mapPosition, ReactVLibrasProps, validationStyleSheet } from './utils';

function ReactVLibras({ position = 'right', avatar = 'guga', opacity = 1, ...props }: ReactVLibrasProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    init();
    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = () => {
    scriptRef.current = document.createElement('script');
    scriptRef.current.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    scriptRef.current.addEventListener('load', createWidget);
    document.body.appendChild(scriptRef.current);
  };

  const createWidget = () => {
    scriptRef.current?.removeEventListener('load', createWidget);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (window as any).VLibras.Widget({
      position: mapPosition[position],
      rootPath: 'https://vlibras.gov.br/app',
      avatar: avatar,
      opacity: opacity,
    });
    observeDOMChanges();
  };

  const updateKeyframeNameInStyles = (oldName: string, newName: string): void => {
    document.querySelectorAll('style').forEach((styleTag) => {
      const containsOldName = new RegExp(`@keyframes\\s+${oldName}|\\b${oldName}\\b`, 'g').test(styleTag.textContent || '');

      if (containsVpOrVw(styleTag.textContent || '') && containsOldName) {
        const updatedContent = (styleTag.textContent || '')
          .replace(new RegExp(`@keyframes\\s+${oldName}`, 'g'), `@keyframes ${newName}`)
          .replace(new RegExp('(animation:\\s*[^;}]*?)(;|})', 'g'), (match) => {
            return match.replace(new RegExp(`\\b${oldName}\\b`, 'g'), newName);
          });
        styleTag.textContent = updatedContent;
      }
    });
  };

  const observeDOMChanges = (): void => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (validationStyleSheet(node)) {
            Array.from((node as HTMLStyleElement).sheet!.cssRules).forEach((rule) => {
              if (rule.type === CSSRule.KEYFRAMES_RULE) {
                updateKeyframeNameInStyles((rule as CSSKeyframesRule).name, generateUniqueKeyframeName((rule as CSSKeyframesRule).name));
              }
            });
          }
        });
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });
  };

  return (
    <div vw className="enabled" {...props}>
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
            <div className="vw-plugin-top-wrapper"></div>
        </div>
    </div>
  );
}

export default ReactVLibras;
