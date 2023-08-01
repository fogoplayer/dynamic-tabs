/** @typedef {import("../services/user-settings.mjs").UserSettings} UserSettings */
import { LitElement, html, css, render } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import { getUserSettings } from "../services/user-settings.mjs";
// import "../components/TabsWidget.mjs";
// import "../components/SessionsWidget.mjs";
// import "../components/IframesWidget.mjs";
// import "../components/Webview.mjs";
import WebView from "../components/Webview.mjs";

export default class Home extends LitElement {
  static properties = {
    widgets: { type: Object, state: true },
  };

  constructor() {
    super();
    getUserSettings(({ widgets }) => (this.widgets = widgets));
  }

  render() {
    // Render layers dynamically in order
    const [{ element: topLayer, position }, ...others] = this.widgets;
    let renderRoot = new topLayer(position);

    // collapse array into a bunch of nested layer elements
    const currentElement = others.reduce(
      /**
       *
       * @param {UserSettings["widgets"][number]} prevLayer
       * @param {UserSettings["widgets"][number]} currLayer
       * @returns
       */
      (prevLayer, currLayer) => {
        const { element, position } = currLayer;
        prevLayer.innerHTML += new element(position).outerHTML;
        return /** @type {HTMLElement} */ (prevLayer.lastElementChild);
      },
      renderRoot
    );

    // Render other contents
    currentElement.innerHTML += new WebView().outerHTML;

    return renderRoot;
  }

  static styles = [globalCss, css``];
}

customElements.define("home-", Home);
