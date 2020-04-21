import * as functions from 'firebase-functions';
import * as Razorpay from 'razorpay';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

 export const helloWorld = functions.https.onRequest((request, response) => {
    const instance = new Razorpay({
        key_id: 'rzp_test_VOTupfHvI0eVL3',
        key_secret: 'NKUzs1xJpPb9viyQ2UCX7ce3'
      })
      console.log(instance)
    const options = {
        amount: 50,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_15",
        payment_capture: false
      };
      instance.orders.create(options).then((res:any)=>{
        response.send(JSON.stringify(res));
      }).catch((err:any)=>{
        console.log(err)
        response.send(JSON.stringify(err));
      })
 });
