import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lastEmittedValue: any = 0;
  percentage = 0;
  totalPages = 355;

  constructor() {}

  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
    if (!isNaN(this.lastEmittedValue)) {
      this.percentage = Math.floor(this.lastEmittedValue / this.totalPages * 100);
    }
  }

}
