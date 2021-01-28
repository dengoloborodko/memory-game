import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ValueType } from 'react-select';

import { GAME_LEVELS_CONDITIONS_OPTIONS, ROUTES } from '../../../constants';
import { GameLevelConditionsOption } from '../../../constants/game';
import { Select } from '../../UI';
import { Button } from '../../UI';
import * as Styled from './styles';

type SelectedOption = ValueType<GameLevelConditionsOption, false>;

export const NewGame = () => {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleChangeOnSelect = useCallback(value => {
    setSelectedOption(value);
    setShowError(!value);
  }, []);

  const handleClickOnStartGameButton = () => {
    if (!selectedOption) {
      return setShowError(true);
    }

    router.push(
      { pathname: ROUTES.game, query: { gameLevel: selectedOption.value } },
      ROUTES.game
    );
  };

  return (
    <Styled.Container>
      <Styled.Paragraph>Are you ready?</Styled.Paragraph>
      <Select
        placeholder="Select your level"
        options={GAME_LEVELS_CONDITIONS_OPTIONS}
        value={selectedOption}
        onChange={handleChangeOnSelect}
        isClearable
        instanceId="select-level"
      />
      <Styled.ErrorBlock>
        {showError && 'Please, select game level'}
      </Styled.ErrorBlock>
      <Button onClick={handleClickOnStartGameButton}>Click to start</Button>
    </Styled.Container>
  );
};
