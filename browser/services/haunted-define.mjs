/**
 * @template {Object} P
 * @typedef {import("../libs/haunted@4.8.3.js").Renderer<P>} Renderer
 */
import { component } from "../libs/haunted@4.8.3.js";

/**
 * Registers a Haunted.js component and returns
 * @template {Object} P
 * @param {string} tagname the tagname of the element. Must include "-"
 * @param {Renderer<P>} hauntedFunc the rendering function
 * @returns {string} the tag of the element
 */
export default function defineHaunted(tagname, hauntedFunc) {
  customElements.define(tagname, component(hauntedFunc));
  return tagname;
}
