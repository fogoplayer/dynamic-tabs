/** @typedef {import("../services/daos/WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
/** @typedef {import("../components/WidgetLayer.mjs").default} WidgetLayer */
/** @typedef {import("../libs/firebase/9.7.0/firebase-firestore.js").DocumentReference} DocumentReference */
/** @typedef {import("../services/daos/ProfileDAO.mjs").ProfileData} ProfileData */
/** @typedef {import("../services/daos/SessionDAO.mjs").SessionData} SessionData */
/** @typedef {import("../services/daos/WindowDAO.mjs").WindowData} WindowData */
/** @typedef {import("../services/daos/TabsDAO.mjs").TabData} TabData */
import { LitElement, css } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import "../components/IframesWidget.mjs";
import "../components/SessionsWidget.mjs";
import "../components/TabsWidget.mjs";
import WebView from "../components/Webview.mjs";
import { watchUserData, watchUserSettings } from "../services/daos/UserDAO.mjs";

/**
 * @typedef {{
 *  profile: ProfileData | null;
 *  session: SessionData | null;
 *  window: WindowData | null;
 *  tab: number | null;
 * }} BrowserState
 */

const BROWSER_STATE_LOCALSTORAGE_KEY = "browser-state";

export default class Browser extends LitElement {
  static properties = {
    widgets: { type: Object, state: true },
    state: { type: Object, state: true },
  };

  constructor() {
    super();
    watchUserSettings(({ widgets }) => (this.widgets = widgets));
    watchUserData(({ profiles }) => {
      if (
        this.state.profile === null ||
        this.state.session === null ||
        this.state.window === null ||
        this.state.tab === null
      ) {
        /** @type {BrowserState} */
        const newState = this.state;
        if (newState.profile === null) newState.profile = profiles[0];
        if (newState.session === null) newState.session = newState.profile.sessions[0];
        if (newState.window === null) newState.window = newState.session.windows[0];
        if (newState.tab === null) newState.tab = 0;
        this.state = { ...newState };
      }
    });

    /** @type {WidgetLayer[]} */
    this.widgetEls = [];

    /** @type {BrowserState} */
    this.state = JSON.parse(
      localStorage.getItem(BROWSER_STATE_LOCALSTORAGE_KEY) ||
        `{ "profile": null, "session": null, "window": null, "tab": null}`
    );
  }

  render() {
    if (!this.widgets?.length) return new WebView();

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

  /**
   *
   * @param {keyof BrowserState} key
   * @param {any} value
   */
  setBrowserState(key, value) {
    this.state[key] = value;
    localStorage.setItem(BROWSER_STATE_LOCALSTORAGE_KEY, JSON.stringify(this.state));
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
