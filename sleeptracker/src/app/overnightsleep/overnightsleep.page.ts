import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-overnightsleep',
  templateUrl: './overnightsleep.page.html',
  styleUrls: ['./overnightsleep.page.scss'],
})
export class OvernightsleepPage implements OnInit {

  public sleepDate;
  public sleepTime;

  public wakeDate;
  public wakeTime;

  constructor(private sleepService: SleepService) { }

  ngOnInit() {
  }

  handleSleepTime(): void {
    if (!this.sleepDate || !this.sleepTime) {
      return
    }
    let sd: Date = new Date(this.sleepDate);
    let st: Date = new Date(this.sleepTime);
    console.log(`The date of sleep is: ${sd.getMonth()}-${sd.getDate()}-${sd.getFullYear()}`);
    console.log(`The time of sleep is: ${st.getHours()}:${String(st.getMinutes()).length === 1 ? `0${st.getMinutes()}` : st.getMinutes()}:00`);
    // new OvernightSleepData()
  }

  handleWakeTime(): void {
    if (!this.sleepDate || !this.sleepTime || !this.wakeDate || !this.wakeTime) {
      return
    }
    let wd: Date = new Date(this.wakeDate);
    let wt: Date = new Date(this.wakeTime);
    let sd: Date = new Date(this.sleepDate);
    let st: Date = new Date(this.sleepTime);
    // console.log(`The date of sleep is: ${sd.getMonth()}-${sd.getDate()}-${sd.getFullYear()}`);
    // console.log(`The time of sleep is: ${st.getHours()}:${String(st.getMinutes()).length === 1 ? `0${st.getMinutes()}` : st.getMinutes()}:00`);
    // console.log(`The date of wake is: ${wd.getMonth()}-${wd.getDate()}-${wd.getFullYear()}`);
    // console.log(`The time of wake is: ${wt.getHours()}:${String(wt.getMinutes()).length === 1 ? `0${wt.getMinutes()}` : wt.getMinutes()}:00`);

    const sleepDate: Date = new Date(sd.getFullYear(), sd.getMonth(), sd.getDate(), st.getHours(), st.getMinutes());
    const wakeDate: Date = new Date(wd.getFullYear(), wd.getMonth(), wd.getDate(), wt.getHours(), wt.getMinutes());

    const overnightSleepData = new OvernightSleepData(sleepDate, wakeDate);
    console.log(overnightSleepData.summaryString());

    this.sleepService.logOvernightData(overnightSleepData);

    console.log("All overnight data:", SleepService.AllOvernightData);

  }
}
