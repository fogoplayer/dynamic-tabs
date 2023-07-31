/** @typedef {import("../libs/lit-all@2.7.6.js").TemplateResult} TemplateResult */
import { html, useState } from "../libs/haunted@4.8.3.js";
import defineHaunted from "../services/haunted-define.mjs";

function Home() {
  const [layers, setLayers] = useState(/** @type {string[]} */ ([]));
  setLayers(["nav", "section", "div", "main"]);

  return html`
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
    </style>
  `;
}

export default defineHaunted("home-", Home);
