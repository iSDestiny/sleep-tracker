import { Component, OnInit } from '@angular/core';
import {PickerController, ToastController} from "@ionic/angular";
import { PickerOptions } from "@ionic/core"
import {StanfordSleepinessData} from "../data/stanford-sleepiness-data";
import {SleepService} from "../services/sleep.service";

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  scaleScore: number;
  scaleText: string;

  constructor(private pickerController: PickerController, private sleepService: SleepService, public toastController: ToastController) { }

  ngOnInit() {
  }

  handleSleepinessData() {
    const loggedDate: Date = new Date();
    const sleepinessData = new StanfordSleepinessData(this.scaleScore, loggedDate);

    console.log(sleepinessData.summaryString());

    this.sleepService.logSleepinessData(sleepinessData);
    return this.presentConfirmationToast(this.scaleScore);
  }

  async showScalePicker() {
    let btnType: string;
    let options: PickerOptions = {
      buttons: [
        {text: 'Cancel', cssClass: 'picker-btn', role: 'cancel', handler: () => {btnType = 'cancel'}},
        {text: 'Done', cssClass: 'picker-btn', role: 'done', handler: () => {btnType = 'done'}}
      ],
      columns: [
        {
          name: 'sleepiness',
          options: [
            {text: '1', value: 1},
            {text: '2', value: 2},
            {text: '3', value: 3},
            {text: '4', value: 4},
            {text: '5', value: 5},
            {text: '6', value: 6},
            {text: '7', value: 7},
          ],
        }
      ],
      cssClass: ['picker-custom']
    };
    let picker = await this.pickerController.create(options);
    await picker.present();
    picker.onDidDismiss().then(async data => {
      if(btnType === 'done'){
        let col = await picker.getColumn('sleepiness');
        this.scaleScore = col.options[col.selectedIndex].value;
        this.scaleText = StanfordSleepinessData.ScaleValues[this.scaleScore];
      }
    })
  }


  async presentConfirmationToast(level: number) {
    const toast = await this.toastController.create({
      message: `Logged sleepiness level ${level}`,
      position: 'bottom',
      duration: 1000
    });
    return await toast.present();
  }
}
