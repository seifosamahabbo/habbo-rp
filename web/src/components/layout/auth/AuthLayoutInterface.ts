import { Children } from 'components/common.type';

export interface AuthLayoutProps {
  children: Children;
  onLogin?: () => void;
  onRegister?: () => void;
  onSubmit?: () => void;
}
