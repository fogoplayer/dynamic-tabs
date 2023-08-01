import { LitElement, html } from "../libs/lit-all@2.7.6.js";
import userSettings from "../services/user-settings.mjs";

export default class WebView extends LitElement {
  render() {
    return html`
      <main>
        Main content
        <!-- <iframe src="" frameborder="0"></iframe> -->
        <ion-list>
          ${userSettings.widgets.map(
            (panel, i) =>
              html`<ion-item>
                <ion-select
                  label="${panel.element}"
                  label-placement="fixed"
                  interface="popover"
                  value="${panel.position}"
                  @ionChange=${async (e) => {
                    console.log(e);
                    userSettings.widgets[i].position = e.detail.value;
                    await this.requestUpdate();
                    console.log(userSettings);
                  }}
                >
                  ${this.dropdownOptions()}
                </ion-select>
              </ion-item>`
          )}
        </ion-list>
      </main>
    `;
  }

  dropdownOptions() {
    return html`<ion-select-option value="top">Top</ion-select-option>
      <ion-select-option value="bottom">Bottom</ion-select-option>
      <ion-select-option value="left">Left</ion-select-option>
      <ion-select-option value="right">Right</ion-select-option>
      <ion-select-option value="none">None</ion-select-option>`;
  }
}

customElements.define("web-view", WebView);
