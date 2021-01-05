import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


export const subscribeToTopic = functions.https.onCall(async (data, context) => {
   await admin.messaging().subscribeToTopic(data.token, data.topic);
   return `subscribed to topic ${data.topic}`;
});

export const unsubscribeFromTopic = functions.https.onCall(async (data, context) => {
    await admin.messaging().unsubscribeFromTopic(data.token, data.topic);
    return `unsubscribed to topic ${data.topic}`
 });


 export const sendOnFireStoreCreate = functions.firestore
    .document('discounts/{discountId}')
    .onCreate(async snapshot => {
       const discount =  snapshot.data();

       const notification: admin.messaging.Notification  = {
        title: "New Discount",
        body: discount.headline,
       };


       const payload: admin.messaging.Message = {
        notification,
        topic: "discounts",
       };

       return admin.messaging().send(payload);
    })