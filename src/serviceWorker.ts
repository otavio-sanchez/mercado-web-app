function urlB64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

if ('serviceWorker' in navigator && !__DEV__) {
  navigator.serviceWorker.register('service-worker.js').then();
  navigator.serviceWorker.ready
    .then((registration): void => {
      console.log('SW registered: ', registration);
      registration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlB64ToUint8Array(
            'BIpIG9KePEMZn-zxZzVmY1BbenSORvyijhwfrn3apz1Euz1lNc6n91IBhONeYw3TrgExyEBEzxCfVCZL9yBdECk'
          ),
        })
        .catch((erro): void => {
          console.error('Failed to subscribe the user: ', erro);
        });
    })
    .catch((registrationError): void => {
      console.log('SW registration failed: ', registrationError);
    });
}
