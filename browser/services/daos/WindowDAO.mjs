/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("./TabsDAO.mjs").TabData} TabData */
/** @typedef {import("../auth.mjs").User} User */
/**
 * @template T
 * @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").WithFieldValue<T>} WithFieldValue<T>
 */
import { addDoc, updateDoc } from "../../libs/firebase/9.7.0/firebase-firestore.js";
import { collectionRef, docRef, getDocData, push } from "../firestore.mjs";
import { USER_COLLECTION } from "./UserDAO.mjs";
import { getCurrentUser } from "../auth.mjs";
import { createTab, getTab } from "./TabsDAO.mjs";

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

  updateWindow(windowRef, {
    tabs: push(await createTab(windowRef)),
  });
  return windowRef;
}

/**
 *
 * @param {DocumentReference} windowRef
 * @param {Partial<WithFieldValue<WindowSchema>>} data
 * @returns
 */
export async function updateWindow(windowRef, data) {
  return await updateDoc(windowRef, data);
}

/**
 * @param {DocumentReference} ref
 * @returns {Promise<WindowData>}
 */
export async function getWindow(ref) {
  // @ts-ignore
  const rawWindowData = /** @type {WindowSchema} */ (await getDocData(ref));
  // @ts-ignore
  return /** @type {WindowData} */ (
    Object.assign(rawWindowData, {
      tabs: await Promise.all(rawWindowData.tabs.map((ref) => getTab(ref))),
    })
  );
}
