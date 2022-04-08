import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { FrameWeatherComponent } from './components/frame-weather/frame-weather.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FrameContentComponent } from './components/frame-content/frame-content.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CelciusPipe } from './pipes/toCelcius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    FrameWeatherComponent,
    FormButtonComponent,
    FrameContentComponent,
    PreloaderComponent,
    CelciusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
