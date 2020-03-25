import * as styledComponents from 'styled-components';
import { theme } from './theme';

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  typeof theme
>;
export default styled;
export { styled, createGlobalStyle, keyframes, css, ThemeProvider };
