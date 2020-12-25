import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {

  // functions.logger.info('hola mundo', {structuredData: true});
  const numeroAux = Math.round(Math.random() * 100);
  response.send(numeroAux.toString());
});

// http callable function
export const sayHello = functions.https.onCall((data, context) => {
  const nombre = data.nombre;
  return `hola, ${nombre}`;
});
