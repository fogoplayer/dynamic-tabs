/** @typedef {import("../libs/lit-all@2.7.6.js").Ref} Ref */
/** @typedef {import("../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../services/daos/WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
import globalCss from "../global-styles/global.css.mjs";
import { LitElement, createRef, css, html, ref } from "../libs/lit-all@2.7.6.js";
import { updateWidget } from "../services/daos/WidgetDAO.mjs";
import { watchDocData } from "../services/firestore.mjs";

/** @abstract */
export default class WidgetLayer extends LitElement {
  /////////////////////
  // Misc Properties //
  /////////////////////

  static properties = {
    settingsRef: { type: Object },
    settings: {
      type: Object,
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
    /** @type {WidgetSettingSchema | undefined} */
    this.settings;
  }

  /** @param {UpdatedDiff} diff  */
  updated(diff) {
    if (diff.has("settingsRef")) {
      watchDocData(this.settingsRef, (settingsData) => (this.settings = settingsData));
    }

    if (diff.has("settings") && this.settings) {
      const { label, mode, position, tag, frames } = this.settings;
      // position
      if (
        /** @type {WidgetSettingSchema | undefined} */
        (diff.get("settings"))?.position !== position
      ) {
        this.classList.remove("top", "bottom", "left", "right", "none");
        this.classList.add(position);
        this.classList.remove("inline", "block");
        if (position === "top" || position === "bottom") this.classList.add("block");
        if (position === "left" || position === "right") this.classList.add("inline");
      }
    }
  }

  render() {
    if (this.settings?.position !== "none")
      return html`
        ${this.widget({ basis: `${this.settings?.basis}rem` })}
        <div class="drag-handle" @mousedown=${this.resizeOnDrag}></div>
        <ion-modal ${ref(this.settingsModal)}> ${this.settingsPage()} </ion-modal>
        <slot></slot>
      `;
    return html`<slot></slot>`;
  }

  /////////////////////
  // Abstract UI API //
  /////////////////////

  /**
   * The widget to be displayed alongside the slotted content.
   * @param {{basis?: string}} props
   * @returns {ReturnType<html>}
   * @abstract
   */
  widget(props = {}) {
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

  /////////////////////
  // Utility Methods //
  /////////////////////

  showSettings() {
    // @ts-ignore
    this.settingsModal.value?.present();
  }

  hideSettings() {
    // @ts-ignore
    this.settingsModal.value?.dismiss();
  }

  /**
   * @param {HTMLMouseEvent} event
   */
  resizeOnDrag(event) {
    const pane = /** @type {HTMLElement} */ (this.renderRoot.firstElementChild);
    console.log(pane);

    /** @type {"clientWidth" | "clientHeight"} */
    let panelStat;
    /** @type {"pageX" | "pageY"} */
    let eventStat;
    /** @type {1 | -1} */
    let inversionFactor;

    if (this.classList.contains("inline")) {
      panelStat = "clientWidth";
      eventStat = "pageX";
    } else {
      panelStat = "clientHeight";
      eventStat = "pageY";
    }

    if (this.classList.contains("right") || this.classList.contains("bottom")) {
      inversionFactor = -1;
    } else {
      inversionFactor = 1;
    }

    const initialBasis = pane[panelStat] / 16;
    let dragStart = event[eventStat];

    /** @param {MouseEvent} event */
    const drag = (event) => {
      event.preventDefault();
      pane.style.flexBasis = initialBasis + (inversionFactor * (event[eventStat] - dragStart)) / 16 + "rem";
    };

    const mouseup = () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", mouseup);
      console.log(pane.style.flexBasis);
      this.updateWidgetSetting("basis", parseFloat(pane.style.flexBasis));
    };

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", mouseup);
  }

  /**
   * @param {string} setting
   * @param {unknown} value
   */
  updateWidgetSetting(setting, value) {
    updateWidget(this.settingsRef, { [setting]: value });
  }

  ////////////
  // Styles //
  ////////////

  static styles = [
    globalCss,
    css`
      :host {
        display: flex;
        flex-wrap: nowrap;

        position: relative;
        isolation: isolate;
      }

      :host ::slotted(*) {
        flex: 1;
        z-index: -1;
      }

      :host > :first-child {
        flex-grow: 0;
        flex-shrink: 0;

        box-shadow: var(--box-shadow);
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

      .drag-handle {
        --handle-size: 0.5rem;
        flex-basis: var(--handle-size);
        background-color: transparent;
        position: relative;
      }

      .drag-handle:active {
        position: fixed;
        inset: 0;
        z-index: 1;
      }

      :host(.inline) .drag-handle {
        cursor: col-resize;
        margin-inline: calc(-1 * var(--handle-size) / 2);
      }

      :host(.block) .drag-handle {
        cursor: row-resize;
        margin-block: calc(-1 * var(--handle-size) / 2);
      }
    `,
  ];
}
