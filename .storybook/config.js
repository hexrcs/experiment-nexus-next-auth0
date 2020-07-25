import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};
addDecorator((story) => <AppProvider>{story()}</AppProvider>);

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
