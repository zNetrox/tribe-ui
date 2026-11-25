import type { Meta, StoryObj } from '@storybook/angular-vite';
import { LogoWithoutName } from './logo-wo-name';

const meta: Meta<LogoWithoutName> = {
    title: 'UI/Logos/LogoWithoutName',
    component: LogoWithoutName,
    tags: ['autodocs'],
    argTypes: {
        size: {
        control: { type: 'number', min: 16, max: 160, step: 8 },
        },
    },
    args: {
        size: 48,
    },
};

export default meta;
type Story = StoryObj<LogoWithoutName>;

export const Default: Story = {};

export const Large: Story = {
    args: {
        size: 96,
    },
};

export const Orange: Story = {
    args: {
        size: 64,
    },
    render: (args) => ({
        props: args,
        template: `
        <div style="color: var(--orange); display: inline-flex;">
            <app-logo-without-name [size]="size" />
        </div>
        `,
    }),
};

export const WhiteOnBrown: Story = {
    args: {
        size: 64,
    },
    render: (args) => ({
        props: args,
        template: `
        <div style="background: var(--brown); color: var(--white); padding: 1.5rem; border-radius: 8px; display: inline-flex;">
            <app-logo-without-name [size]="size" />
        </div>
        `,
    }),
};