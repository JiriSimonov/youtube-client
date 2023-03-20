import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  public showHeader = true;
  public showSettings = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}
  public ngOnInit(): void {
    this.subs.add(
      this.router.events
        .pipe(
          filter(
            (event) =>
              (event instanceof NavigationEnd && event.urlAfterRedirects === '/404') ||
              (event instanceof NavigationStart && this.router.url === '/404'),
          ),
          tap(() => {
            this.showHeader = !this.showHeader;
            this.cdr.detectChanges();
          }),
        )
        .subscribe(),
    );
  }

  public onSettingVisibilityChange(): void {
    this.showSettings = !this.showSettings;
    this.cdr.detectChanges();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
