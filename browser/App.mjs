import "./libs/pwaupdate.js";
import { html, css, LitElement } from "./libs/lit-all@2.7.6.js";
import globalCss from "./global-styles/global.css.mjs";

import Home from "./pages/Home.mjs";
import { component } from "./libs/haunted@4.8.3.js";

// Add global styles to head for resets and fonts
const style = document.createElement("style");
style.textContent = globalCss.cssText;
document.head.appendChild(style);

export default class App extends LitElement {
  static properties = {
    currentPage: { type: Object, state: true },
  };

  constructor() {
    super();
    page.base("/browser");
    this.createRoute("/", Home);
    page.start();

    /** @type {HTMLElement} */
    this.currentPage;
  }

  /**
   * Creates a route for the given pattern and associates it with a custom web component.
   *
   * @param {string} pattern the URL pattern to match for the route.
   * @param {unknown} element the component class to be instantiated when the route is activated.
   * @param {string?} title the title to display in the URL bar
   * @returns {void}
   */
  createRoute(pattern, element, title = "Dynamic Tabs Browser") {
    page(pattern, context => {
      // @ts-ignore
      this.currentPage = document.createElement("home-");
    });
  }

  render() {
    return this.currentPage;
  }

  static styles = [globalCss, css``];
}

customElements.define("app-", App);
