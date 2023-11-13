import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        title: string;
        subtitle: string;
      };
    };
  }
}
declare global {
  export type StyleConstants = {
    text: {
      sizes: {
        h1: number;
        h2: number;
        h3: number;
        p: number;
      };
      weight: {
        bold: string;
        regular: string;
        thin: string;
      };
    };
  };
}
