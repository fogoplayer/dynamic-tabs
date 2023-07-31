import { LitElement, html, css } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import userSettings from "../services/user-settings.mjs";
// import TabsWidget from "../components/TabsWidget.mjs";

export default class Home extends LitElement {
  render() {
    return html`<div class="layer">
      <nav class="${userSettings.panels[0].position}">Nav</nav>
      <div class="layer">
        <section class="${userSettings.panels[1].position}">section</section>
        <div class="layer">
          <div class="${userSettings.panels[2].position}">div</div>
          <div class="layer">
            <footer class="${userSettings.panels[3].position}">Footer</footer>
            <tabs-widget>
              <main>
                Main content
                <!-- <iframe src="" frameborder="0"></iframe> -->
                <ion-list>
                  ${userSettings.panels.map(
                    (panel, i) =>
                      html`<ion-item>
                        <ion-select
                          label="${panel.element}"
                          label-placement="fixed"
                          interface="popover"
                          value="${panel.position}"
                          @ionChange=${async e => {
                            console.log(e);
                            userSettings.panels[i].position = e.detail.value;
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
          </div>
        </div>
      </div>
    </div>`;
  }

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

      .layer > * {
        outline: 1px solid red;
        flex: 1;
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
