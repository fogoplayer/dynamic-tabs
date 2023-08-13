/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../auth.mjs").User} User */
/**
 * @template T
 * @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").WithFieldValue<T>} WithFieldValue<T>
 */
import { addDoc, updateDoc } from "../../libs/firebase/9.7.0/firebase-firestore.js";
import { getCurrentUser } from "../auth.mjs";
import { collectionRef, push } from "../firestore.mjs";
import { createSession } from "./SessionDAO.mjs";
import { USER_COLLECTION, updateUserSetting } from "./UserDAO.mjs";

export const PROFILES_COLLECTION = "profiles";

/**
 * @typedef {{
 *  tag: string;
 *  label: string;
 *  position: "top" | "bottom" | "left" | "right" | "none";
 *  mode: "hidden" | "expanding" | "minimized" | "visible";
 *  [key: string]: unknown | undefined
 * }} WidgetSettingSchema
 */

/**
 *
 * @param {Partial<WidgetSettingSchema>} settings
 */
export async function createWidget(settings) {
  const { uid } = /** @type {User} */ (getCurrentUser());

  const widgetRef = await addDoc(collectionRef(`${USER_COLLECTION.path}/${uid}/widgets`), settings);
  return widgetRef;
}

/**
 *
 * @param {DocumentReference} widgetRef
 * @param {Partial<WithFieldValue<WidgetSettingSchema>>} data
 * @returns
 */
export async function updateWidget(widgetRef, data) {
  return await updateDoc(widgetRef, data);
}
