/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../../libs/firebase/9.7.0/firebase-auth.js").User} User */
/** @typedef {import("./WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
/**
 * @template T
 * @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").WithFieldValue<T>} WithFieldValue<T>
 */
import { authStateChanged, getCurrentUser } from "../auth.mjs";
import {
  collectionRef,
  docRef,
  getDocData,
  prefixObjectKeysForNestedUpdate,
  setDoc,
  updateDoc,
  watchDocData,
} from "../firestore.mjs";
import { createProfile } from "./ProfileDAO.mjs";
import { createWidget } from "./WidgetDAO.mjs";

export const USER_COLLECTION = collectionRef("users");

/**
 * @typedef {{
 *  settings: UserSettingsSchema;
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
 * }} UserSettingsSchema
 */

/**
 * @typedef {{
 *  widgets: WidgetSettingSchema[];
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
 * }} UserSettingsData
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
      /** @type {UserSettingsSchema} */
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
 * @param {Partial<WithFieldValue<UserSettingsSchema>>} settingsDict
 */
export async function updateUserSetting(settingsDict) {
  const { uid } = /** @type {User} */ (getCurrentUser());
  const userDocRef = docRef(USER_COLLECTION, uid);

  settingsDict = prefixObjectKeysForNestedUpdate("settings.", settingsDict);
  return await updateDoc(userDocRef, settingsDict);
}

/** @param {(data: any) => void} callback  */
export async function watchUserData(callback) {
  authStateChanged(() => {
    if (!getCurrentUser()) return;
    const { uid } = /** @type {User} */ (getCurrentUser());
    watchDocData(docRef(USER_COLLECTION, uid), async ({ userData }) => {
      debugger;
      userData.settings.widgets = await Promise.all(
        userData.settings.widgets.map((widgetRef) => getDocData(widgetRef))
      );
      callback(userData);
    });
  });
}
