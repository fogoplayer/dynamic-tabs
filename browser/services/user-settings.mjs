import IframesWidget from "../components/IframesWidget.mjs";
import SessionsWidget from "../components/SessionsWidget.mjs";
import TabsWidget from "../components/TabsWidget.mjs";
import { LitElement } from "../libs/lit-all@2.7.6.js";

export default {
  /** @type {{element: LitElement, position: "top" | "bottom" | "left" | "right"}[]} */
  widgets: [
    {
      element: IframesWidget,
      position: "right",
    },
    { element: SessionsWidget, position: "left" },
    { element: TabsWidget, position: "top" },
  ],
};
