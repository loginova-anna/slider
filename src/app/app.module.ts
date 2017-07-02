import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './safehtml.pipe';
import { DoubleSliderComponent } from './double-slider/double-slider.component';
import { CardMockComponent } from './card-mock/card-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    DoubleSliderComponent,
    CardMockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
