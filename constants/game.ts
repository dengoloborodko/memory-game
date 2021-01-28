type GameLevelKey = 'junior' | 'middle' | 'senior' | 'lead' | 'god';
type GameLevelConditions = {
  time: number;
  rows: number;
  columns: number;
};
type GameLevelsConditions = Record<GameLevelKey, GameLevelConditions>;

export const GAME_LEVELS_CONDITIONS: GameLevelsConditions = {
  junior: {
    time: 60,
    rows: 4,
    columns: 4
  },
  middle: {
    time: 60,
    rows: 5,
    columns: 5
  },
  senior: {
    time: 60,
    rows: 6,
    columns: 6
  },
  lead: {
    time: 50,
    rows: 6,
    columns: 6
  },
  god: {
    time: 40,
    rows: 6,
    columns: 6
  }
};

export type GameLevelConditionsOption = {
  value: GameLevelKey;
  label: string;
};

const constructGameLevelsConditionsOptions = (
  gameLevelsConditions: GameLevelsConditions
): GameLevelConditionsOption[] => {
  const gameLevelsConditionsEntries = Object.entries(gameLevelsConditions) as [
    GameLevelKey,
    GameLevelConditions
  ][];

  return gameLevelsConditionsEntries.map(
    ([level, { time, rows, columns }]) => ({
      value: level,
      label: `${level}: ${rows}x${columns}, ${time}sec`
    })
  );
};

export const GAME_LEVELS_CONDITIONS_OPTIONS = constructGameLevelsConditionsOptions(
  GAME_LEVELS_CONDITIONS
);
