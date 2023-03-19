import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  @Output() public changeVisibility = new EventEmitter<void>();

  public changeSettingsVisibility(): void {
    this.changeVisibility.emit();
  }
}
