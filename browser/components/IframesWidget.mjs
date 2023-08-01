import { LitElement, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class IframesWidget extends WidgetLayer {
  widget() {
    const tabs = ["", "", "", "", "", "", "", ""];
    return html`<nav slot="widget" class="left">${tabs.map((tab) => html`<div>IFRAME</div>`)}</nav>`;
  }
}

customElements.define("iframes-widget", IframesWidget);
