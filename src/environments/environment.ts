// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDOxHtfI62jhEiRQOVB4ffkywYItjrQXuY",
//     authDomain: "foodjournal-c4a3e.firebaseapp.com",
//     databaseURL: "https://foodjournal-c4a3e.firebaseio.com",
//     projectId: "foodjournal-c4a3e",
//     storageBucket: "foodjournal-c4a3e.appspot.com",
//     messagingSenderId: "910116604938",
//     appId: "1:910116604938:web:f8a0d84186e44ec89ce3f3"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDOxHtfI62jhEiRQOVB4ffkywYItjrQXuY",
    authDomain: "foodjournal-c4a3e.firebaseapp.com",
    databaseURL: "https://foodjournal-c4a3e.firebaseio.com",
    projectId: "foodjournal-c4a3e",
    storageBucket: "foodjournal-c4a3e.appspot.com",
    messagingSenderId: "910116604938",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
