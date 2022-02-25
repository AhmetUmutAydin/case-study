import { ControlValueAccessor } from '@angular/forms';

export class BaseControlValueAccessor<T> implements ControlValueAccessor {
  public disabled = false;

  val: T;
  public onChange(newVal: T) {}
  public onTouched(_?: any) {}

  public writeValue(obj: T): void {
    this.value = obj;
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  set value(val: T) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouched(val);
    }
  }
}
