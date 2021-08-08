import admin, { ServiceAccount } from "firebase-admin";

import serviceAccount from "../../data/firebase-service-account-key.json";

class FirebaseHelper {
  public admin: admin.app.App | null;
  public db: FirebaseFirestore.Firestore | null;

  constructor() {
    this.admin = null;
    this.db = null;
  }

  public init() {
    this.admin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
    this.db = admin.firestore();
    console.log(`️‍🔥 Firebase-admin initialized`);
  }
}

const firebaseHelper = new FirebaseHelper();

export { firebaseHelper };
