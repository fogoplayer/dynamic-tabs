/** @typedef {import("../libs/lit-all@2.7.6.js").Ref} Ref */
/** @typedef {import("../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../services/daos/WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
import globalCss from "../global-styles/global.css.mjs";
import { LitElement, createRef, css, html, ref } from "../libs/lit-all@2.7.6.js";
import { watchDocData } from "../services/firestore.mjs";

/** @abstract */
export default class WidgetLayer extends LitElement {
  static properties = {
    settingsRef: { type: Object },
    settings: {
      type: Object,
      reflect: true,
      /**
       * @param {WidgetSettingSchema} newVal
       * @param {WidgetSettingSchema} oldVal
       */
      hasChanged(newVal, oldVal) {
        return !(JSON.stringify(newVal) === JSON.stringify(oldVal));
      },
    },
  };

  /** @type {Ref} */
  settingsModal = createRef();

  label = "This widget has not been labeled";

  constructor() {
    super();
    /** @type {DocumentReference} */
    this.settingsRef;
    /** @type {WidgetSettingSchema & {frames: string[]}} */
    this.settings;
  }

  /** @param {UpdatedDiff} diff  */
  updated(diff) {
    console.log(diff);
    if (diff.has("settingsRef")) {
      watchDocData(this.settingsRef, (settingsData) => (this.settings = settingsData));
    }
    if (diff.has("settings")) {
      const { label, mode, position, tag, frames } = this.settings;
      // position
      this.classList.remove("top", "bottom", "left", "right", "none");
      this.classList.add(this.settings.position);
    }
  }

  render() {
    return html`
      ${this.widget()}
      <ion-modal ${ref(this.settingsModal)}> ${this.settingsPage()} </ion-modal>
      <slot></slot>
    `;
  }

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

  /**
   * @param {string} setting
   * @param {unknown} value
   */
  updateWidgetSetting(setting, value) {
    // let { widgets } = getUserSettings();
    // if (widgets[this.index].settings) {
    //   widgets[this.index][setting] = value;
    // }
    // updateSetting("widgets", [...widgets]);
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
