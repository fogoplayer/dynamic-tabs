/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("./TabsDAO.mjs").TabData} TabData */
/** @typedef {import("../auth.mjs").User} User */
import { addDoc, updateDoc } from "firebase/firestore";
import { collectionRef, docRef } from "../firestore.mjs";
import { USER_COLLECTION } from "./UserDAO.mjs";
import { getCurrentUser } from "../auth.mjs";
import { createTab } from "./TabsDAO.mjs";

/**
 * @typedef {{
 *  name: string;
 *  icon: string;
 *  tabs: DocumentReference[]
 * }} WindowSchema
 */

/**
 * @typedef {Omit<WindowSchema, "tabs"> & {
 *  tabs: TabData[]
 * }} WindowData
 */

const { uid } = /** @type {User} */ (getCurrentUser());
export const SESSIONS_COLLECTION = "sessions";

/**
 *
 * @param {DocumentReference} sessionRef
 * @returns
 */
export async function createWindow(sessionRef) {
  const windowRef = await addDoc(collectionRef(`${sessionRef.path}/windows`), {
    name: "New Window",
    icon: "",
    tabs: [],
  });
  await createTab(windowRef)
  return windowRef;
}

/**
 *
 * @param {DocumentReference} windowRef
 * @param {Partial<WindowSchema>} data
 * @returns
 */
export async function updateWindow(windowRef, data) {
  return await updateDoc(windowRef, data);
}
