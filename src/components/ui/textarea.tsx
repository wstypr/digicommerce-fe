import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const textareaStyle = tv({
    base: 'border font-extralight transition duration-200 placeholder:text-slate-400 text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:shadow-md shadow-sm w-full',
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

type TTextarea = VariantProps<typeof textareaStyle>;
interface InputProps extends TTextarea, React.ComponentPropsWithRef<'textarea'> {}

export const Textarea = (props: InputProps) => {
    return <textarea {...props} className={twMerge(textareaStyle({ ...props }), props.className)} />;
};
