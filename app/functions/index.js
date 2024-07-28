/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// This is all the functions need to be in a constant for the deployment to work
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// Import the functions from the other files
const { signup, signin, verifyToken, verifyEmail, resetPassword, updatePassword, signout} = require('./authenticationFunctions');

// Export the authentication functions to be used
exports.signup = signup;
exports.signin = signin;
exports.verifyToken = verifyToken;
exports.verifyEmail = verifyEmail;
exports.resetPassword = resetPassword;
exports.updatePassword = updatePassword;
exports.signout = signout;