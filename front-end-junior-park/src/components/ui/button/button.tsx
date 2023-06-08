import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButton>> = ({
     children, className,...rest
}) => {
    return <button {...rest} className={cn('', className)}>{children}</button>
}

export default Button