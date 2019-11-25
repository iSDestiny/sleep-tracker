import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-overnightsleep',
  templateUrl: './overnightsleep.page.html',
  styleUrls: ['./overnightsleep.page.scss'],
})
export class OvernightsleepPage implements OnInit {

  constructor(sleepService: SleepService) { }

  ngOnInit() {
  }

  getCurrentTime() {
    console.log(new Date());
    // new OvernightSleepData()
  }

  updateMyDate($event) {
    const day: number = $event.day.value;
    const month: number = $event.month.value;
    const year: number = $event.year.value;

    console.log(month, " ", day, ", ", year);
    // console.log($event);
  }
  

}
