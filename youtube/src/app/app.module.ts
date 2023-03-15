import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InterseptorInterceptor } from './youtube/interceptors/interseptor.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, NoopAnimationsModule, HttpClientModule, NgOptimizedImage],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterseptorInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
