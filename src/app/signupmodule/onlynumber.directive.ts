import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlynumber]'
})
export class OnlynumberDirective {

  constructor(private _el: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange1(event:any) {
    const initalValue = this._el.nativeElement.value;
    console.log(initalValue);
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g,'');
    console.log(this._el.nativeElement.value);
    if (initalValue !== this._el.nativeElement.value) {
      event.preventDefault();
    }
  }

}
