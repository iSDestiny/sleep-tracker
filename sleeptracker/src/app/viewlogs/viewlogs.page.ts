import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-viewlogs',
  templateUrl: './viewlogs.page.html',
  styleUrls: ['./viewlogs.page.scss'],
})
export class ViewlogsPage implements OnInit {

  public toggle: string

  public overnightSleepData: OvernightSleepData[]
  public sleepinessData: StanfordSleepinessData[]

  constructor(private sleepService: SleepService) { }

  ngOnInit() {
    this.overnightSleepData = SleepService.AllOvernightData;
    this.sleepinessData = SleepService.AllSleepinessData;
    this.toggle = "night";
  }

  toggler() {
    this.toggle === "night" ? this.toggle = "day" : this.toggle = "night";
  }

}
