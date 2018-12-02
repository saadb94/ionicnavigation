import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPlacementPage } from './confirm-placement';

@NgModule({
  declarations: [
    ConfirmPlacementPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPlacementPage),
  ],
})
export class ConfirmPlacementPageModule {}
