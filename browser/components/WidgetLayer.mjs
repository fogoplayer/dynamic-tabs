/** @typedef {import("../libs/lit-all@2.7.6.js").Ref} Ref */
import globalCss from "../global-styles/global.css.mjs";
import { LitElement, createRef, css, html, ref } from "../libs/lit-all@2.7.6.js";

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

  /** @type {Ref} */
  settingsModal = createRef();

  /** @param {UpdatedDiff} diff */
  updated(diff) {
    if (diff.has("position")) {
      this.classList.remove("top", "bottom", "left", "right", "none");
      this.classList.add(this.position);

      this.classList.remove("inline", "block");
      if (this.position === "top" || this.position === "bottom") {
        this.classList.add("block");
      } else {
        this.classList.add("inline");
      }
    }
  }

  render() {
    return html`
      ${this.widget()}
      <ion-modal ${ref(this.settingsModal)}> ${this.settingsPage()} </ion-modal>
      <slot></slot>
    `;
  }

  label = "This widget has not been labeled";

  /**
   * The widget to be displayed alongside the slotted content.
   * @type {()=> ReturnType<html>} widget
   * @abstract
   */
  widget() {
    throw new Error("WidgetLayer is an abstract class that must be extended to be implemented");
  }

  /**
   * A page allowing control of the widget's settings.
   * @type {()=> ReturnType<html>} widget
   * @abstract
   */
  settingsPage() {
    return html``;
  }

  showSettings() {
    // @ts-ignore
    this.settingsModal.value?.present();
  }

  hideSettings() {
    // @ts-ignore
    this.settingsModal.value?.dismiss();
  }

  /** @type {unknown} */
  settings = {};

  static styles = [
    globalCss,
    css`
      :host {
        display: flex;
        flex-wrap: nowrap;
      }

      :host ::slotted(*) {
        flex: 1;
      }

      :host > :first-child {
        flex-grow: 0;
        flex-shrink: 0;
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
