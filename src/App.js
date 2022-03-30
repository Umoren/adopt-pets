import React from 'react';
import Routing from 'routes/routes';
import 'styles/typography.css';
import ResetStyles from './reset-styles';
import GlobalStyle from './global-styles';

export default function App() {
  return (
    <>
      <Routing />
      <ResetStyles />
      <GlobalStyle />
    </>
  );
}
