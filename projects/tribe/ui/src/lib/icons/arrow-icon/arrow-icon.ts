import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-arrow-icon',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        [attr.width]="size()"
        [attr.height]="size()"
        [attr.data-direction]="direction()"
        fill="currentColor"
        aria-hidden="true"
        >
        <path d="M14,18l-1.4-1.45L16.15,13H4V11H16.15L12.6,7.45L14,6l6,6l-6,6Z" />
        </svg>
    `,
    styles: `
        svg {
            display: block;
            transition: transform 0.2s ease;
        }

        svg[data-direction='down'] { transform: rotate(90deg); }

        svg[data-direction='left'] { transform: rotate(180deg); }

        svg[data-direction='up'] { transform: rotate(-90deg); }
    `,
})
export class ArrowIcon {
    readonly size = input<number>(24);
    readonly direction = input<'right' | 'left' | 'down' | 'up'>('right');
}