import { BackgroundColor, PrimaryColor } from '../common.type';

export interface CardProps {
  bg?: BackgroundColor;
  color?: PrimaryColor;
  className?: string;
  header?: any;
  children: any;
}