type BreakPointKey = 'xSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
type BreakPointsList = Record<BreakPointKey, number>;
export type MediaQueriesList = Record<BreakPointKey, string>;

const breakPoints: BreakPointsList = {
  xSmall: 400,
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200
};

const mediaFeaturesValues = {
  minWidth: 'min-width',
  maxWidth: 'max-width'
};

const constructListOfMediaQueriesForWidth = (
  mediaFeature: string,
  breakPoints: BreakPointsList
): MediaQueriesList => {
  const mediaQueriesList: { [key: string]: string } = {};
  const breakPointsKeys = Object.keys(breakPoints) as BreakPointKey[];
  const shouldChangeOrderForCorrectPriorityOfRules =
    mediaFeature === mediaFeaturesValues.maxWidth;

  if (shouldChangeOrderForCorrectPriorityOfRules) {
    breakPointsKeys.reverse();
  }

  for (let key of breakPointsKeys) {
    mediaQueriesList[key] = `@media (${mediaFeature}: ${breakPoints[key]}px)`;
  }

  return mediaQueriesList as MediaQueriesList;
};

export const theme = {
  font: {
    family: {
      primary: '"Nunito", sans-serif'
    },
    weight: {
      thin: 300,
      regular: 400,
      bold: 700
    }
  },
  colors: {
    lightGrey: '#eee',
    black: '#000',
    white: '#fff',
    red: '#d94f5c'
  },
  transition: {
    duration: '.25s',
    timingFunction: 'ease'
  },
  mediaQueries: {
    minWidth: constructListOfMediaQueriesForWidth(
      mediaFeaturesValues.minWidth,
      breakPoints
    ),
    maxWidth: constructListOfMediaQueriesForWidth(
      mediaFeaturesValues.maxWidth,
      breakPoints
    )
  }
};

export type Theme = typeof theme;
