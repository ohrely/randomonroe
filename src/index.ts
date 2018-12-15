import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the randomondroe extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'randomondroe',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension randomondroe is activated!');
  }
};

export default extension;
