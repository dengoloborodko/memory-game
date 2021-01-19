import React, { FC } from 'react';

import { Header } from './Header';
import { Rules } from './Rules';
import { NewGame } from './NewGame';
import * as Styled from './styles';

type StartMenuProps = {
  showNewGame?: boolean;
  showRules?: boolean;
};

export const StartMenu: FC<StartMenuProps> = ({ showNewGame, showRules }) => (
  <>
    <Header />
    <Styled.Section>
      {showNewGame && <NewGame />}
      {showRules && <Rules />}
    </Styled.Section>
  </>
);
