import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "orange" | "pink";
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  return (
    <button {...rest} className={cn("rounded-x1 font-medium shadow-md px-10 py-2", {
        'text-white bg-secondary' : variant === 'orange',
        'text-white bg-primary' : variant === 'pink',
    }, className)}>
      {children}
    </button>
  );
};

export default Button;
