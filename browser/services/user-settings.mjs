import IframesWidget from "../components/IframesWidget.mjs";
import SessionsWidget from "../components/SessionsWidget.mjs";
import TabsWidget from "../components/TabsWidget.mjs";
import WidgetLayer from "../components/WidgetLayer.mjs";
import { LitElement } from "../libs/lit-all@2.7.6.js";

/**
 * @typedef {typeof settings} UserSettings
 */
const settings = {
  /** @type {{element: WidgetLayer, position: "top" | "bottom" | "left" | "right"}[]} */
  widgets: [
    {
      element: IframesWidget,
      position: "right",
    },
    { element: SessionsWidget, position: "left" },
    { element: TabsWidget, position: "top" },
  ],
};

export default settings;
