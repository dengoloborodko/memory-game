import styled from '@emotion/styled';

export const Paragraph = styled.p(
  {
    maxWidth: '23rem',
    margin: '0 0 1.5rem 0',
    fontSize: '1.1rem',
    lineHeight: '1.5rem'
  },
  ({ theme }) => ({
    fontWeight: theme.font.weight.thin
  })
);
