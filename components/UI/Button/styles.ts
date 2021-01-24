import styled from '@emotion/styled';

export const Button = styled.button(
  {
    padding: '0.8rem 1.6rem',
    margin: '1rem 2rem',
    fontSize: '1.3rem',
    cursor: 'pointer',
    background: 'transparent',
    border: '2px solid transparent',
    outline: 'none'
  },
  ({ theme }) => ({
    fontWeight: 400,
    transition: `border-color ${theme.transition.duration} ${theme.transition.timingFunction}`,
    ':hover, :focus': {
      border: `2px solid ${theme.colors.red}`
    }
  })
);
