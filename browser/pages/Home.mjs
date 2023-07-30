import { component, virtual, html } from "../libs/haunted@4.8.3.js";
import globalCss from "../global-styles/global.css.mjs";

// export default class Home extends LitElement {
//   static get properties() {
//     return {};
//   }

//   constructor() {
//     super();
//   }

//   render() {
//     return html`<header><h1>Dynamic Tabs Browser</h1></header>
//       <main>Welcome to my app!</main>`;
//   }

//   static styles = [globalCss, css``];
// }

function Home() {
  return html`<header><h1>Dynamic Tabs Browser</h1></header>
    <main>Welcome to my app!</main>`;
}

export default virtual(Home);
customElements.define("home-", component(Home));
