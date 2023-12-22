import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TemperatureInputComponent } from './components/temperature-input/temperature-input.component';
import { TemperatureIndicatorComponent } from './components/temperature-indicator/temperature-indicator.component';
import { TemperatureDisplayComponent } from './pages/temperature-display/temperature-display.component';


@NgModule({
  declarations: [
    TemperatureIndicatorComponent,
    TemperatureInputComponent,
    TemperatureDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TemperatureReaderModule { }