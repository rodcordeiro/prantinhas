import React, { createContext, useCallback, useContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "../../utils/usePersistedState";
import { StyleConstants } from "../../@types/style";
import { Styles } from "../../styles/contants";

export interface ITheme<T = DefaultTheme> {
  theme?: T & StyleConstants;
  light?: T;
  dark?: T;
  toggleTheme(): void;
  title?: keyof T | string;
}

type ThemeProps<T> = {
  light: T;
  dark: T;
  title: keyof T | string;
  children?: any;
};
const ThemeContext = createContext<ITheme<DefaultTheme>>(
  {} as ITheme<DefaultTheme>
);

export function CustomTheme<T = DefaultTheme>({
  children,
  light,
  dark,
  title = "title",
}: React.PropsWithChildren<ThemeProps<T>>) {
  const [theme, setTheme] = usePersistedState<DefaultTheme | T | any>(
    "@pda::theme",
    dark
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme[title] === "light" ? dark : light);
  }, [dark, light, setTheme, theme, title]);

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

export function useTheme(): ITheme<DefaultTheme> {
  return useContext<ITheme<DefaultTheme>>(ThemeContext);
}

export default ThemeContext;
