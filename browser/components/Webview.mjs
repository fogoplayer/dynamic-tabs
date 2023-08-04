import { LitElement, css, html } from "../libs/lit-all@2.7.6.js";
import { getUserSettings, updateSetting } from "../services/user-settings.mjs";

export default class WebView extends LitElement {
  static properties = {
    widgets: { type: Object, state: true },
    mode: { type: String, state: true },
  };

  constructor() {
    super();
    getUserSettings(({ widgets, mode }) => {
      this.widgets = widgets;
      this.mode = mode;
    });
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
            <ion-item>
              <ion-select
                label="mode"
                label-placement="fixed"
                interface="popover"
                value="${this.mode}"
                @ionChange=${async (e) => {
                  console.log(e);
                  this.mode = e.detail.value;
                  updateSetting("mode", this.mode);
                  document.documentElement.classList.toggle("ios");
                }}
              >
                <ion-select-option value="ios">iOS</ion-select-option>
                <ion-select-option value="md">MD</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
          <a href="./sign-up">
            <ion-button>Sign Up</ion-button>
          </a>
          <a href="./log-in">
            <ion-button>Log In</ion-button>
          </a>
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
