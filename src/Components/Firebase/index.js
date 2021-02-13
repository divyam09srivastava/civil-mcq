import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCQvY05zxNwBf6FOeQkccGbOOhIY1UIIJ0",
    authDomain: "civil-mcq-45d89.firebaseapp.com",
    projectId: "civil-mcq-45d89",
    storageBucket: "civil-mcq-45d89.appspot.com",
    messagingSenderId: "948388795290",
    appId: "1:948388795290:web:34a69ce8d39a5240746023",
    measurementId: "G-S76Y78YD7G"
  
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  dbreturns() {
    return this.db;
  }

//   login(email, password) {
//     return this.auth.signInWithEmailAndPassword(email, password);
//   }

//   logout() {
//     return this.auth.signOut();
//   }

//   async register(name, email, password) {
//     await this.auth.createUserWithEmailAndPassword(email, password);
//     return this.auth.currentUser.updateProfile({
//       displayName: name,
//     });
//   }

  addQuestion(
    id,
    question,
    category,
    optionA,
    optionB,
    optionC,
    optionD,
    correct
  ) {
    const data = {
        id,
    question,
    category,
    optionA,
    optionB,
    optionC,
    optionD,
    correct,
    uid: new Date().getTime(),
    };

    // adding data here
    this.db
      .collection("questions")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        // NotificationManager.success("A new user has been added", "Success");
        alert("Sucess : New Question Added");
        // window.location = "/";
      })
      .catch((error) => {
        // NotificationManager.error(error.message, "Create user failed");
        alert("Failure : New Question NOT Added" + "  " + error);
        // this.setState({ isSubmitting: false });
      });
  }


  addTopics(
    Topicname,
    countsection
  ) {
    const data = {
      Topicname,
      countsection,
    uid: new Date().getTime(),
    };

    // adding data here
    this.db
      .collection("Topics")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        // NotificationManager.success("A new user has been added", "Success");
        alert("Success : New Topic Added");
        // window.location = "/";
      })
      .catch((error) => {
        // NotificationManager.error(error.message, "Create user failed");
        alert("Failure : New Question NOT Added" + "  " + error);
        // this.setState({ isSubmitting: false });
      });
  }

  
  addTopics2(
    Topicname2,
    countsection2
  ) {
    const data = {
      Topicname2,
      countsection2,
    uid: new Date().getTime(),
    };

    // adding data here
    this.db
      .collection("Topics2")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        // NotificationManager.success("A new user has been added", "Success");
        alert("Success : New Topic Added");
        // window.location = "/";
      })
      .catch((error) => {
        // NotificationManager.error(error.message, "Create user failed");
        alert("Failure : New Question NOT Added" + "  " + error);
        // this.setState({ isSubmitting: false });
      });
  }







  

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

//   getCurrentUsername() {
//     return this.auth.currentUser && this.auth.currentUser.email;
//   }

  // async getCurrentUserDetail(email) {
  //   await this.db
  //     .collection("users")
  //     .where("email", "==", `${email}`)
  //     .get()
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       console.log(data);
  //       return data;
  //     });
  // }
}

export default new Firebase();