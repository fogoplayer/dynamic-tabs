import { css } from "../libs/lit-all@2.7.6.js";
import resetsCss from "./resets.css.mjs";
import typographyCss from "./typography.css.mjs";
import variablesCss from "./variables.css.mjs";

export default css`
  ${resetsCss}${typographyCss}${variablesCss}
  /* @import "https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css */
  
  main {
    padding: 1em;
  }
`;
