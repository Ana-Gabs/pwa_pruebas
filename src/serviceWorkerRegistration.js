// Código tomado y simplificado del template CRA para registrar el SW
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d)){3}$/)
);


export function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;


        window.addEventListener('load', () => {
            navigator.serviceWorker.register(swUrl).then(registration => {
                console.log('ServiceWorker registrado con scope:', registration.scope);


                registration.onupdatefound = () => {
                    const installingWorker = registration.installing;
                    if (installingWorker == null) return;
                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                // Nuevo contenido disponible, mostrar notificación al usuario
                                console.log('Nuevo contenido disponible — cierra las pestañas abiertas para ver la actualización.');
                            } else {
                                console.log('Contenido en caché para uso offline.');
                            }
                        }
                    };
                };
            }).catch(error => {
                console.error('Error registrando el ServiceWorker:', error);
            });
        });
    }
}


export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}