import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../BaseControlValueAccessor';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent extends BaseControlValueAccessor<string> {
  @Input()
  labelText: string;

  @Input()
  placeholder: string;

  @Input()
  type = 'text';

  @Input()
  containerClass: string;
}
