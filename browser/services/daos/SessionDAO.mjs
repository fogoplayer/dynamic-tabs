/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../auth.mjs").User} User */
/** @typedef {import("./WindowDAO.mjs").WindowData} WindowData */
import { addDoc, updateDoc } from "firebase/firestore";
import { collectionRef, docRef } from "../firestore.mjs";
import { USER_COLLECTION } from "./UserDAO.mjs";
import { getCurrentUser } from "../auth.mjs";
import { PROFILES_COLLECTION } from "./ProfileDAO.mjs";
import { createWindow } from "./WindowDAO.mjs";

const { uid } = /** @type {User} */ (getCurrentUser());
export const SESSIONS_COLLECTION = "sessions";

/**
 * @typedef {{
 *  name: string;
 *  icon: string;
 *  windows: DocumentReference[]
 * }} SessionSchema
 */

/**
 * @typedef {Omit<SessionSchema, "windows"> & {
 *  windows: WindowData[]
 * }} SessionData
 */

/**
 *
 * @param {DocumentReference} profileRef
 * @returns
 */
export async function createSession(profileRef) {
  const sessionRef = await addDoc(collectionRef(`${profileRef.path}/sessions`), {
    name: "New Session",
    icon: "",
    windows: [],
  });
  await createWindow(sessionRef)
  return sessionRef;
}

/**
 *
 * @param {DocumentReference} sessionRef
 * @param {Partial<SessionSchema>} data
 * @returns
 */
export async function updateProfile(sessionRef, data) {
  return await updateDoc(sessionRef, data);
}
