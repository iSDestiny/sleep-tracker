import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';
import {ModalController} from "@ionic/angular";
import {SleepModalComponent} from "../sleepmodal/sleepmodal.component";

@Component({
  selector: 'app-overnightsleep',
  templateUrl: './overnightsleep.page.html',
  styleUrls: ['./overnightsleep.page.scss'],
})
export class OvernightsleepPage implements OnInit {

  public sleepTime;
  public wakeTime;

  constructor(private sleepService: SleepService, public modalController: ModalController) { }

  async presentModal() {
    this.sleepTime = new Date();
    console.log(`The date of sleep is: ${this.sleepTime.getMonth()}-${this.sleepTime.getDate()}-${this.sleepTime.getFullYear()}`);
    console.log(`The time of sleep is: ${this.sleepTime.toLocaleTimeString()}`);

    const modal = await this.modalController.create({
      component: SleepModalComponent
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();

    if(data.dismissType === 'endSleep') {
      this.wakeTime = data.endTime;
      console.log(`The date of wake is: ${this.wakeTime.getMonth()}-${this.wakeTime.getDate()}-${this.wakeTime.getFullYear()}`);
      console.log(`The time of wake is: ${this.wakeTime.toLocaleTimeString()}`);

      const overnightSleepData = new OvernightSleepData(this.sleepTime, this.wakeTime);
      console.log(overnightSleepData.summaryString());
      this.sleepService.logOvernightData(overnightSleepData);
      console.log("All overnight sleep data:", SleepService.AllOvernightData);
    }
  }

  ngOnInit() {
  }
}
