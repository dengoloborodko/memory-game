import styled from '@emotion/styled';

export const Header = styled.header({
  marginTop: '5rem'
});

export const Title = styled.h1(
  {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: '3rem',
    fontSize: '3.2rem',
    letterSpacing: 1
  },
  ({ theme }) => ({
    fontWeight: theme.font.weight.bold
  })
);

export const List = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
  '& > li': {
    display: 'flex'
  }
});

export const Link = styled.a(
  {
    fontSize: '1.5rem',
    textDecoration: 'none',
    margin: '0 1.3rem',
    padding: '0.8rem 0',
    borderBottom: '2px solid transparent',
    outline: 'none'
  },
  ({ theme }) => ({
    fontWeight: theme.font.weight.regular,
    color: theme.colors.black,
    transition: `border-color ${theme.transition.duration} ${theme.transition.timingFunction}`,
    ':hover, :focus': {
      borderColor: theme.colors.red
    }
  })
);
