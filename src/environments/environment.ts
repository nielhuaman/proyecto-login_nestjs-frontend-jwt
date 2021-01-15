// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAgPXWCwubawdKbIaKKKoqPjv9dc64VRCo',
    authDomain: 'login-unmsm.firebaseapp.com',
    databaseURL: 'https://login-unmsm.firebaseio.com',
    projectId: 'login-unmsm',
    storageBucket: 'login-unmsm.appspot.com',
    messagingSenderId: '23629937743',
    appId: '1:23629937743:web:533080136c894ba9a13e3a',
    measurementId: 'G-7FTHE86RB6'
  },
  cursoURL: 'https://unmsm-matricula-cursos-nestjs.mybluemix.net/cursos/',
  productoURL: 'http://localhost:8080/producto/',
  authURL: 'http://localhost:8080/auth/',
  matriculaURL: 'http://localhost:3000/enrollments',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
