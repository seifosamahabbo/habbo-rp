import { Children } from 'components/common.type';

export interface AuthProps {
  children: Children;
  onLogin?: () => void;
  onRegister?: () => void;
  onSubmit?: () => void;
}
