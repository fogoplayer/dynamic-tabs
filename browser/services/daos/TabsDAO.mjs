/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
import { addDoc } from "firebase/firestore";
import { collectionRef } from "../firestore.mjs";

/**
 * @typedef {{
 *  name: string;
 *  icon: string;
 *  windows: DocumentReference[]
 * }} SessionSchema
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
