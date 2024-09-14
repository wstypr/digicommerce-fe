import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Standard: Story = {
    args: {
        inputSize: 'medium',
        placeholder: 'email',
    },
};
