import type { Meta, StoryObj } from '@storybook/angular-vite';
import { ArrowIcon } from './arrow-icon';

const meta: Meta<ArrowIcon> = {
    title: 'UI/Icons/ArrowIcon',
    component: ArrowIcon,
    tags: ['autodocs'],
    argTypes: {
        size: {
        control: { type: 'number', min: 12, max: 96, step: 4 },
        },
    },
    args: {
        size: 24,
        direction: 'right',
    },
    };

    export default meta;
    type Story = StoryObj<ArrowIcon>;

    export const Default: Story = {};

    export const Large: Story = {
    args: {
        size: 48,
    },
    };

    export const InheritedColor: Story = {
    args: {
        size: 32,
    },
    decorators: [
        (story) => {
        const s = story();
        return {
            ...s,
            template: `<div style="color: var(--orange); display: inline-flex;">${s.template ?? '<ng-container />'}</div>`,
        };
        },
    ],
};