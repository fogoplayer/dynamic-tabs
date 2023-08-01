import globalCss from "../global-styles/global.css.mjs";
import { LitElement, css, html } from "../libs/lit-all@2.7.6.js";

/** @abstract */
export default class WidgetLayer extends LitElement {
  static properties = {
    position: { type: String, reflect: true },
  };

  constructor() {
    super();
    /** @type {"top" | "bottom" | "left" | "right" | "none"} */
    this.position;
  }

  /** @param {UpdatedDiff} diff */
  updated(diff) {
    if (diff.has("position")) {
      this.classList.remove("top", "bottom", "left", "right", "none");
      this.classList.add(this.position);
    }
  }

  render() {
    return html`
      ${this.widget()}
      <slot></slot>
    `;
  }

  static label = "This widget has not been labeled";

  /**
   * The widget to be displayed alongside the slotted content.
   * @type {()=> ReturnType<html>} widget
   * @abstract
   */
  widget() {
    throw new Error("WidgetLayer is an abstract class that must be extended to be implemented");
  }

  static styles = [
    globalCss,
    css`
      :host {
        display: flex;
        flex-wrap: nowrap;
      }

      :host ::slotted(*) {
        outline: 1px solid red;
        flex: 1;
      }

      :host > :first-child {
        flex: 0;
      }

      :host(.left) {
        flex-direction: row;
      }

      :host(.right) {
        flex-direction: row-reverse;
      }

      :host(.top) {
        flex-direction: column;
      }

      :host(.bottom) {
        flex-direction: column-reverse;
      }

      ion-list {
        max-width: var(--limited-width);
        margin-block: auto;
      }
    `,
  ];
}
