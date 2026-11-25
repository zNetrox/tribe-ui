import { Component, input } from '@angular/core';

@Component({
    selector: 'app-check-icon',
    template: `
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    [attr.width]="size()"
    [attr.height]="size()"
    fill="currentColor"
    >
    <path d="M9.55,18l-5.7-5.7l1.43-1.42l4.28,4.28l9.18-9.18L20.15,7.4L9.55,18Z"/>
</svg>
    `
})
export class CheckIcon {
    size = input<number>(24);
}