import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseItemPage } from './purchase-item';

@NgModule({
  declarations: [
    PurchaseItemPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseItemPage),
  ],
})
export class PurchaseItemPageModule {}
