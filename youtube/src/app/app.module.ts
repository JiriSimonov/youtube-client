import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, CoreModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
