import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemperatureInput } from '../../models/temperature-input';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-temperature-display',
  templateUrl: './temperature-display.component.html',
  styleUrls: ['./temperature-display.component.scss']
})
export class TemperatureDisplayComponent {
  minTemperature!: number;
  maxTemperature!: number;
  targetTemperature!: number;
  hideTemperatureValues = false;

  constructor() {}

  onTemperatureValuesChanges(values?: TemperatureInput) {
    if (values) {
      this.minTemperature = values.minTemperature;
      this.maxTemperature = values.maxTemperature;
      this.targetTemperature = values.targetTemperature;
    }
  }

  onTemperatureFormIsInvalid(isInValid: boolean) {
    this.hideTemperatureValues = isInValid;
  }
}
