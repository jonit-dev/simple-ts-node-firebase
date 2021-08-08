import { firebaseHelper } from "./Firebase.helper";

export const readAllResources = async <T>(
  collectionPath: string
): Promise<T[]> => {
  const snapshot = await firebaseHelper.db.collection(collectionPath).get();
  const data = convertSnapshotToArray(snapshot);
  return data;
};

export const createResource = async <T>(
  collectionPath: string,
  resource: T
): Promise<void> => {
  await firebaseHelper.db.collection(collectionPath).add(resource);
};

export const deleteResource = async (
  collectionPath: string,
  resourceId: string
): Promise<void> => {
  await firebaseHelper.db.collection(collectionPath).doc(resourceId).delete();
};

export const convertSnapshotToArray = (querySnapshot: any) => {
  const data: any[] = [];

  for (const cafe of querySnapshot.docs) {
    data.push({
      id: cafe.id,
      ...cafe.data(),
    });
  }

  return data;
};
