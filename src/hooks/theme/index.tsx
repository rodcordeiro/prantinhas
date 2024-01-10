import React, { createContext, useCallback, useContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';
import { Styles } from '../../styles/contants';
import { dark, light } from '@/styles/theme';

export interface ITheme {
  theme: DefaultTheme;
  toggleTheme(): void;
}

type ThemeProps = {
  children?: any;
};
const ThemeContext = createContext<ITheme>({} as ITheme);

export function CustomTheme({ children }: React.PropsWithChildren<ThemeProps>) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [dark, light, setTheme, theme]);

  return (
    <>
      <ThemeContext.Provider
        value={{ theme: { ...theme, ...Styles }, toggleTheme }}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export function useTheme(): ITheme {
  return useContext<ITheme>(ThemeContext);
}

export default ThemeContext;
