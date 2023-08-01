import { LitElement, html, css } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import userSettings from "../services/user-settings.mjs";
import "../components/TabsWidget.mjs";
import "../components/SessionsWidget.mjs";
import "../components/IframesWidget.mjs";

export default class Home extends LitElement {
  render() {
    return html`
      <iframes-widget position="right">
        <sessions-widget position="right">
          <tabs-widget position="top">
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
          </tabs-widget>
        </sessions-widget>
      </iframes-widget>
    `;
  }

  // wrappedLayers() {
  //   /** @type {LitElement | undefined} */
  //   let wrappedLayers;
  //   for (let i = userSettings.widgets.length; i > 0; i--) {
  //     const { element } = userSettings.widgets[i - 1];
  //     /** @type {LitElement} */
  //     const Element = new element();
  //     Element.appendChild(wrappedLayers); // html`${wrappedLayers}`;
  //     debugger;
  //     wrappedLayers = Element;
  //   }
  //   return wrappedLayers;
  // }

  dropdownOptions() {
    return html`<ion-select-option value="top">Top</ion-select-option>
      <ion-select-option value="bottom">Bottom</ion-select-option>
      <ion-select-option value="left">Left</ion-select-option>
      <ion-select-option value="right">Right</ion-select-option>
      <ion-select-option value="none">None</ion-select-option>`;
  }

  static styles = [
    globalCss,
    css`
      .layer {
        display: flex;
        flex-wrap: nowrap;
      }

      .layer > :first-child {
        flex: 0;
      }

      .layer:has(> .left) {
        flex-direction: row;
      }

      .layer:has(> .right) {
        flex-direction: row-reverse;
      }

      .layer:has(> .top) {
        flex-direction: column;
      }

      .layer:has(> .bottom) {
        flex-direction: column-reverse;
      }

      ion-list {
        max-width: var(--limited-width);
        margin-block: auto;
      }
    `,
  ];
}

customElements.define("home-", Home);
