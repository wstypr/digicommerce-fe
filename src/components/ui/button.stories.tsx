import { Send } from 'lucide-react';
import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Buton',
        size: 'medium',
    },
};
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Button',
        size: 'medium',
    },
};
export const Outline: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
        size: 'medium',
    },
};
export const WithFrontIcon: Story = {
    args: {
        variant: 'primary',
        children: 'Submit',
        size: 'medium',
        startContent: <Send size={16} />,
    },
};
export const WithRearIcon: Story = {
    args: {
        variant: 'primary',
        children: 'Submit',
        size: 'medium',
        endContent: <Send size={16} />,
    },
};
export const IconOnly: Story = {
    args: {
        variant: 'primary',
        children: <Send size={16} />,
        size: 'medium',
        isIconOnly: true,
    },
};
