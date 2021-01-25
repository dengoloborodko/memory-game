import React, { FC } from 'react';
import Select from 'react-select';
import { Props as ReactSelectProps } from 'react-select/base';
import { useTheme } from '@emotion/react';

export const StyledSelect: FC<ReactSelectProps> = props => {
  const theme = useTheme();

  return (
    <Select
      styles={{
        control: styles => ({
          ...styles,
          minWidth: '15rem',
          cursor: 'pointer'
        }),
        option: styles => ({
          ...styles,
          cursor: 'pointer',
          textAlign: 'left'
        })
      }}
      theme={selectTheme => ({
        ...selectTheme,
        borderRadius: 0,
        colors: {
          ...selectTheme.colors,
          primary: theme.colors.red,
          primary25: theme.colors.lightGrey,
          primary50: theme.colors.lightRed
        }
      })}
      {...props}
    />
  );
};
