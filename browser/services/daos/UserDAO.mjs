/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../../libs/firebase/9.7.0/firebase-auth.js").User} User */
/**
 * @template T
 * @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").WithFieldValue<T>} WithFieldValue<T>
 */
import { getCurrentUser } from "../auth.mjs";
import { collectionRef, docRef, prefixObjectKeysForNestedUpdate, setDoc, updateDoc } from "../firestore.mjs";
import { createProfile } from "./ProfileDAO.mjs";
import { createWidget } from "./WidgetDAO.mjs";

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

export async function createUserData() {
  const { uid } = /** @type {User} */ (getCurrentUser());

  const userDocRef = docRef(USER_COLLECTION, uid);

  const [initialProfile, ...initialWidgets] = await Promise.all([
    createProfile(),
    createWidget({
      tag: "iframes-widget",
      label: "iframes",
      position: "right",
    }),
    createWidget({ tag: "sessions-widget", label: "sessions", position: "left" }),
    createWidget({ tag: "tabs-widget", label: "tabs", position: "top" }),
  ]);
  debugger;
  await setDoc(
    userDocRef,
    /** @type {UserSchema} */
    {
      profiles: [initialProfile],
      autocompleteHistory: [],
      /** @type {UserSettings} */
      settings: {
        widgets: initialWidgets,
        encryptData: false,
        mode: "default",
        keyboardShortcuts: {},
        mirrorHistoryToBrowser: false,
      },
    }
  );
}

/**
 * @param {Partial<WithFieldValue<UserSettings>>} settingsDict
 */
export async function updateUserSetting(settingsDict) {
  const { uid } = /** @type {User} */ (getCurrentUser());
  const userDocRef = docRef(USER_COLLECTION, uid);

  settingsDict = prefixObjectKeysForNestedUpdate("settings.", settingsDict);
  return await updateDoc(userDocRef, settingsDict);
}
