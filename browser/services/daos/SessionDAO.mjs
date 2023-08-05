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
 * @param {DocumentReference} profileRef
 * @returns
 */
export async function createSession(profileRef) {
  const sessionRef = await addDoc(collectionRef(`${profileRef.path}/sessions`), {
    name: "New Session",
    icon: "",
    windows: [],
  });
  return sessionRef;
}
