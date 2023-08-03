/** @typedef {import("../libs/lit-all@2.7.6.js").Ref} Ref */
import globalCss from "../global-styles/global.css.mjs";
import { LitElement, createRef, css, html, ref } from "../libs/lit-all@2.7.6.js";

/** @abstract */
export default class WidgetLayer extends LitElement {
  static properties = {
    position: { type: String, reflect: true },
    settings: {
      type: Object,
      reflect: true,
      /**
       * @param {WidgetLayer["settings"]} newVal
       * @param {WidgetLayer["settings"]} oldVal
       */
      hasChanged(newVal, oldVal) {
        return !(JSON.stringify(newVal) === JSON.stringify(oldVal));
      },
    },
  };

  constructor() {
    super();
    /** @type {"top" | "bottom" | "left" | "right" | "none"} */
    this.position;

    /**
     * @type {{
     *  position: "top" | "bottom" | "left" | "right" | "none";
     *  mode: "hidden" | "expanding" | "minimized" | "visible";
     *  [key: string]: unknown | undefined
     * }}
     */
    this.settings = {
      /** @type {WidgetLayer["settings"]["position"]} */
      position: "left",

      /** @type {WidgetLayer["settings"]["mode"]} */
      mode: "visible",
    };
  }

  /** @type {Ref} */
  settingsModal = createRef();

  /** @param {UpdatedDiff} diff */
  updated(diff) {
    // console.log("Widget:", this.label, this.settings, diff.get("settings"));

    if (diff.has("settings")) {
      const oldSettings = /** @type {WidgetLayer["settings"]} */ (diff.get("settings"));
      if (this.settings.position !== oldSettings?.position) {
        this.classList.remove("top", "bottom", "left", "right", "none");
        this.classList.add(this.settings.position);

        this.classList.remove("inline", "block");
        if (this.settings.position === "top" || this.settings.position === "bottom") {
          this.classList.add("block");
        } else {
          this.classList.add("inline");
        }
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
