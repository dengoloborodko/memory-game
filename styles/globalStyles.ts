import { MediaQueriesList, Theme } from './theme';

const constructListOfMediaRulesForHTMLFontSize = (
  mediaQueries: MediaQueriesList,
  maxFontSizeValueInPercents: number = 100,
  reduceStep: number = 5
) => {
  const listOfMediaRules: { [key: string]: object } = {};

  for (let mediaQuery of Object.values(mediaQueries)) {
    listOfMediaRules[mediaQuery] = {
      html: {
        fontSize: maxFontSizeValueInPercents + '%'
      }
    };

    maxFontSizeValueInPercents -= reduceStep;
  }

  return listOfMediaRules;
};

export const globalStyles = (theme: Theme) => ({
  body: {
    fontFamily: theme.font.family.primary,
    backgroundColor: theme.colors.lightGrey
  },
  ul: {
    padding: 0
  },
  ...constructListOfMediaRulesForHTMLFontSize(theme.mediaQueries.maxWidth)
});
