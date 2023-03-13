import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})
export class SortButtonComponent {
  @Input() public name = '';

  @Output() public sort = new EventEmitter<number>();

  public direction = 1;

  public changeDirection(): void {
    this.direction *= -1;
    this.sort.emit(this.direction);
  }
}
