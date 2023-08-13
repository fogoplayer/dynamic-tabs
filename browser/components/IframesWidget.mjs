/** @typedef {import("../services/daos/WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
import { createRef, css, html, ref } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class IframesWidget extends WidgetLayer {
  label = "App Panel";

  lastFrameInput = createRef();

  constructor() {
    super();
    /** @type {WidgetSettingSchema & { frames: string[]} | undefined} */
    this.settings;
  }

  /** @param {UpdatedDiff} diff  */
  updated(diff) {
    super.updated(diff);
    if (diff.has("settings")) {
      const newFrameSettings = this.settings?.frames;
      const oldFrameSettings = /** @type {IframesWidget["settings"]} */ (diff.get("settings"))?.frames;
      // TODO this doesn't respect deletion
      if (oldFrameSettings?.length !== newFrameSettings?.length) {
        // TODO check if the modal is open first
        /** @type {HTMLInputElement} */
        (this.lastFrameInput.value)?.focus();
      }
    }
  }

  widget() {
    this.showSettings();

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
        <ion-button fill="clear" @click=${this.showSettings}>
          <ion-icon name="settings-outline"></ion-icon>
        </ion-button>
      </nav>

      <iframe src="${this.settings?.frames[0]}" frameborder="0"></iframe>
    </section>`;
  }

  settingsPage() {
    return html`<ion-header>
        <ion-toolbar>
          <ion-title>${this.label} Settings</ion-title>
          <ion-buttons slot="primary">
            <ion-button @click=${this.hideSettings}>Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>Apps</h2>
        <ion-list>
          ${this.settings?.frames.map(
            (frame, i) => html`
              <ion-item>
                <ion-input label="App ${i + 1}" type="url" ${ref(this.lastFrameInput)} value=${frame}></ion-input>
              </ion-item>
            `
          )}
          <ion-item>
            <ion-input
              label="Add An App"
              type="url"
              @ionInput=${async () => {
                this.updateWidgetSetting("frames", [...(this.settings?.frames || []), "Test"]);
                this.requestUpdate();
              }}
              @ionFocus=${async () => {
                this.updateWidgetSetting("frames", [...(this.settings?.frames || []), "Test"]);
                this.requestUpdate();
              }}
            ></ion-input>
          </ion-item>
        </ion-list>
      </ion-content>`;
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
