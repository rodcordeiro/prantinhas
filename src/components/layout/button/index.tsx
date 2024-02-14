import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import clsx from 'clsx';
import { Loading } from '../loading';

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
} & TouchableOpacityProps;
type ButtonTextProps = { children: React.ReactNode };
type ButtonIconProps = { children: React.ReactNode };

function Button({ children, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className={clsx(
        'h-12 bg-primary rounded-md items-center justify-center flex-row',
        isLoading && 'bg-primary/75',
      )}
      disabled={isLoading}>
      {isLoading ? <ActivityIndicator color="white" /> : children}
    </TouchableOpacity>
  );
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-white font-body text-base mx-2">{children}</Text>
  );
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button, ButtonProps, ButtonIconProps, ButtonTextProps };
