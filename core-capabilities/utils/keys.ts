import playwrightObject from "core-capabilities/engine/playwright-object";
import { wait } from "./waiter";

// Wait time serves simillar purpose as slow mo - in some cases browser might not handle correctly multiple keyboard clicks
let waitTime = 300

export enum Keys {
  ENTER = "Enter",
}

export const pressTab = async (repeatTImes: number = 1): Promise<void> => {
  let button = playwrightObject.browserName?.includes('webkit') ? 'Alt+Tab' : 'Tab';
  for (let i = 0; i < repeatTImes; i++) {
      await wait(waitTime);
      await playwrightObject.page().keyboard.press(button);
  }
};

export const pressShiftTab = async (repeatTImes: number = 1): Promise<void> => {
  let button = playwrightObject.browserName?.includes('webkit') ? 'Alt+Tab' : 'Tab';
  for (let i = 0; i < repeatTImes; i++) {
      await wait(waitTime);
      await playwrightObject.page().keyboard.press(`Shift+${button}`);
  }
};

export const pressEnter = async (repeatTImes: number = 1): Promise<void> => {
  for (let i = 0; i < repeatTImes; i++) {
      await wait(waitTime);
      await playwrightObject.page().keyboard.press('Enter');
  }
};

export const pressSpace = async (repeatTImes: number = 1): Promise<void> => {
  for (let i = 0; i < repeatTImes; i++) {
      await wait(waitTime);
      await playwrightObject.page().keyboard.press('Space');
  }
};

export const writeSentence = async (sentence: string): Promise<void> => {
  for (let letter of sentence) {
      await wait(waitTime);
      await playwrightObject.page().keyboard.press(letter);
  }
};
