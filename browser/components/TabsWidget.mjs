import { LitElement, css, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class TabsWidget extends WidgetLayer {
  static label = "Tab Bar";

  widget() {
    const tabs = ["", "", "", "", "", "", "", ""];
    return html`<nav slot="widget" class="left">${tabs.map((tab) => html`<div>TAB</div>`)}</nav>`;
  }

  static styles = [
    ...WidgetLayer.styles,
    css`
      :host > :first-child {
        background-color: pink;
      }
    `,
  ];
}

customElements.define("tabs-widget", TabsWidget);
