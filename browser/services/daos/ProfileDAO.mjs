/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../auth.mjs").User} User */
/** @typedef {import("./SessionDAO.mjs").SessionData} SessionData */
import { addDoc, updateDoc } from "../../libs/firebase/9.7.0/firebase-firestore.js";
import { getCurrentUser } from "../auth.mjs";
import { collectionRef, docRef } from "../firestore.mjs";
import { createSession } from "./SessionDAO.mjs";
import { USER_COLLECTION } from "./UserDAO.mjs";

const { uid } = /** @type {User} */ (getCurrentUser());
export const PROFILES_COLLECTION = "profiles"

/**
 * @typedef {{
 *  name: string;
 *  sessions: DocumentReference[];
 *  pinnedTab: DocumentReference[];
 * }} ProfileSchema
 */

/**
 * @typedef {Omit<ProfileSchema, "windows"> & {
*  windows: SessionData[]
* }} ProfileData
*/

export async function createProfile() {
  const profileRef = await addDoc(
    collectionRef(`${USER_COLLECTION}/${uid}/profiles`),
    /** @type {Profile} */
    {
      name: "New Profile",
      sessions: [],
      pinnedTabs: [],
    }
  );
  await createSession(profileRef)
  return profileRef;
}

/**
 * 
 * @param {string} profileId 
 * @param {Partial<ProfileSchema>} data 
 * @returns 
 */
export async function updateProfile(profileId, data) {
  return await updateDoc(docRef(`${USER_COLLECTION}/${uid}/${PROFILES_COLLECTION}/`, profileId), data);
}
