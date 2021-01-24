import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

import * as Styled from './styles';

type StyledLinkProps = LinkProps & {
  text: string;
};

export const StyledLink: FC<StyledLinkProps> = ({ text, ...props }) => {
  const { pathname } = useRouter();
  const isActive = pathname === props.href || pathname === props.as;

  return (
    <Link {...props}>
      <Styled.Link isActive={isActive}>{text}</Styled.Link>
    </Link>
  );
};
