/** @typedef {import("../libs/lit-all@2.7.6.js").TemplateResult} TemplateResult */
import { html, useMemo, useState } from "../libs/haunted@4.8.3.js";
import { map } from "../libs/lit-all@2.7.6.js";
import defineHaunted from "../services/haunted-define.mjs";
import "https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js";
import "https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js";
import UserSettings from "../services/user-settings.mjs";

function Home() {
  const [layers, setLayers] = useState(/** @type {string[]} */ ([]));
  setLayers(["nav", "section", "div", "main"]);

  const options = useMemo(
    () =>
      html`<ion-select-option value="top">Top</ion-select-option>
        <ion-select-option value="bottom">Bottom</ion-select-option>
        <ion-select-option value="left">Left</ion-select-option>
        <ion-select-option value="right">Right</ion-select-option>
        <ion-select-option value="none">None</ion-select-option>`,
    []
  );

  const _html = html`
    <div class="layer">
      <nav class="top">Nav</nav>
      <div class="layer">
        <section class="left">section</section>
        <div class="layer">
          <div class="top">div</div>
          <div class="layer">
            <footer class="bottom">Footer</footer>
            <main>
              Main content
              <iframe src="" frameborder="0"></iframe>
              <ion-list>
                ${map(UserSettings.panels, panel => {
                  return "Test"; /* html`<ion-item>
                    <ion-select label="${panel.element}" label-placement="fixed" interface="popover" value="left">
                      ${options}
                    </ion-select>
                  </ion-item>`; */
                })}
              </ion-list>
            </main>
          </div>
        </div>
      </div>
    </div>
    <style>
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

      .layer :has(> .bottom) {
        flex-direction: column-reverse;
      }

      ion-list {
        max-width: var(--limited-width);
        margin: auto;
      }
    </style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
  `;
  return _html;
}

function Options() {}

export default defineHaunted("home-", Home);
