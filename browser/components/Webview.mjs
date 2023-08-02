import { LitElement, css, html } from "../libs/lit-all@2.7.6.js";
import { getUserSettings, updateSetting } from "../services/user-settings.mjs";

export default class WebView extends LitElement {
  static properties = {
    widgets: { type: Object, state: true },
  };

  constructor() {
    super();
    getUserSettings(({ widgets }) => (this.widgets = widgets));
  }

  render() {
    return html`
      <main>
        Main content
        <!-- <iframe src="" frameborder="0"></iframe> -->
        <div class="center">
          <ion-list inset="true">
            ${this.widgets.map(
              (panel, i) =>
                html`<ion-item inset="true" lines="inset">
                  <ion-select
                    label="${panel.element.label}"
                    label-placement="fixed"
                    interface="popover"
                    value="${panel.position}"
                    @ionChange=${async (e) => {
                      console.log(e);
                      this.widgets[i].position = e.detail.value;
                      updateSetting("widgets", [...this.widgets]);
                    }}
                  >
                    ${this.dropdownOptions()}
                  </ion-select>
                </ion-item>`
            )}
          </ion-list>
        </div>
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

  static styles = [
    css`
      .center {
        max-width: var(--limited-width);
        margin-left: auto;
        margin-right: auto;
      }
    `,
  ];
}

customElements.define("web-view", WebView);
