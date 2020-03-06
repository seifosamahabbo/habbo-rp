import { BackgroundColor, Children, PrimaryColor } from '../../common.type';

export interface CardProps {
  bg?: BackgroundColor;
  color?: PrimaryColor;
  className?: string;
  header?: Children;
  children: Children;
}
