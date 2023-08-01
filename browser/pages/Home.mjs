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
    const [{ element: topLayer }, ...others] = userSettings.widgets;
    let renderRoot = new topLayer();

    // collapse array into a bunch of nested elements

    const currentElement = others.reduce(
      /**
       *
       * @param {UserSettings["widgets"][number]} prevLayer
       * @param {UserSettings["widgets"][number]} currLayer
       * @returns
       */
      (prevLayer, currLayer) => {
        prevLayer.innerHTML += new currLayer.element().outerHTML;
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
