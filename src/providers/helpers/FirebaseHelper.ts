import admin, { ServiceAccount } from "firebase-admin";

import serviceAccount from "../data/firebase-service-account-key.json";

class FirebaseHelper {
  public admin: admin.app.App;
  public db: FirebaseFirestore.Firestore;

  constructor() {
    this.admin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
    this.db = admin.firestore();
  }
}

const firebaseHelper = new FirebaseHelper();

export { firebaseHelper };
