import { BackgroundColor } from '../common.type';

export interface ButtonProps {
  className?: string;
  onClick: () => void;
  color?: BackgroundColor;
  children: any;
}