import { css } from "../libs/lit-all@2.7.6.js";

export default css`
  :host {
    /* Theme colors */
    --theme-primary: black;
    --theme-secondary: darkgray;
    --theme-tertiary: gray --border: 1px solid var(--theme-primary);
    --box-shadow: rgba(0, 0, 0, 0.5) 0px 0em 0.25em 0.25em;

    /* Fonts */
    --serif: serif;
    --sans: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Lato", "Helvetica", "Arial", sans-serif;

    /* Units */
    --limited-width: 40rem;
    --_100dvh: 100dvh;
    --100dvh: var(--_100dvh, 100vh);
  }
`;
