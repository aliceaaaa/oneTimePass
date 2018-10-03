const admin = require("firebase-admin");
const functions = require("firebase-functions");
const createUser = require("./create_user");
const serviceAccount

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-pass-5056d.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
