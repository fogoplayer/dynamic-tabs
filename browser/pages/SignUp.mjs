import { LitElement, html, css } from "../libs/lit-all@2.7.6.js";
import globalCss from "../global-styles/global.css.mjs";
import { authStateChanged, emailAndPasswordSignUp } from "../services/auth.mjs";
// import {
//   createUserData,
//   getUserByUsername,
// } from "../services/daos/UserDAO.mjs";

export default class SignUp extends LitElement {
  static properties = {
    email: { type: String, state: true },
    password: { type: String, state: true },
    errorMessage: { type: String, state: true },
    query: { type: Object, state: true },
  };

  /**
   * @param {Context} context
   */
  constructor(context) {
    super();
    this.email = "";
    this.password = "";
    /** @type {{ [key: string]: string}} */
    this.query = {};
    context.querystring.split("&").forEach((query) => {
      const [name, ...value] = query.split("=");
      this.query[name] = value.join("=");
    });
  }

  /**
   * Sign up the user on form submission
   * @param {HTMLEvent} e
   */
  async signUp(e) {
    try {
      e.preventDefault();

      await emailAndPasswordSignUp(this.email.trim(), this.password.trim());
      authStateChanged((user) => {
        if (!user) throw new Error("There was an issue signing up");
        // createUserData(user, this.username.trim());
        page(this.query.redirect ?? "/");
      });
    } catch (e) {
      if (e instanceof Error) this.errorMessage = e.message;
      else this.errorMessage = String(e);
    }
  }

  render() {
    return html`
      <main>
        <form @submit=${this.signUp}>
          <label>
            Email
            <input
              type="email"
              @change=${(/** @type {HTMLInputEvent} */ e) => (this.email = e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              @change=${(/** @type {HTMLInputEvent} */ e) => (this.password = e.target.value)}
              required
            />
          </label>
          ${this.errorMessage && html`<p class="error-message">${this.errorMessage}</p>`}
          <button class="button">Sign Up</button>
          <p>
            Already have an account?
            <a href="/login${location.search}">Log in</a>
          </p>
        </form>
      </main>
    `;
  }

  static styles = [
    globalCss,
    css`
      main {
        max-width: var(--limited-width);
        margin-inline: auto;
      }

      main form label input,
      main form button {
        display: inline-block;
        margin-block-end: 1em;
      }

      main form button {
        margin-inline: auto;
      }

      main form p {
        text-align: center;
      }

      .error-message {
        color: var(--red);
        margin-block-end: 1em;
      }
    `,
  ];
}

customElements.define("sign-up", SignUp);
