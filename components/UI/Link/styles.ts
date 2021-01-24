import styled from '@emotion/styled';

export const Link = styled.a<{ isActive: boolean }>(
  {
    fontSize: '1.5rem',
    textDecoration: 'none',
    margin: '0 1.3rem',
    padding: '0.8rem 0',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    outline: 'none'
  },
  ({ theme, isActive }) => ({
    fontWeight: theme.font.weight.regular,
    color: theme.colors.black,
    borderColor: isActive ? theme.colors.red : 'transparent',
    transition: `border-color ${theme.transition.duration} ${theme.transition.timingFunction}`,
    ':hover, :focus': {
      borderColor: theme.colors.red
    }
  })
);
