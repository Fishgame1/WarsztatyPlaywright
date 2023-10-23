import { enTranslation } from "./en/translation-en";
import { plTranslation } from "./pl/translation-pl";

export enum Languages {
  ENGLISH = "English",
  POLISH = "Polish",
}

export interface Translation {
  description: string;
  header: string;
  activeButtonLabel: string;
}

export const getTranslations = (language: Languages): Translation => {
  let languageMap = new Map([
    [Languages.ENGLISH, enTranslation],
    [Languages.POLISH, plTranslation],
  ]);
  let translation = languageMap.get(language);
  if (translation) {
    return translation;
  } else {
    return enTranslation;
  }
};
