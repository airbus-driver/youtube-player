const functions = require("firebase-functions");
const admin = require("firebase-admin");

const helpers = require("./helpers");

admin.initializeApp();

exports.addVideoInfo = functions.firestore
  .document("videos/{id}")
  .onCreate(async (snap, context) => {
    const {id} = context.params;
    const newDoc = snap.data();
    const videoId = newDoc.videoId;
    const info = await helpers.getVideoInfo(videoId);
    const {title, duration} = info;
    const payload = {
      title,
      duration,
    };
    await admin.firestore().collection("videos").doc(id).update(payload);
  });
