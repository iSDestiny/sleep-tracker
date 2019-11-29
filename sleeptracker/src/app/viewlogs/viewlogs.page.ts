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


  constructor(private sleepService: SleepService) { }

  ngOnInit() {
  
    this.toggle = "night";

    console.log("page initialized");
    console.log(this.allSleepData);
    console.log(this.allOvernightData);
    console.log(this.allSleepinessData);
  }

  toggler() {
    this.toggle === "night" ? this.toggle = "day" : this.toggle = "night";
  }

  get allOvernightData() {
		return SleepService.AllOvernightData;
  }
  
  get allSleepinessData() {
		return SleepService.AllSleepinessData;
	}

  get allSleepData() {
		return SleepService.AllSleepData;
	}

}
