import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-sleepmodal',
  templateUrl: './sleepmodal.component.html',
  styleUrls: ['./sleepmodal.component.scss'],
})
export class SleepModalComponent implements OnInit {
  currentTimeString: string;
  currentTime: Date;
  interval: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentTime = new Date();
      this.currentTimeString = this.currentTime.toLocaleTimeString();
    }, 500)
  }

  dismiss() {
    clearInterval(this.interval);
    return this.modalController.dismiss({
      'dismissed': true,
      'endTime': this.currentTime
    });
  }
}
