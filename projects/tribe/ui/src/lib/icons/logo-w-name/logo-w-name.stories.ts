import type { Meta, StoryObj } from '@storybook/angular-vite';
import { LogoWithName } from './logo-w-name';

const meta: Meta<LogoWithName> = {
    title: 'UI/Logos/LogoWithName',
    component: LogoWithName,
    tags: ['autodocs'],
    argTypes: {
        size: {
        control: { type: 'number', min: 24, max: 240, step: 8 },
        },
    },
    args: {
        size: 80,
    },
};

export default meta;
type Story = StoryObj<LogoWithName>;

export const Default: Story = {};

export const Large: Story = {
    args: {
        size: 160,
    },
};

export const Orange: Story = {
    args: {
        size: 96,
    },
    render: (args) => ({
        props: args,
        template: `
        <div style="color: var(--orange); display: inline-flex;">
            <app-logo-with-name [size]="size" />
        </div>
        `,
    }),
};

export const WhiteOnBrown: Story = {
    args: {
        size: 96,
    },
    render: (args) => ({
        props: args,
        template: `
        <div style="background: var(--brown); color: var(--white); padding: 1.5rem; border-radius: 8px; display: inline-flex;">
            <app-logo-with-name [size]="size" />
        </div>
        `,
    }),
};