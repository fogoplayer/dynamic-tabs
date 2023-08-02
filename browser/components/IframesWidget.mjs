import { css, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class IframesWidget extends WidgetLayer {
  static label = "Side Panel";

  widget() {
    return html` <section>
      <ion-segment value="default">
        <ion-segment-button value="default">
          <ion-label>Default</ion-label>
        </ion-segment-button>
        <ion-segment-button value="segment">
          <ion-label>Segment</ion-label>
        </ion-segment-button>
      </ion-segment>
      <iframe src="https://zarinloosli.com" frameborder="0"></iframe>
    </section>`;
  }

  static styles = [
    ...WidgetLayer.styles,
    css`
      :host > :first-child {
        background-color: lightblue;
      }

      section {
        flex-basis: 30em;

        display: flex;
        flex-direction: inherit;
        align-items: stretch;

        position: static;
        width: unset;
        height: 100%;
      }

      :host(.inline) ion-segment {
        display: flex;
        flex-direction: column;
        flex-basis: 20em;
        justify-content: flex-start;
      }
    `,
  ];
}

customElements.define("iframes-widget", IframesWidget);
