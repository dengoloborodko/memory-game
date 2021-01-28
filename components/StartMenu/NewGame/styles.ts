import styled from '@emotion/styled';

export const Container = styled.div({
  marginTop: '2rem'
});

export const Paragraph = styled.p(
  {
    marginBottom: '3rem',
    fontSize: '1.3rem'
  },
  ({ theme }) => ({
    fontWeight: theme.font.weight.thin
  })
);

export const ErrorBlock = styled.p(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2rem',
    margin: '.6rem 0 0px 0'
  },
  ({ theme }) => ({
    color: theme.colors.red
  })
);
