import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureReaderModule } from './temperature-reader/temperature-reader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemperatureReaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
