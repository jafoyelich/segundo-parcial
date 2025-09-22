import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';


bootstrapApplication(App, appConfig)
  .then(() => {
    if (document.baseURI.includes('github.io') && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/ngsw-worker.js');
    }
  });
