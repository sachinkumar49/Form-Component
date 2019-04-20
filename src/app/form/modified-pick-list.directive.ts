import { Directive, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modifiedPickList]'
})
export class ModifiedPickListDirective implements AfterViewInit {

  constructor(private ele: ElementRef) { }
  ngOnInit(){

  }
  ngAfterViewInit(){
    const buttonElement = this.ele.nativeElement.children[0].lastElementChild;
    this.ele.nativeElement.children[0].lastElementChild.remove();
    this.ele.nativeElement.children[0].lastElementChild.children[0].append(buttonElement);
    this.ele.nativeElement.children[0].firstElementChild.remove();
  }

}
