/** @typedef {import("../services/daos/WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
/** @typedef {import("../components/WidgetLayer.mjs").default} WidgetLayer */
import { LitElement, css } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import "../components/IframesWidget.mjs";
import "../components/SessionsWidget.mjs";
import "../components/TabsWidget.mjs";

import WebView from "../components/Webview.mjs";
import { watchUserSettings } from "../services/daos/UserDAO.mjs";

export default class Home extends LitElement {
  static properties = {
    widgets: { type: Object, state: true },
  };

  constructor() {
    super();
    watchUserSettings(({ widgets }) => (this.widgets = widgets));
  }

  render() {
\    if (!this.widgets?.length) return new WebView();

    // Render layers dynamically in order
    const [topLayer, ...others] = this.widgets;
    let renderRoot = /** @type {WidgetLayer} */ (document.createElement(topLayer.tag));
    renderRoot.settingsRef = topLayer.ref;

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

        /** @type {WidgetLayer} */
        (prevLayer.lastElementChild).settingsRef = currLayer.ref;

        return /** @type {WidgetLayer} */ (prevLayer.lastElementChild);
      },
      renderRoot
    );

    // Render other contents
    currentElement.innerHTML += new WebView().outerHTML;

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

customElements.define("home-", Home);
