import { LitElement, css, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class IframesWidget extends WidgetLayer {
  static label = "Side Panel";

  widget() {
    const tabs = ["", "", "", "", "", "", "", ""];
    return html`<nav slot="widget" class="left">${tabs.map((tab) => html`<div>IFRAME</div>`)}</nav>`;
  }

  static styles = [
    ...WidgetLayer.styles,
    css`
      :host > :first-child {
        background-color: lightblue;
      }
    `,
  ];
}

customElements.define("iframes-widget", IframesWidget);
