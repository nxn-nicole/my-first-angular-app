import { Component, input, linkedSignal, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { Time } from '../../models/time.model';
import { Season } from '../../models/season.model';

@Component({
  selector: 'app-time-selector',
  imports: [NgClass, MatFormFieldModule, MatInputModule, MatTimepickerModule],
  templateUrl: './time-selector.html',
})
export class TimeSelector {
  initialTime = input<Time>();
  timeChanged = output<Time>();

  protected readonly Season = Season;
  days = Array.from({ length: 28 }, (_, i) => i + 1);

  selectedYear = linkedSignal(() => this.initialTime()?.year ?? 1);
  selectedSeason = linkedSignal(() => this.initialTime()?.season ?? Season.SPRING);
  selectedDay = linkedSignal(() => this.initialTime()?.day ?? 1);
  selectedHourMinute = linkedSignal(() => {
    const time = this.initialTime();
    return time ? new Date(0, 0, 0, time.hour, time.minute) : null;
  });

  private emit() {
    const d = this.selectedHourMinute();
    this.timeChanged.emit({
      year: this.selectedYear(),
      season: this.selectedSeason(),
      day: this.selectedDay(),
      hour: d?.getHours() ?? 0,
      minute: d?.getMinutes() ?? 0,
    });
  }

  onYearChange(event: Event) {
    this.selectedYear.set(Number((event.target as HTMLInputElement).value));
    this.emit();
  }

  incrementYear() {
    this.selectedYear.update(y => y + 1);
    this.emit();
  }

  decrementYear() {
    this.selectedYear.update(y => Math.max(1, y - 1));
    this.emit();
  }

  selectSeason(season: Season) {
    this.selectedSeason.set(season);
    this.emit();
  }

  selectDay(day: number) {
    this.selectedDay.set(day);
    this.emit();
  }

  onTimeChange(date: Date | null) {
    this.selectedHourMinute.set(date);
    this.emit();
  }
}
