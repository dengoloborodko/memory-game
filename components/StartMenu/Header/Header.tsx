import React, { FC } from 'react';
import Link from 'next/link';

import { ROUTES } from '../../../constants';
import * as Styled from './styles';

export const Header: FC = () => (
  <Styled.Header>
    <Styled.Title>Memory Game</Styled.Title>
    <nav>
      <Styled.List>
        <li>
          <Link href={ROUTES.home} passHref>
            <Styled.Link>Game</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.rules} passHref>
            <Styled.Link>Rules</Styled.Link>
          </Link>
        </li>
      </Styled.List>
    </nav>
  </Styled.Header>
);
