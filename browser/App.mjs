import "./libs/pwaupdate.js";
import { css, LitElement } from "./libs/lit-all@2.7.6.js";
import "https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js";
import "https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js";
import globalCss from "./global-styles/global.css.mjs";

import Home from "./pages/Home.mjs";
import SignUp from "./pages/SignUp.mjs";
import LogIn from "./pages/LogIn.mjs";
import ForgotPassword from "./pages/ForgotPassword.mjs";
import { watchUserSettings } from "./services/daos/UserDAO.mjs";

// Add global styles to head for resets and fonts
const style = document.createElement("style");
style.textContent = globalCss.cssText;
document.head.appendChild(style);

window.Ionic = {
  config: { mode: "ios" },
  // config: { mode: "md" },
};

// Config Ionic
watchUserSettings(({ mode }) => {
  window.Ionic = {
    config: { mode },
  };
});

export default class App extends LitElement {
  static properties = {
    currentPage: { type: Object, state: true },
  };

  constructor() {
    super();
    // page.base("/browser");
    this.createRoute("/", Home);
    this.createRoute("/log-in", LogIn);
    this.createRoute("/sign-up", SignUp);
    this.createRoute("/forgot-password", ForgotPassword);
    page.start();
  }

  /**
   * Creates a route for the given pattern and associates it with a custom web component.
   *
   * @param {string} pattern the URL pattern to match for the route.
   * @param {new (context: Context) => LitElement} component the component class to be instantiated when the route is activated.
   * @param {string} title the title to display in the URL bar
   * @returns {void}
   */
  createRoute(pattern, component, title = "Dynamic Tabs Browser") {
    document.title = title;
    page(pattern, (context) => {
      this.currentPage = new component(context);
    });
  }

  render() {
    return this.currentPage;
  }

  static styles = [globalCss, css``];
}

customElements.define("app-", App);
