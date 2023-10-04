/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/**
 * @template T
 * @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").WithFieldValue<T>} WithFieldValue<T>
 */
import { addDoc, updateDoc } from "../../libs/firebase/9.7.0/firebase-firestore.js";
import { collectionRef, getDocData } from "../firestore.mjs";

/**
 * @typedef {{
 *  name: string;
 *  icon: string;
 *  pinned: boolean;
 *  history: DocumentReference[]
 * }} TabSchema
 */

/**
 * @typedef {{
 *  timestamp: Date;
 *  url: string;
 * }} HistoryEntry
 */

/**
 * @typedef {Omit<TabSchema, "history"> & {
 *  history: HistoryEntry[];
 *  ref: DocumentReference;
 * }} TabData
 */

/**
 *
 * @param {DocumentReference} windowRef
 * @returns
 */
export async function createTab(windowRef) {
  const tabRef = await addDoc(
    collectionRef(`${windowRef.path}/tabs`),
    /** @type {TabSchema} */
    ({
      name: "",
      icon: "",
      pinned: false,
      history: [],
    })
  );
  return tabRef;
}

/**
 *
 * @param {DocumentReference} tabRef
 * @param {Partial<TabSchema>} data
 * @returns
 */
export async function updateTab(tabRef, data) {
  return await updateDoc(tabRef, data);
}

/**
 * @param {DocumentReference} ref
 * @returns {Promise<TabSchema>}
 */
export async function getTab(ref) {
  // @ts-ignore
  return /** @type {TabSchema} */ (await getDocData(ref));
}
