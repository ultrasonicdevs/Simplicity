import { PolymorphProps } from '../Polymorph/Polymorph.types';

enum buttonAsVariants {
  button,
  a
}

export type ButtonProps = PolymorphProps<keyof typeof buttonAsVariants> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'reject';
  size?: 'xs' | 'sm' | 'md';
  buttonType?: 'button' | 'text';
};
