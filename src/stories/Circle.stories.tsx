import React from 'react';
import Circle from './Circle';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Circle> = {
    title: 'Example/Circle',
    component: Circle,
    argTypes: {
        color: {
            control: 'select',
            options: ['blue', 'red', 'green', 'yellow'],
        },
        size: { control: 'number'},
    },
};

export default meta;
type Story = StoryObj<typeof Circle>;

export const Default: Story = {
    args: { size: 80, color: 'red' },
};