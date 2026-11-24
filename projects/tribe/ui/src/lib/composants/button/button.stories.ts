import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Button } from './button';

type ButtonStoryArgs = Button & { label: string };

const meta: Meta<ButtonStoryArgs> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
        control: 'select',
        options: ['primary', 'secondary', 'outline', 'white'],
        },
        type: {
        control: 'radio',
        options: ['button', 'submit'],
        },
        shape: {
        control: 'select',
        options: ['default'],
        },
        label: {
        control: 'text',
        },
    },
    args: {
        variant: 'primary',
        type: 'button',
        shape: 'default',
        label: 'Rejoindre Tribe',
    },
    render: (args) => ({
        props: args,
        template: `<app-button [variant]="variant" [type]="type" [shape]="shape">{{ label }}</app-button>`,
    }),
};

export default meta;
type Story = StoryObj<ButtonStoryArgs>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
};

export const White: Story = {
    args: {
        variant: 'white',
    },
    render: (args) => ({
        props: args,
        template: `
        <div style="background: var(--brown); padding: 1.5rem; border-radius: 8px; display: inline-block;">
            <app-button [variant]="variant" [type]="type" [shape]="shape">{{ label }}</app-button>
        </div>
        `,
    }),
};