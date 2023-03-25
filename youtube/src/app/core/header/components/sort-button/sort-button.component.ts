import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})
export class SortButtonComponent {
  @Output() public sort = new EventEmitter<number>();
  @Input() public name = '';

  public direction = 1;

  public changeDirection(): void {
    this.direction *= -1;
    this.sort.emit(this.direction);
  }
}
