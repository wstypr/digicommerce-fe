import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
    children: React.ReactNode;
    message: string;
}

export const Tooltip = (props: TooltipProps) => (
    <RadixTooltip.Provider>
        <RadixTooltip.Root>
            <RadixTooltip.Trigger>{props.children}</RadixTooltip.Trigger>
            <RadixTooltip.Portal>
                <RadixTooltip.Content className="rounded bg-slate-100/5 px-3 py-1 text-sm text-slate-700 backdrop-blur-md">
                    {props.message}
                    <RadixTooltip.Arrow className="fill-slate-100" />
                </RadixTooltip.Content>
            </RadixTooltip.Portal>
        </RadixTooltip.Root>
    </RadixTooltip.Provider>
);
