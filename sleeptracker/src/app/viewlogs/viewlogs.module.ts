import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewlogsPageRoutingModule } from './viewlogs-routing.module';

import { ViewlogsPage } from './viewlogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewlogsPageRoutingModule
  ],
  declarations: [ViewlogsPage]
})
export class ViewlogsPageModule {}
