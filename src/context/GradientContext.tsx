import React, {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevcolors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setprevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevcolors, setprevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };

  const setprevMainColors = (colors: ImageColors) => {
    setprevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevcolors,
        setMainColors,
        setprevMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
