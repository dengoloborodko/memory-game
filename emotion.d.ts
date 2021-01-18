import '@emotion/react';

import { Theme as ThemeType } from './styles/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
