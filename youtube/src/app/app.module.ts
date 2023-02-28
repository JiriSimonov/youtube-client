import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { STORAGE_KEY_PREFIX } from './core/storage/tokens/storage-key.tokens'
import { WINDOW } from './core/storage/tokens/window.token'
import { SharedModule } from './shared/shared.module'

const STORAGE_PREFIX = 'JIRI'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    {
      provide: WINDOW,
      useFactory: () => window,
    },
    {
      provide: STORAGE_KEY_PREFIX,
      useValue: STORAGE_PREFIX,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
