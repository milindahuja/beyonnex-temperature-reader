import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemperatureDisplayComponent } from './temperature-reader/pages/temperature-display/temperature-display.component';

const routes: Routes = [
  {
    path: 'temperature-display',
    component: TemperatureDisplayComponent,
  },
  { path: '**', redirectTo: 'temperature-display' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
