import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-time-selector',
  imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule],
  templateUrl: './time-selector.html',
})
export class TimeSelector {
  days = Array.from({ length: 28 }, (_, i) => i + 1);
}
