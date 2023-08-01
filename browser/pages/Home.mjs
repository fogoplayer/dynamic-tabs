import { LitElement, html, css } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import userSettings from "../services/user-settings.mjs";
import "../components/TabsWidget.mjs";
import "../components/SessionsWidget.mjs";
import "../components/IframesWidget.mjs";
import "../components/Webview.mjs";

export default class Home extends LitElement {
  render() {
    return html`
      <iframes-widget position="right">
        <sessions-widget position="right">
          <tabs-widget position="top">
            <web-view></web-view>
          </tabs-widget>
        </sessions-widget>
      </iframes-widget>
    `;
  }

  // wrappedLayers() {
  //   /** @type {LitElement | undefined} */
  //   let wrappedLayers;
  //   for (let i = userSettings.widgets.length; i > 0; i--) {
  //     const { element } = userSettings.widgets[i - 1];
  //     /** @type {LitElement} */
  //     const Element = new element();
  //     Element.appendChild(wrappedLayers); // html`${wrappedLayers}`;
  //     debugger;
  //     wrappedLayers = Element;
  //   }
  //   return wrappedLayers;
  // }

  static styles = [
    globalCss,
    css`
      .layer {
        display: flex;
        flex-wrap: nowrap;
      }

      .layer > :first-child {
        flex: 0;
      }

      .layer:has(> .left) {
        flex-direction: row;
      }

      .layer:has(> .right) {
        flex-direction: row-reverse;
      }

      .layer:has(> .top) {
        flex-direction: column;
      }

      .layer:has(> .bottom) {
        flex-direction: column-reverse;
      }

      ion-list {
        max-width: var(--limited-width);
        margin-block: auto;
      }
    `,
  ];
}

customElements.define("home-", Home);
