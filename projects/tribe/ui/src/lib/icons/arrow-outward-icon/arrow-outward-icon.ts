import { Component, input } from '@angular/core';

@Component({
    selector: 'app-arrow-outward-icon',
    template: `
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        [attr.width]="size()"
        [attr.height]="size()"
        fill="currentColor"
        aria-hidden="true"
        >
            <path d="M6.4,18L5,16.6L14.6,7H6V5H18V17H16V8.4L6.4,18Z" />
        </svg>
    `
})
export class ArrowOutwardIcon {
    size = input<number>(18);
}