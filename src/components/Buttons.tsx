import { Button as AriaButton } from 'react-aria-components';
import { ReactNode } from 'react';
import { buildClassName } from '@/utils/buildClassName';

type ButtonProps = {
    children: ReactNode;
    className?: string;
    size?: "32px" | "40px";
    variant: "filled" | "outline";
};

const backgroundClass = {
    filled: 'bg-secondary-base hover:bg-secondary-light',
    outline: 'bg-primary-base hover:bg-primary-light'
}

const textClass = {
    "32px": 'min-h-[32px]',
    "40px": 'min-h-[40px]'
}

const Button = ({children, className, size="32px", variant="filled", ...rest }: ButtonProps) => {
    return (
        <AriaButton
        className={buildClassName(
            'inline-flex items-center rounded-md px-6 font-medium border-secondary-base border-[1px] border-solid text-text_color',
            `${backgroundClass[variant]} ${textClass[size]}`,
            className
            )}
        {...rest}>
            {children}
        </AriaButton>
    )
}

export default Button;