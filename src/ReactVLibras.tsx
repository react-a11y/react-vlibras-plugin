import { useEffect, useRef } from 'react';

type ReactVLibrasProps = {
  position?: WidgetPosition;
  avatar?: AvatarOption;
  opacity?: number;
};

type WidgetPosition = 'left' | 'right' | 'bottom' | 'top' | 'bottom-left' | 'top-left' | 'bottom-right' | 'top-right';

const mapPosition: Record<WidgetPosition, string> = {
  'left': 'L',
  'right': 'R',
  'bottom': 'B',
  'top': 'T',
  'bottom-left': 'BL',
  'top-left': 'TL',
  'bottom-right': 'BR',
  'top-right': 'TR',
};

type AvatarOption = 'icaro' | 'hosana' | 'guga' | 'random';

function ReactVLibras({ position = 'right', avatar = 'guga', opacity = 1 }: ReactVLibrasProps) {
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

  const generateUniqueKeyframeName = (baseName: string): string => {
    return `${baseName}-${Math.random().toString(36).substring(2, 15)}`;
  };
  
  const containsVpOrVw = (selectorText: string): boolean => {
    return /\[vp\]|\[vw\]|\.vp|\.vw|\.vpw/.test(selectorText);
  };
  
  const validationStyleSheet = (node: Node): boolean => {
    if (node.nodeName === 'STYLE' || (node.nodeName === 'LINK' && (node as HTMLLinkElement).rel === 'stylesheet')) {
      const styleSheet = (node as HTMLStyleElement | HTMLLinkElement).sheet;
      return styleSheet !== null && styleSheet.cssRules !== null;
    }
    return false;
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

  const htmlContentVLibras = `
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlContentVLibras }} />
}

export default ReactVLibras;
