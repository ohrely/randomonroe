import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import '../style/index.css';


/**
 * Initialization data for the randomonroe extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'randomonroe',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
    console.log('JupyterLab extension randomonroe is activated!');
    console.log('ICommandPalette:', palette);
  }
};

export default extension;
