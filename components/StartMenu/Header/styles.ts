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
