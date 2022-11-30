import React, { FC } from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4em;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  background: papayawhip;
  color: #000;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
`;

const App: FC = () => {
  return (
    <Container>
      <Title color="palevioletred">Hello World!</Title>
    </Container>
  );
};

export default App;
