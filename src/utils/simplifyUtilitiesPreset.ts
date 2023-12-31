import {
  TypographyColors,
  TypographyFontSize,
  TypographyLineHeight,
  TypographyFontWeight
} from './config/Typography.config';
import {
  TextButtonBackgroundColors,
  ButtonBackgroundColors,
  TextButtonColors,
  ButtonColors
} from './config/Button.config';
import { ToggleWidth, ToggleHeight, ToggleColors, ToggleMargin } from './config/Toggle.config';
import { CheckboxWidth, CheckboxHeight, CheckboxColors } from './config/Checkbox.config';
import { InputFontSize, InputMargin } from './config/Input.config';
import { BoxRadius, BoxPadding } from './config/Box.config';
import { Config } from 'tailwindcss';

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        ...TextButtonBackgroundColors,
        ...ButtonBackgroundColors,
        ...TypographyColors,
        ...TextButtonColors,
        ...CheckboxColors,
        ...ButtonColors,
        ...ToggleColors,
        ...ToggleColors,
        transparent: '#00000000'
      },
      fontFamily: {
        serif: '"Inter", sans-serif'
      },
      width: { ...CheckboxWidth, ...ToggleWidth },
      height: { ...CheckboxHeight, ...ToggleHeight },
      fontSize: {
        ...TypographyFontSize,
        ...InputFontSize
      },
      lineHeight: {
        ...TypographyLineHeight
      },
      fontWeight: {
        ...TypographyFontWeight
      },
      margin: { ...InputMargin, ...ToggleMargin },
      borderRadius: { ...BoxRadius },
      padding: { ...BoxPadding }
    }
  }
};

export default preset as Config;
