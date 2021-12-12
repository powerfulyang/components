import './index.scss';
import { isClient } from '@powerfulyang/utils';

if (isClient) {
  const scriptElem = document.createElement('script');
  scriptElem.src = '//at.alicdn.com/t/font_178634_7m8rip6osz4.js';
  document.body.appendChild(scriptElem);
}

export * from './assets';
export * from './components';
