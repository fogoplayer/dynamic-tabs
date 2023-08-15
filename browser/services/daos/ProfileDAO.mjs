/** @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../auth.mjs").User} User */
/** @typedef {import("./SessionDAO.mjs").SessionData} SessionData */
/**
 * @template T
 * @typedef {import("../../libs/firebase/9.7.0/firebase-firestore.js").WithFieldValue<T>} WithFieldValue<T>
 */
import { addDoc, updateDoc } from "../../libs/firebase/9.7.0/firebase-firestore.js";
import { getCurrentUser } from "../auth.mjs";
import { collectionRef, docRef, getDocData, push } from "../firestore.mjs";
import { createSession, getSession } from "./SessionDAO.mjs";
import { USER_COLLECTION } from "./UserDAO.mjs";

export const PROFILES_COLLECTION = "profiles";

/**
 * @typedef {{
 *  name: string;
 *  sessions: DocumentReference[];
 *  pinnedTab: DocumentReference[];
 * }} ProfileSchema
 */

/**
 * @typedef {Omit<ProfileSchema, "windows"> & {
 *  sessions: SessionData[]
 * }} ProfileData
 */

export async function createProfile() {
  const { uid } = /** @type {User} */ (getCurrentUser());

  const profileRef = await addDoc(
    collectionRef(`${USER_COLLECTION.path}/${uid}/profiles`),
    /** @type {Profile} */
    {
      name: "New Profile",
      sessions: [],
      pinnedTabs: [],
    }
  );
  updateProfile(profileRef, {
    sessions: push(await createSession(profileRef)),
  });
  return profileRef;
}

/**
 *
 * @param {DocumentReference} profileRef
 * @param {Partial<WithFieldValue<ProfileSchema>>} data
 * @returns
 */
export async function updateProfile(profileRef, data) {
  return await updateDoc(profileRef, data);
}

/**
 * @param {DocumentReference} ref
 * @returns {Promise<ProfileData>}
 */
export async function getProfile(ref) {
  // @ts-ignore
  const rawProfileData = /** @type {ProfileSchema} */ (await getDocData(ref));
  // @ts-ignore
  return /** @type {ProfileData} */ (
    Object.assign(rawProfileData, {
      tabs: await Promise.all(rawProfileData.sessions.map((ref) => getSession(ref))),
    })
  );
}
