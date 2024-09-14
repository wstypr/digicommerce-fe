import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const buttonStyle = tv({
    base: ' text-slate-50 px-3 py-2 bg-slate-50 font-medium transition duration-200',
    variants: {
        variant: {
            primary: 'bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600 border border-primary-500',
            secondary: 'bg-secondary-50/50 text-black hover:bg-secondary-300 active:bg-secondary-400 border border-secondary-50/50',
            outline: 'border border-primary-500 text-primary-500 hover:bg-primary-100  active:bg-primary-200',
        },
        size: {
            small: 'text-sm px-2 py-1 rounded-md',
            medium: 'text-base px-4 py-2 rounded-lg',
            large: 'text-lg px-6 py-4 rounded-xl',
        },
        isIconOnly: {
            true: 'p-2',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});

type TButton = VariantProps<typeof buttonStyle>;
interface ButtonProps extends TButton, React.ComponentPropsWithRef<'button'> {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={twMerge(buttonStyle({ ...props }), props.className)}>
            <div className="flex items-center gap-2">
                {props.startContent}
                <div>{props.children}</div>
                {props.endContent}
            </div>
        </button>
    );
};
