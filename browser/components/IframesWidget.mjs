import { css, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class IframesWidget extends WidgetLayer {
  static label = "Side Panel";

  widget() {
    return html`<section>
      <nav>
        <ion-segment value="default">
          <ion-segment-button value="default">
            <ion-label>Default</ion-label>
          </ion-segment-button>
          <ion-segment-button value="segment">
            <ion-label>Segment</ion-label>
          </ion-segment-button>
        </ion-segment>
        <ion-button fill="clear">
          <ion-icon name="settings-outline"></ion-icon>
        </ion-button>
      </nav>

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

      section nav {
        display: flex;
      }

      section ion-segment {
        flex: 1;
        flex-basis: fit-content;

        display: flex;
        flex-direction: inherit;
        justify-content: flex-start;
        align-items: center;

        padding: 0.25em;
      }

      section iframe {
        flex: 1;
      }

      :host(.inline) nav {
        flex-direction: column;
      }

      :host(.block) nav {
        flex-direction: row;
      }
    `,
  ];
}

customElements.define("iframes-widget", IframesWidget);
