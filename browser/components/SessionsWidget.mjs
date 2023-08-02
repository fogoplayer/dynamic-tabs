import { css, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class SessionsWidget extends WidgetLayer {
  static label = "Sessions List";

  widget() {
    const tabs = ["", "", "", "", "", "", "", ""];
    return html`<nav slot="widget" class="left">${tabs.map(() => html`<div>SESSION</div>`)}</nav>`;
  }

  static styles = [
    ...WidgetLayer.styles,
    css`
      :host > :first-child {
        background-color: lightgreen;
      }
    `,
  ];
}

customElements.define("sessions-widget", SessionsWidget);
