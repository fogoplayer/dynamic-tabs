import { LitElement, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class TabsWidget extends WidgetLayer {
  widget() {
    return html`<nav slot="widget" class="left">${Array(7).map(tab => html`<div>TAB</div>`)}</nav>`;
  }
}

customElements.define("tabs-widget", TabsWidget);
