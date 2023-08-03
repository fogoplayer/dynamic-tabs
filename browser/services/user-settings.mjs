/** @typedef {import("../components/WidgetLayer.mjs").default} WidgetLayer */
import IframesWidget from "../components/IframesWidget.mjs";
import SessionsWidget from "../components/SessionsWidget.mjs";
import TabsWidget from "../components/TabsWidget.mjs";

/**
 * @typedef {(settings: UserSettings) => void} SettingsObserver
 */

/** @type {Set<SettingsObserver>} */
const observers = new Set();

/**
 * @typedef {typeof settings} UserSettings
 */
const settings = {
  /**
   * @type {{
   *  element: WidgetLayer;
   *  position: "top" | "bottom" | "left" | "right" | "none";
   *  mode: "hidden" | "expanding" | "minimized" | "visible";
   *  settings: unknown;
   * }[]}
   */
  widgets: [
    {
      element: new IframesWidget(),
      position: "right",
      mode: "visible",
      settings: { frames: ["https://zarinloosli.com", "https://chromeunboxed.com"] },
    },
    { element: new SessionsWidget(), position: "left", mode: "visible", settings: {} },
    { element: new TabsWidget(), position: "top", mode: "visible", settings: {} },
  ],
  /** @type {"ios" | "md"} */
  mode: "ios",
};

console.log(settings);

/**
 *
 * @param {SettingsObserver} callback
 */
export function getUserSettings(callback) {
  observers.add(callback);
  callback(settings);
}

/**
 * Overwrite a userSetting
 * @param {keyof UserSettings} setting
 * @param {any} value
 */
export function updateSetting(setting, value) {
  settings[setting] = value;
  updateObservers();
}

function updateObservers() {
  console.log(settings);
  observers.forEach((observer) => observer(settings));
}
