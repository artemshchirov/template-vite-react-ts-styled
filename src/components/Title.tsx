import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 3.5em;
  text-align: right;
  color: ${(props) => props.color || props.theme.colors.primary};

  @media ${(props) => props.theme.media.tablet} {
    color: grey;
  }

  @media ${(props) => props.theme.media.desktop} {
    color: #b9d2d6;
  }
`;

interface TitleProps {
  children: React.ReactNode;
  color: string;
}

const Title: FC<TitleProps> = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};

export default Title;
