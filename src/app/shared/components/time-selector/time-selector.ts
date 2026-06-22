import { Component } from '@angular/core';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.html',
})
export class TimeSelector {
  days = Array.from({ length: 28 }, (_, i) => i + 1);
}
