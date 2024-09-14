import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const inputStyle = tv({
    base: 'border font-extralight transition duration-200 placeholder:text-s;late-200 text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:shadow-md shadow-sm w-full',
    variants: {
        inputSize: {
            small: 'text-sm px-2 py-1 rounded-md',
            medium: 'text-base px-4 py-2 rounded-lg',
            large: 'text-lg px-6 py-4 rounded-xl',
        },
    },
    defaultVariants: {
        inputSize: 'medium',
    },
});

type TInput = VariantProps<typeof inputStyle>;
interface InputProps extends TInput, React.ComponentPropsWithRef<'input'> {}

export const Input = (props: InputProps) => {
    return <input {...props} className={twMerge(inputStyle({ ...props }), props.className)} />;
};
