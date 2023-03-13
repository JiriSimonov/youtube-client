import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

const enum Color {
  Yellow = 'yellow',
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
}
const oneWeek = 604800000;
const oneMonth = 2628002880;
const halfYear = 15768017280;
const getBorderColor = (currentDate: number, validDate: number): string => {
  const dateDifference = currentDate - validDate;
  if (dateDifference <= oneWeek) return Color.Blue;
  if (dateDifference < oneMonth) return Color.Green;
  if (dateDifference < halfYear) return Color.Yellow;
  return Color.Red;
};

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnChanges {
  @Input('appBorderColor') date!: Date | null;

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.date) {
      const validDate = new Date(this.date).getTime();
      const currentDate = Date.now();
      const color = getBorderColor(currentDate, validDate);
      this.setBorderColor(color);
    }
  }

  private setBorderColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', color);
  }
}
