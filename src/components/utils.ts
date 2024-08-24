import { HTMLAttributes } from "react";

export type CustomProps = HTMLAttributes<HTMLDivElement> & {
    vw?: boolean;
};

export type ReactVLibrasProps = CustomProps & {
    position?: WidgetPosition;
    avatar?: AvatarOption;
    opacity?: number;
};

export type WidgetPosition = 'left' | 'right' | 'bottom' | 'top' | 'bottom-left' | 'top-left' | 'bottom-right' | 'top-right';

export const mapPosition: Record<WidgetPosition, string> = {
  'left': 'L',
  'right': 'R',
  'bottom': 'B',
  'top': 'T',
  'bottom-left': 'BL',
  'top-left': 'TL',
  'bottom-right': 'BR',
  'top-right': 'TR',
};

export type AvatarOption = 'icaro' | 'hosana' | 'guga' | 'random';

export const generateUniqueKeyframeName = (baseName: string): string => {
  return `${baseName}-${Math.random().toString(36).substring(2, 15)}`;
};

export const containsVpOrVw = (selectorText: string): boolean => {
  return /\[vp\]|\[vw\]|\.vp|\.vw|\.vpw/.test(selectorText);
};

export const validationStyleSheet = (node: Node): boolean => {
  if (node.nodeName === 'STYLE' || (node.nodeName === 'LINK' && (node as HTMLLinkElement).rel === 'stylesheet')) {
    const styleSheet = (node as HTMLStyleElement | HTMLLinkElement).sheet;
    return styleSheet !== null && styleSheet.cssRules !== null;
  }
  return false;
};
