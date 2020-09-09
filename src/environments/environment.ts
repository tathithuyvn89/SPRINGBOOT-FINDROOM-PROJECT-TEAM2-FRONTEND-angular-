// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDlxXlJHusOvNsofYLTQxCSDQY2oseJleY',
    authDomain: 'find-room-15ed5.firebaseapp.com',
    databaseURL: 'https://find-room-15ed5.firebaseio.com',
    projectId: 'find-room-15ed5',
    storageBucket: 'find-room-15ed5.appspot.com',
    messagingSenderId: '589071462659',
    appId: '1:589071462659:web:cdfcd2faf709ffe35c7936',
    measurementId: 'G-1X07YRD9X8'
  },
  baseUrl: 'http://localhost:8080/api/v1/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
