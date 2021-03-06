import React, { createContext, useRef } from 'react';
import { useLocalStorage } from '../../Hooks';

const HistoryContext = createContext({
  recentColors: [],
  updateRecentColors: () => {}
});

const HistoryProvider = ({ children }) => {
  const [recentColors, setRecentColors] = useLocalStorage('recentColors', []);

  const recentColorsRef = useRef(recentColors);

  const updateRecentColors = newColor => {
    recentColorsRef.current = [
      newColor,
      ...recentColorsRef.current.slice(0, 100)
    ];
    setRecentColors(recentColorsRef.current);
  };

  return (
    <HistoryContext.Provider
      value={{
        recentColors,
        updateRecentColors
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryProvider };

export default HistoryContext;
