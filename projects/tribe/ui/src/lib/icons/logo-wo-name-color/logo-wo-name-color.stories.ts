import type { Meta, StoryObj } from '@storybook/angular-vite';
import { LogoWithoutNameColor } from './logo-wo-name-color';

const meta: Meta<LogoWithoutNameColor> = {
    title: 'UI/Logos/LogoWithoutNameColor',
    component: LogoWithoutNameColor,
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
type Story = StoryObj<LogoWithoutNameColor>;

export const Default: Story = {};

export const Large: Story = {
    args: {
        size: 96,
    },
};

export const OnDarkBackground: Story = {
    args: {
        size: 64,
    },
    render: (args) => ({
        props: args,
        template: `
        <div style="background: var(--brown); padding: 1.5rem; border-radius: 8px; display: inline-flex;">
            <app-logo-without-name-color [size]="size" />
        </div>
        `,
    }),
};