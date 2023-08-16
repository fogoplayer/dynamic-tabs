/** @typedef {import("../services/daos/WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
/** @typedef {import("../components/WidgetLayer.mjs").default} WidgetLayer */
/** @typedef {import("../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
import { LitElement, css } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import "../components/IframesWidget.mjs";
import "../components/SessionsWidget.mjs";
import "../components/TabsWidget.mjs";

import WebView from "../components/Webview.mjs";
import { watchUserData, watchUserSettings } from "../services/daos/UserDAO.mjs";

/**
 * @typedef {{
 *  profile: DocumentReference | null;
 *  session: DocumentReference | null;
 *  window: DocumentReference | null;
 *  tab: DocumentReference | null;
 * }} BrowserState
 */

export default class Browser extends LitElement {
  static properties = {
    widgets: { type: Array, state: true },
    widgetEls: { type: Array, state: true },
  };

  constructor() {
    super();
    watchUserSettings(({ widgets }) => (this.widgets = widgets));
    watchUserData(({ profiles }) => {
      console.log(profiles);
    });

    /** @type {WidgetLayer[]} */
    this.widgetEls = [];

    /** @type {BrowserState} */
    this.state = JSON.parse(
      localStorage.getItem("browser-state") || `{ "profile": null, "session": null, "window": null, "tab": null}`
    );
  }

  /**
   * @param {UpdatedDiff} diff
   */
  update(diff) {
    if (diff.has("widgetEls")) {
      this.widgetEls.forEach((widgetEl, i) => (widgetEl.settingsRef = this.widgets[i].ref));
    }
  }

  render() {
    if (!this.widgets?.length) return new WebView();

    // Render layers dynamically in order
    const [topLayer, ...others] = this.widgets;
    let renderRoot = /** @type {WidgetLayer} */ (document.createElement(topLayer.tag));
    this.widgetEls.push(renderRoot);

    // collapse array into a bunch of nested layer elements
    const currentElement = others.reduce(
      /**
       *
       * @param {HTMLElement} prevLayer
       * @param {WidgetSettingSchema} currLayer
       * @param {number} index
       * @returns {WidgetLayer}
       */
      (prevLayer, currLayer, index) => {
        prevLayer.innerHTML += document.createElement(currLayer.tag).outerHTML;
        this.widgetEls.push(/** @type {WidgetLayer} */ (prevLayer.lastElementChild));
        return /** @type {WidgetLayer} */ (prevLayer.lastElementChild);
      },
      renderRoot
    );

    // Render other contents
    currentElement.innerHTML += new WebView().outerHTML;
    debugger;
    return renderRoot;
  }

  static styles = [
    globalCss,
    css`
      :host > * {
        height: var(--100dvh);
      }
    `,
  ];
}

customElements.define("browser-", Browser);
