const firebaseConfig = {
  apiKey: "AIzaSyBuk3dItipnTiXU8SP46yv6yTW1aIjCGuU",
  authDomain: "ai-expense-20060213.firebaseapp.com",
  projectId: "ai-expense-20060213"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
