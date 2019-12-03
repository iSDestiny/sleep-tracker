import { Component, OnInit } from '@angular/core';
import {PickerController} from "@ionic/angular";
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

  constructor(private pickerController: PickerController, private sleepService: SleepService) { }

  ngOnInit() {
  }

  handleSleepinessData() {
    const loggedDate: Date = new Date();
    const sleepinessData = new StanfordSleepinessData(this.scaleScore, loggedDate);

    console.log(sleepinessData.summaryString());

    this.sleepService.logSleepinessData(sleepinessData);
  }

  async showScalePicker() {
    let options: PickerOptions = {
      buttons: [
        {text: 'Cancel'},
        {text: 'Done'}
      ],
      columns: [
        {
          name: 'sleepiness',
          options: [
            {text: StanfordSleepinessData.ScaleValues[1], value: 1},
            {text: StanfordSleepinessData.ScaleValues[2], value: 2},
            {text: StanfordSleepinessData.ScaleValues[3], value: 3},
            {text: StanfordSleepinessData.ScaleValues[4], value: 4},
            {text: StanfordSleepinessData.ScaleValues[5], value: 5},
            {text: StanfordSleepinessData.ScaleValues[6], value: 6},
            {text: StanfordSleepinessData.ScaleValues[7], value: 7},
          ]
        }
      ],
    };
    let picker = await this.pickerController.create(options);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('sleepiness');
      this.scaleScore = col.options[col.selectedIndex].value;
    })
  }
}
