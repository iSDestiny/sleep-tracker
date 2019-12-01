import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import {Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  constructor(private storage: Storage) {
    this.storage.get('sleepData').then((data) => {
      if(data) {
        data.forEach((item) => {
            if(item.hasOwnProperty('loggedValue')) {
              SleepService.AllSleepData.push(new StanfordSleepinessData(item.loggedValue, item.loggedAt));
            }else {
              SleepService.AllSleepData.push(new OvernightSleepData(item.sleepStart, item.sleepEnd));
            }
        })
      }else {
        return this.storage.set('sleepData', []);
      }
    });
    this.storage.get('overnightData').then((data) => {
      if(data) {
        data.forEach((item) => {
          SleepService.AllOvernightData.push(new OvernightSleepData(item.sleepStart, item.sleepEnd));
        })
      }else {
        return this.storage.set('overnightData', []);
      }
    });
    this.storage.get('sleepinessData').then((data) => {
      if(data) {
        data.forEach((item) => {
          SleepService.AllSleepinessData.push(new StanfordSleepinessData(item.loggedValue, item.loggedAt));
        })
      }else {
        return this.storage.set('sleepinessData', []);
      }
    });
    console.log("this got recreated");
  	// if(SleepService.LoadDefaultData) {
      // this.addDefaultData();
      // SleepService.LoadDefaultData = false;
  	// }
  }

  private addDefaultData() {
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 18, 2019 08:03:00')));
  }

  public logOvernightData(sleepData:OvernightSleepData) {
  	SleepService.AllSleepData.push(sleepData);
  	SleepService.AllOvernightData.push(sleepData);
    this.storage.get('sleepData').then((data) => {
      if(data) {
        data.push(sleepData);
          return this.storage.set('sleepData', data);
        }else {
          return this.storage.set('sleepData', [sleepData]);
        }
    });

    this.storage.get('overnightData').then((data) => {
      if(data) {
        data.push(sleepData);
          return this.storage.set('overnightData', data);
        }else {
          return this.storage.set('overnightData', [sleepData]);
        }
    });
  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
  	SleepService.AllSleepData.push(sleepData);
  	SleepService.AllSleepinessData.push(sleepData);

  	this.storage.get('sleepData').then((data) => {
      if(data) {
        data.push(sleepData);
          return this.storage.set('sleepData', data);
      }else {
          return this.storage.set('sleepData', [sleepData]);
        }
    });

    this.storage.get('sleepinessData').then((data) => {
      if(data) {
          data.push(sleepData);
          return this.storage.set('sleepinessData', data);
      }else {
          return this.storage.set('sleepinessData', [sleepData]);
      }
  });

  }
}
