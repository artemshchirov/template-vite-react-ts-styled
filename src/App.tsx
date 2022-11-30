import React, { FC } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vh;
  min-height: 100vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 126px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #b9d2d6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
`;

const App: FC = () => {
  return (
    <>
      <Container>Work</Container>
    </>
  );
};

export default App;
let test;
