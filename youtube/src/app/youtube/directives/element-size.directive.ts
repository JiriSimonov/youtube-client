import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElementSize]',
})
export class ElementSizeDirective implements OnChanges {
  @Input('appElementSizeWidth') width!: string | null;

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.width) {
      this.renderer.setStyle(this.element.nativeElement, 'width', `${this.width}`);
    }
  }
}
