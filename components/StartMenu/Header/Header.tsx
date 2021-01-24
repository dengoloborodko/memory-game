import React, { FC } from 'react';

import { Link } from '../../UI/Link';
import { ROUTES } from '../../../constants';
import * as Styled from './styles';

export const Header: FC = () => (
  <Styled.Header>
    <Styled.Title>Memory Game</Styled.Title>
    <nav>
      <Styled.List>
        <li>
          <Link text="Game" href={ROUTES.home} passHref />
        </li>
        <li>
          <Link text="Rules" href={ROUTES.rules} passHref />
        </li>
      </Styled.List>
    </nav>
  </Styled.Header>
);
