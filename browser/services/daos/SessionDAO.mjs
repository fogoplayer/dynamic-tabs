/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../auth.mjs").User} User */
/** @typedef {import("./WindowDAO.mjs").WindowData} WindowData */
/**
 * @template T
 * @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").WithFieldValue<T>} WithFieldValue<T>
 */
import { addDoc, updateDoc } from "../../libs/firebase/9.7.0/firebase-firestore.js";
import { collectionRef, docRef, getDocData, push } from "../firestore.mjs";
import { USER_COLLECTION } from "./UserDAO.mjs";
import { getCurrentUser } from "../auth.mjs";
import { PROFILES_COLLECTION } from "./ProfileDAO.mjs";
import { createWindow, getWindow } from "./WindowDAO.mjs";

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
  updateSession(sessionRef, {
    windows: push(await createWindow(sessionRef)),
  });
  return sessionRef;
}

/**
 *
 * @param {DocumentReference} sessionRef
 * @param {Partial<WithFieldValue<SessionSchema>>} data
 * @returns
 */
export async function updateSession(sessionRef, data) {
  return await updateDoc(sessionRef, data);
}

/**
 * @param {DocumentReference} ref
 * @returns {Promise<SessionData>}
 */
export async function getSession(ref) {
  // @ts-ignore
  const rawSessionData = /** @type {SessionSchema} */ (await getDocData(ref));
  // @ts-ignore
  return /** @type {SessionData} */ (
    Object.assign(rawSessionData, {
      windows: await Promise.all(rawSessionData.windows.map((ref) => getWindow(ref))),
    })
  );
}
