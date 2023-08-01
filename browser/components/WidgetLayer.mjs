import globalCss from "../global-styles/global.css.mjs";
import { LitElement, css, html } from "../libs/lit-all@2.7.6.js";

export default class WidgetLayer extends LitElement {
  static properties = {
    position: { type: String, reflect: true },
  };

  /**
   * @param {{
   *  position: WidgetLayer["position"]
   * }} props
   */
  constructor(position = "left") {
    super();
    /** @type {"top" | "bottom" | "left" | "right" | "none"} */
    this.position = position;
  }

  render() {
    return html`<div class="layer">
      ${this.widget()}
      <slot></slot>
    </div>`;
  }

  /**
   * @type {()=> ReturnType<html>} widget
   * @abstract
   */
  widget() {
    console.error("Guess there wasn't an override");
    throw new Error("Subclass must implement widget");
  }

  static styles = [
    globalCss,
    css`
      .layer {
        display: flex;
        flex-wrap: nowrap;
      }

      .layer ::slotted(*) {
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
