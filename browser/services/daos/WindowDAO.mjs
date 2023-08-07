/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("./TabsDAO.mjs").TabData} TabData */
import { addDoc } from "firebase/firestore";
import { collectionRef } from "../firestore.mjs";

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
  return windowRef;
}
