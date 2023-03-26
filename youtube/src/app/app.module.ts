import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeInterceptor } from './youtube/interceptors/youtube.interceptor';
import { cardsReducers } from './core/store/reducers';
import { YoutubeStoreModule } from './youtube/store/youtube-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NoopAnimationsModule,
    HttpClientModule,
    NgOptimizedImage,
    StoreModule.forRoot({ cards: cardsReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(),
    YoutubeStoreModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
