/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../../libs/firebase/9.7.0/firebase-auth.js").User} User */
/** @typedef {import("./WidgetDAO.mjs").WidgetSettingsData} WidgetSettingsData */
/** @typedef {import("./ProfileDAO.mjs").ProfileData} ProfileData */
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
import { createProfile, getProfile } from "./ProfileDAO.mjs";
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
 * @typedef {Omit<UserSchema, "settings" | "profiles"> & {
 *  settings: UserSettingsData;
 *  profiles: ProfileData[];
 * }} UserData
 */

/**
 * @typedef {{
 *  widgets: DocumentReference[];
 *  encryptData: boolean;
 *  mode: "ios" | "md" | "default"
 *  newTabPage: string;
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
 * @typedef {Omit<UserSettingsSchema, "widgets"> & {
 *  widgets: WidgetSettingsData[];
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
      frames: [],
    }),
    createWidget({ tag: "sessions-widget", label: "sessions", position: "left" }),
    createWidget({ tag: "tabs-widget", label: "tabs", position: "top" }),
  ]);
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
        newTabPage: "https://tab.gladly.io/newtab/",
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

/**
 *
 * @param {(data: UserSettingsData) => void} callback
 * @returns {Promise<UserSettingsData>}
 */
export async function watchUserSettings(callback) {
  return await new Promise((res, rej) => {
    authStateChanged((userData) => {
      const { uid } = /** @type {User} */ (getCurrentUser());
      watchDocData(docRef(USER_COLLECTION, uid), async (/** @type {UserSchema} */ userData) => {
        // @ts-ignore
        const userSettings = /** @type {UserSettingsData} */ (
          Object.assign(userData.settings, {
            widgets: await Promise.all(userData.settings.widgets.map(async (widgetRef) => await getDocData(widgetRef))),
          })
        );
        res(userSettings);
        callback(userSettings);
      });
    });
  });
}

/**
 *
 * @param {(data: UserData) => void} callback
 */
export async function watchUserData(callback) {
  authStateChanged((userData) => {
    const { uid } = /** @type {User} */ (getCurrentUser());
    watchDocData(docRef(USER_COLLECTION, uid), async (/** @type {UserSchema} */ userData) => {
      // @ts-ignore
      const newUserData = /** @type {UserData} */ (userData);
      newUserData.settings = await watchUserSettings(() => {});
      newUserData.profiles = await Promise.all(
        userData.profiles.map(async (profileRef) => await getProfile(profileRef))
      );
      callback(newUserData);
    });
  });
}
