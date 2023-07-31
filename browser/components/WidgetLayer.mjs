import { LitElement, html } from "../libs/lit-all@2.7.6.js";

/** */
export default class WidgetLayer extends LitElement {
  static properties = {
    position: { type: String, reflect: true },
  };

  // /**
  //  * @param {{position: WidgetLayer["position"]}} props
  //  */
  constructor(/* { position } */) {
    super();
    /** @type {"top" | "bottom" | "left" | "right"} */
    this.position; /*  = position; */
  }

  render() {
    html`<div class="layer">
      ${this.widget()}
      <slot></slot>
    </div>`;
  }

  /**
   * @type {()=> ReturnType<html>} widget
   * @abstract
   */
  widget() {
    throw new Error("Subclass must implement widget");
  }
}
