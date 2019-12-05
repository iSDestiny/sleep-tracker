import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-viewlogs',
  templateUrl: './viewlogs.page.html',
  styleUrls: ['./viewlogs.page.scss'],
})
export class ViewlogsPage implements OnInit {

  public toggle: string;


  constructor(private sleepService: SleepService, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.toggle = "night";
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
  
  deleteOvernight(id: string) {
    console.log("deleting:", id);
    this.sleepService.delOvernightData(id);
  }
  
  deleteSleepiness(id: string) {
    console.log("deleting:", id);
    this.sleepService.delSleepinessData(id);
  }

  async handleDeleteConfirm(id: string, type: string) {
    const alert = await this.alertController.create({
      header: 'Really Delete?',
      message: 'Deletion permanently removes this logged entry.',
      cssClass: 'dark',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'picker-btn',
        handler: () => {
          
        }
      }, {
        text: 'Okay',
        role: 'okay',
        cssClass: 'picker-btn',
        handler: () => {
          if (type === "sleepiness") {
            this.deleteSleepiness(id);
          } else {
            this.deleteOvernight(id);
          }
        }
      }]
    });

    await alert.present();
    alert.onDidDismiss().then((data) => {
      if(data.role === 'okay') {
        this.presentConfirmationToast()
      }
    })
  }

  async presentConfirmationToast() {
    const toast = await this.toastController.create({
      message: `Deleted the entry`,
      position: 'bottom',
      duration: 1000
    });
    return await toast.present();
  }
}
