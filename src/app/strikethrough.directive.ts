import { ElementRef, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem : ElementRef) { }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration = action;
  }

  @HostListener("click") onClicks(){
    this.textDeco('line-through')
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco('none')
  }

}
