import { LitElement, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class SessionsWidget extends WidgetLayer {
  widget() {
    const tabs = ["", "", "", "", "", "", "", ""];
    return html`<nav slot="widget" class="left">${tabs.map(tab => html`<div>SESSION</div>`)}</nav>`;
  }
}

customElements.define("sessions-widget", SessionsWidget);
