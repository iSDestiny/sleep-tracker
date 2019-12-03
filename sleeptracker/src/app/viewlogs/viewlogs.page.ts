import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viewlogs',
  templateUrl: './viewlogs.page.html',
  styleUrls: ['./viewlogs.page.scss'],
})
export class ViewlogsPage implements OnInit {

  public toggle: string


  constructor(private sleepService: SleepService, public alertController: AlertController) { }

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
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          
        }
      }, {
        text: 'Okay',
        handler: () => {
          if (type === "sleepiness") {
            this.deleteSleepiness(id);
          } else {
            this.deleteOvernight(id);
          }
        }
      }]
    })

    alert.present();
  }
}
