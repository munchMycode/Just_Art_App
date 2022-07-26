import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemBidsPage } from './item-bids';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule} from '../../directives/directives.module'

@NgModule({
  declarations: [
    ItemBidsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemBidsPage),
    PipesModule,
    DirectivesModule
  ],
})
export class ItemBidsPageModule {}
