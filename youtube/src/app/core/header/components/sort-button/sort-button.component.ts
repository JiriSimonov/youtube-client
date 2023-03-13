import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})
export class SortButtonComponent {
  @Input() name = '';
  @Output() sort = new EventEmitter<number>();
  public direction = 1;

  changeDirection() {
    this.direction = this.direction * -1;
    this.sort.emit(this.direction);
  }
}
