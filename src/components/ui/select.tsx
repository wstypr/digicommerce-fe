import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { tv } from 'tailwind-variants';

const selectStyle = tv({
    slots: {
        Trigger: 'flex w-full justify-between p-2 border rounded-lg text-slate-400 shadow-sm focus:border-red',
        Content: 'overflow-hidden bg-slate-100 rounded-md shadow-2xl',
        Item: 'p-4 hover:outline-none hover:bg-primary-500 hover:text-white',
    },
});

interface SelectProps {
    caption: string;
    options: Record<string, string>[];
}

export const Select = ({ caption, options }: SelectProps) => (
    <RadixSelect.Root>
        <RadixSelect.Trigger className={selectStyle.slots.Trigger}>
            <RadixSelect.Value placeholder={caption} />
            <RadixSelect.Icon>
                <ChevronDown />
            </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
            <RadixSelect.Content className={selectStyle.slots.Content}>
                <RadixSelect.Viewport>
                    {options.map(({ value, label }) => (
                        <RadixSelect.Item key={value} className={selectStyle.slots.Item} value={value}>
                            <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
                        </RadixSelect.Item>
                    ))}
                </RadixSelect.Viewport>
            </RadixSelect.Content>
        </RadixSelect.Portal>
    </RadixSelect.Root>
);
