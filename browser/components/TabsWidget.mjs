/** @typedef {import("../services/daos/WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
/** @typedef {import("../libs/firebase/9.7.0/firebase-firestore.js")} DocumentReference */
import { css, html } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class TabsWidget extends WidgetLayer {
  static properties = {
    ...WidgetLayer.properties,
  };

  label = "Tab Bar";

  constructor() {
    super();
    /** @type {WidgetSettingSchema & { tabs: DocumentReference[]} | undefined} */
    this.settings;
    /** @type {Number} */
    this.selectedFrame = 0;
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

  widget(props) {
    return html`<nav>
      <ion-segment
        @ionChange=${(e) => {
          console.log(e.target.value);
          this.selectedFrame = parseInt(e.target.value);
        }}
      >
        ${this.settings?.tabs.map((frame, i) => {
          return html`<ion-segment-button value=${i}>
            <ion-label>
              <img src="${frame}/favicon.ico" alt="The site icon of ${frame}" class="frame-icon" />
            </ion-label>
          </ion-segment-button> `;
        })}
      </ion-segment>
      <ion-button fill="clear" @click=${this.showSettings}>
        <ion-icon name="settings-outline"></ion-icon>
      </ion-button>
    </nav>`;
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
                <ion-input
                  label="App ${i + 1}"
                  type="url"
                  ${ref(this.lastFrameInput)}
                  value=${frame}
                  @ionInput=${async (e) => {
                    const frames = [...this.settings.frames];
                    frames[i] = e.target.value;
                    this.updateWidgetSetting("frames", frames);
                    this.requestUpdate();
                  }}
                  @ionFocus=${async (e) => {
                    const frames = [...this.settings.frames];
                    frames[i] = e.target.value;
                    this.updateWidgetSetting("frames", frames);
                    this.requestUpdate();
                  }}
                ></ion-input>
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
        background-color: pink;
      }
    `,
  ];
}

customElements.define("tabs-widget", TabsWidget);
