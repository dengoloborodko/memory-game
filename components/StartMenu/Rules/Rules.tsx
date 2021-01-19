import React from 'react';

import * as Styled from './styles';

export const Rules = () => (
  <>
    <Styled.Paragraph>
      You can flip two cards, turning them face up with a click. If the letters
      on both cards are equal, the cards will stay face up. If they are
      different, they will be turned face down again.
    </Styled.Paragraph>
    <Styled.Paragraph>
      You win if all cards are faced up in time. Otherwise, you lose.
    </Styled.Paragraph>
  </>
);
