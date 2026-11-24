import { NgTemplateOutlet } from '@angular/common';
import {ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  // paramètres du bouton
  readonly variant = input<'primary' | 'secondary' | 'outline' | 'white'>('primary');
  readonly type = input<'button' | 'submit'>('button');
  readonly shape = input<'default'>('default'); // on peut ajouter de nouveau style de boutons si besoin
}
