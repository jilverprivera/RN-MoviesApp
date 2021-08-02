import React, {createContext, useState} from 'react';

interface ColorsGradient {
  primary: string;
  secondary: string;
}

interface ContextProps {
  color: ColorsGradient;
  prevColor: ColorsGradient;
  setMainColor: (colors: ColorsGradient) => void;
  setPrevMainColors: (colors: ColorsGradient) => void;
}


export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [color, setColor] = useState<ColorsGradient>({
     primary: 'transparent',
     secondary: 'transparent',
  });

  const [prevColor, setPrevColor] = useState<ColorsGradient>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  console.log(color)
  const setMainColor = (colors: ColorsGradient) => {
    setColor(colors);
  };
  
  const setPrevMainColors = (colors: ColorsGradient) => {
    setPrevColor(colors);
  };

  return (
    <GradientContext.Provider
      value={{color, prevColor, setMainColor, setPrevMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
