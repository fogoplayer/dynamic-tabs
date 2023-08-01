import { LitElement, html, css, render } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import userSettings from "../services/user-settings.mjs";
// import "../components/TabsWidget.mjs";
// import "../components/SessionsWidget.mjs";
// import "../components/IframesWidget.mjs";
// import "../components/Webview.mjs";
import WebView from "../components/Webview.mjs";

export default class Home extends LitElement {
  render() {
    return html`
      ${this.wrappedLayers(new WebView())}
      <!-- <iframes-widget position="right">
        <sessions-widget position="right">
          <tabs-widget position="top">
            <web-view></web-view>
          </tabs-widget>
        </sessions-widget>
      </iframes-widget> -->
    `;
  }

  wrappedLayers(child) {
    const [{ element: topLayer }, ...others] = userSettings.widgets;
    let renderRoot = new topLayer();

    let currentElement = renderRoot;
    for (const { element } of others) {
      currentElement.innerHTML += new element().outerHTML;
      currentElement = /** @type {HTMLElement} */ (currentElement.lastElementChild);
    }

    currentElement.innerHTML += child.outerHTML;

    return renderRoot;
  }

  static styles = [globalCss, css``];
}

customElements.define("home-", Home);
