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
  }

  widget(props) {
    return html`<nav>
      <ion-segment
        class="tab-bar"
        value="0"
        @ionChange=${(e) => {
          console.log(e.target.value);
          this.selectedFrame = parseInt(e.target.value);
        }}
      >
        ${[
          this.tab("https://music.youtube.com", 0, "Youtube Music"),
          this.tab("https://app.shortwave.com", 1, "Shortwave"),
        ]}
        ${this.settings?.tabs?.length
          ? this.settings?.tabs.map((tab, i) => {
              return this.tab("tab", i);
            })
          : this.newTab()}
        <ion-segment-button class="ntp" layout="icon-start">
          <ion-icon name="add"></ion-icon>
        </ion-segment-button>
      </ion-segment>
    </nav>`;
  }

  /**
   * @param {string} url The URL being visited by the tab
   * @param {number} index where the tab is at
   * @param {string} name the tab title
   * @param {string} icon an optional favicon override
   * @returns {ReturnType<html>}
   */
  tab(url, index, name = "", icon = "") {
    return html`<ion-segment-button class="tab" value=${index} layout="icon-start">
      <ion-label
        ><ion-avatar> <img src="${url}/favicon.ico" alt="The site icon of ${url}" class="frame-icon" /> </ion-avatar>
        <span>${name || url}</span>
      </ion-label>
    </ion-segment-button> `;
  }

  newTab() {
    return html`<ion-segment-button class="tab" value="${0}">
      <ion-label>
        <ion-icon name="add-circle-outline"></ion-icon>
        New Tab Page
      </ion-label>
    </ion-segment-button>`;
  }

  static styles = [
    ...WidgetLayer.styles,
    css`
      :host > :first-child {
        background-color: pink;
      }

      .tab-bar {
        display: flex;
        justify-content: flex-start;
        --background: transparent;
      }

      .tab ion-label {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.25em;
        align-items: center;
        transition: grid-template-columns var(--collapse-animation-duration);
      }

      .tab :is(ion-icon, ion-avatar) {
        width: 1em;
        height: 1em;
      }

      .ntp {
        min-width: fit-content;
      }
    `,
  ];
}

customElements.define("tabs-widget", TabsWidget);
