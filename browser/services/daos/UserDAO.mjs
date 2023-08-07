/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
import { collectionRef, docRef, setDoc } from "../firestore.mjs";
import { createProfile } from "./ProfileDAO.mjs";

export const USER_COLLECTION = collectionRef("users");

/**
 * @typedef {{
 *  settings: UserSettings;
 *  profiles: DocumentReference[];
 *  autocompleteHistory: DocumentReference[];
 * }} UserSchema
 */

/**
 * @typedef {{
 *  widgets: DocumentReference[];
 *  encryptData: boolean;
 *  mode: "ios" | "md" | "default"
 *  keyboardShortcuts: {
 *    [key: string]: {
 *      ctrl: boolean;
 *      alt: boolean;
 *      shift: boolean;
 *      action: string;
 *    }
 *  }
 *  mirrorHistoryToBrowser: boolean
 * }} UserSettings
 */

/**
 *
 * @param {string} uid
 */
export async function createUserData(uid) {
  const userDocRef = docRef(USER_COLLECTION, uid);
  await setDoc(
    userDocRef,
    /** @type {UserSchema} */
    {
      profiles: [await createProfile()],
      autocompleteHistory: [],
      /** @type {UserSettings} */
      settings: {
        widgets: [],
        encryptData: false,
        mode: "default",
        keyboardShortcuts: {},
        mirrorHistoryToBrowser: false,
      },
    }
  );
}
