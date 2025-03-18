if( !self.serviceWorker ) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./assets/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registrado con éxito:', registration);
            })
            .catch((error) => {
                console.error('Error al registrar el Service Worker:', error);
            });
    });

}