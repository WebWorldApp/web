'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["/","style/style.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
