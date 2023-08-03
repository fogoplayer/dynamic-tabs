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
   *  element: string;
   *  settings: WidgetLayer["settings"];
   * }[]}
   */
  widgets: [
    {
      element: "iframes-widget",
      settings: {
        position: "right",
        mode: "visible",
        frames: ["https://zarinloosli.com", "https://chromeunboxed.com"],
      },
    },
    { element: "sessions-widget", settings: { position: "left", mode: "visible" } },
    { element: "tabs-widget", settings: { position: "top", mode: "visible" } },
  ],
  /** @type {"ios" | "md"} */
  mode: "ios",
};

/**
 * Gets the user settings and passes them into a callback and/or returns them
 * @param {SettingsObserver} callback
 */
export function getUserSettings(callback = () => {}) {
  observers.add(callback);
  callback(settings);
  return settings;
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
