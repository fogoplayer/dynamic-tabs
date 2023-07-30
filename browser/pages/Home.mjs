import { html } from "../libs/haunted@4.8.3.js";
import defineHaunted from "../services/haunted-define.mjs";

function Home() {
  return html`<header><h1>Dynamic Tabs Browser</h1></header>
    <main>Welcome to my app!</main>`;
}

export default defineHaunted("home-", Home);
