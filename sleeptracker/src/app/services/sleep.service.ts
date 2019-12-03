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
	// public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  constructor(private storage: Storage) {
    console.log("this got recreated");

    this.readIntoArray('overnightData').then((data) => {
      data.forEach(item => {
        SleepService.AllOvernightData.push(item);
        // SleepService.AllSleepData.push(item);
      });
      // console.log(SleepService.AllOvernightData);
    });
    this.readIntoArray('sleepinessData').then((data) => {
      data.forEach(item => {
        SleepService.AllSleepinessData.push(item);
        // SleepService.AllSleepData.push(item);
      });
      // console.log(SleepService.AllSleepinessData);
    });

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
  	// SleepService.AllSleepData.push(sleepData);
  	SleepService.AllOvernightData.push(sleepData);
    this.create('overnightData', sleepData).then((data) => {
      console.log(`Logged into overnightData: ${sleepData}`);
      console.log(data);
    });
  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
  	// SleepService.AllSleepData.push(sleepData);
  	SleepService.AllSleepinessData.push(sleepData);

    this.create('sleepinessData', sleepData).then((data) => {
      console.log(`Logged into sleepinessData ${sleepData}`);
      console.log(data);
    });
  }

  public create(key:string, value:SleepData): Promise<SleepData[]> {
    return this.storage.get(key).then((data) => {
      if(data) {
        data.push(value);
        return this.storage.set(key, data);
      }else {
        return this.storage.set(key, [value]);
      }
    })
  }

  public delOvernightData(id: string) {
    
    this.storage.get("overnightData").then((data: OvernightSleepData[]) => {
      let newData = data.filter(d => d.id !== id)

      for( var i = 0; i < SleepService.AllOvernightData.length; i++){ 
        if ( SleepService.AllOvernightData[i].id === id) {
          SleepService.AllOvernightData.splice(i, 1); 
        }
     }
      
      return this.storage.set("overnightData", newData);
    });
  }

  public delSleepinessData(id: string) {
    
    this.storage.get("sleepinessData").then((data: StanfordSleepinessData[]) => {
      let newData = data.filter(d => d.id !== id)

      for( var i = 0; i < SleepService.AllSleepinessData.length; i++){ 
        if ( SleepService.AllSleepinessData[i].id === id) {
          SleepService.AllSleepinessData.splice(i, 1); 
        }
     }
      
      return this.storage.set("sleepinessData", newData);
    });
  }


  public readIntoArray(key:string){
      return this.storage.get(key).then((data: any[]) => {
        if (data) {
          console.log(data);
          return data.map((item) => {
              if(key === 'sleepinessData') {
                return new StanfordSleepinessData(item.loggedValue, item.loggedAt, item.id);
              }else {
                return new OvernightSleepData(item.sleepStart, item.sleepEnd, item.id);
              }
          })
        }else {
          return this.storage.set(key, []).then((item) => {
            return [];
          });
        }
      })
  }
}
