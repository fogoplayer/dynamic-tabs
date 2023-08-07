/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
import { addDoc } from "firebase/firestore";
import { collectionRef } from "../firestore.mjs";

/**
 * @typedef {{
 *  name: string;
 *  icon: string;
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
  const tabRef = await addDoc(collectionRef(`${windowRef.path}/windows`), {
    name: "New Window",
    icon: "",
    tabs: [],
  });
  return tabRef;
}
