/** @typedef {import("../services/daos/WidgetDAO.mjs").WidgetSettingSchema} WidgetSettingSchema */
import { createRef, css, html, ref } from "../libs/lit-all@2.7.6.js";
import WidgetLayer from "./WidgetLayer.mjs";

export default class IframesWidget extends WidgetLayer {
  static properties = {
    ...WidgetLayer.properties,
    selectedFrame: { type: Number, reflect: true },
  };

  label = "App Panel";

  lastFrameInput = createRef();

  constructor() {
    super();
    /** @type {WidgetSettingSchema & { frames: string[]} | undefined} */
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
    return html`<section style="--basis: ${props.basis}">
      <nav>
        <ion-segment
          @ionChange=${(e) => {
            console.log(e.target.value);
            this.selectedFrame = parseInt(e.target.value);
          }}
        >
          ${this.settings?.frames.map((frame, i) => {
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
      </nav>
      <div class="frames">
        ${this.settings?.frames.map((frame, i) => {
          console.log(this.selectedFrame, i, this.selectedFrame === i ? "block" : "none");
          return html`<iframe
            src="${frame}"
            style="display: ${this.selectedFrame === i ? "block" : "none"}"
            frameborder="0"
          ></iframe>`;
        })}
      </div>
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
      /*//////////////////*/
      /* General Styles */
      /*//////////////////*/
      :host > :first-child {
        background-color: lightblue;
      }

      section {
        flex-basis: var(--basis);

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

      section .frames {
        flex: 1;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: stretch;
      }

      ion-segment-button {
        min-width: 2em;
      }

      .frame-icon {
        width: 1em;
        height: 1em;
      }

      /*///////////*/
      /* Positions */
      /*///////////*/

      :host(.inline) nav {
        flex-direction: column;
      }

      :host(.block) nav {
        flex-direction: row;
      }

      /*///////*/
      /* Modes */
      /*///////*/

      /* expanding */
      :host(.expanding) section .frames {
        flex: 1;

        display: grid;
        grid-template-columns: 0fr;
        grid-template-rows: 0fr;

        overflow: hidden;

        transition:
          grid-template-columns var(--collapse-animation-duration),
          grid-template-rows var(--collapse-animation-duration);
      }

      :host(.expanding) section:hover .frames {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
      }

      :host(.expanding) section iframe {
        min-width: 0;
        min-height: 0;
      }
    `,
  ];
}

customElements.define("iframes-widget", IframesWidget);
