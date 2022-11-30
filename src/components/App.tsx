import React, { FC } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 126px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background: darkgreen;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  @media ${(props) => props.theme.media.tablet} {
    background: grey;
  }

  @media ${(props) => props.theme.media.desktop} {
    background: #b9d2d6;
  }
`;

const App: FC = () => {
  return (
    <>
      <Container>Work</Container>
    </>
  );
};

export default App;
