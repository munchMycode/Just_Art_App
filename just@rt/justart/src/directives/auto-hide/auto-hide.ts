import { Directive, Renderer, ElementRef } from '@angular/core';


@Directive({
  selector: '[auto-hide]', // Attribute selector
  host: {
    // Event
    '(ionScroll)':'onContentScroll($event)'
  }
})
export class AutoHideDirective {

  fabToHide;
  oldScrollTop: number = 0 ;

  constructor(
    private renderer:Renderer,
    private element: ElementRef
  ) 
  { 
    console.log ('Auto Hide Fab Directive')
  }

  ngOnInit(){
    // grab hold of element before drawing dom
    this.fabToHide = this.element.nativeElement.getElementsByClassName('fab')[0];   
  }

  onContentScroll(e){
    /**
     * Function hooks into the dom and styles
     * the element on scroll
     */

    // animated transtion on opacity & transform with 500ms delay
    this.renderer.setElementStyle(this.fabToHide,'webkitTransition','transform 500ms, opacity 700ms');

    if(e.scrollTop - this.oldScrollTop > 10){
      // user is scrolling down

      this.renderer.setElementStyle(this.fabToHide,'opacity','0');

      // resize image (make it smaller by 10% as it transitions)
      this.renderer.setElementStyle(this.fabToHide,'webkitTransform','scale3D(.1,.1,.1)');

    } else if (e.scrollTop - this.oldScrollTop < 0) {
      // user scrolling up

      this.renderer.setElementStyle(this.fabToHide,'opacity','1')

      // resize image (set to original size)
      this.renderer.setElementStyle(this.fabToHide,'webkitTransform','scale3D(1,1,1)');

    }

    this.oldScrollTop = e.scrollTop;
  }

}
