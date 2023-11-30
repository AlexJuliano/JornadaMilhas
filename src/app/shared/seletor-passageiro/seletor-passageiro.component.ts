import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent), // com isso vou instruir o angular que essa classe não existe em tempo de compilação
      multi: true

    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {

  @Input() titulo: string = '';
  @Input() subTitulo: string = '';

  value: number = 0
  onChange = (value: number) => { }
  onTouched = () => { }


  writeValue(val: any): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  incrementar() {
    this.value += 1;
    this.onChange(this.value)
    this.onTouched()

  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value)
      this.onTouched()
    }

  }


}
