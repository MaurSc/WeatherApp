import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { FrameWeatherComponent } from './components/frame-weather/frame-weather.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormButtonComponent } from './components/form-button/form-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    FrameWeatherComponent,
    FormButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
