/** @typedef {import("../services/user-settings.mjs").UserSettings} UserSettings */
import { LitElement, html, css, render } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import userSettings from "../services/user-settings.mjs";
// import "../components/TabsWidget.mjs";
// import "../components/SessionsWidget.mjs";
// import "../components/IframesWidget.mjs";
// import "../components/Webview.mjs";
import WebView from "../components/Webview.mjs";
import WidgetLayer from "../components/WidgetLayer.mjs";

export default class Home extends LitElement {
  render() {
    // Render layers dynamically in order
    const [{ element: topLayer, position }, ...others] = userSettings.widgets;
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
