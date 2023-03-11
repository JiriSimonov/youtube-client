import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

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
      const getBorderColor = (currentDate: number, validDate: number): string => {
        const dateDifference = currentDate - validDate;
        const oneWeek = 604800000;
        const oneMonth = 2628002880;
        const halfYear = 15768017280;
        if (dateDifference <= oneWeek) return 'blue';
        if (dateDifference < oneMonth) return 'green';
        if (dateDifference < halfYear) return 'yellow';
        return 'red';
      };
      const borderColorPattern: Record<string, () => void> = {
        yellow: () => this.setBorderColor('yellow'),
        red: () => this.setBorderColor('red'),
        green: () => this.setBorderColor('green'),
        blue: () => this.setBorderColor('blue'),
      };
      const color = getBorderColor(currentDate, validDate);

      borderColorPattern[color]();
    }
  }

  private setBorderColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', color);
  }
}
