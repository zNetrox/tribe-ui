import type { Meta, StoryObj } from '@storybook/angular-vite';
import { TrashIcon } from './trash-icon';

const meta: Meta<TrashIcon> = {
    title: 'UI/Icons/TrashIcon',
    component: TrashIcon,
    tags: ['autodocs'],
    argTypes: {
        size: {
        control: { type: 'number', min: 12, max: 96, step: 4 },
        },
    },
    args: {
        size: 24,
    },
};

export default meta;
type Story = StoryObj<TrashIcon>;

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
    render: (args) => ({
        props: args,
        template: `
        <div style="color: var(--orange); display: inline-flex;">
            <app-trash-icon [size]="size" />
        </div>
        `,
    }),
};