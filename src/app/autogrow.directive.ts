import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[autoGrow]'
})


export class AutoGrowDirective {
@HostBinding('style.width.px')
    width= 120;

@HostListener('focus')
 onFocus() {
   this.width = 500;
 }

@HostListener('blur')
 onBlur() {
   this.width = 120;
 }
}
