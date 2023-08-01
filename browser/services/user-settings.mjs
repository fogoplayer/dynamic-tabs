import IframesWidget from "../components/IframesWidget.mjs";
import SessionsWidget from "../components/SessionsWidget.mjs";
import TabsWidget from "../components/TabsWidget.mjs";
import WidgetLayer from "../components/WidgetLayer.mjs";
import { LitElement } from "../libs/lit-all@2.7.6.js";

/**
 * @typedef {(settings: UserSettings) => void} SettingsObserver
 */

/** @type {Set<SettingsObserver>} */
const observers = new Set();

/**
 * @typedef {typeof settings} UserSettings
 */
const settings = {
  /** @type {{element: WidgetLayer, position: "top" | "bottom" | "left" | "right"}[]} */
  widgets: [
    { element: IframesWidget, position: "right" },
    { element: SessionsWidget, position: "left" },
    { element: TabsWidget, position: "top" },
  ],
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
