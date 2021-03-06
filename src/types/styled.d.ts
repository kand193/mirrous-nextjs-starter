import "styled-components";
// Typing code for styling like brakepoints, colors, button variants...

interface Color {
  primary: string;
  secondary: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: string[];
    colors: Color;
  }
}
