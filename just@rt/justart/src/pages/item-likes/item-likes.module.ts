import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemLikesPage } from './item-likes';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ItemLikesPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemLikesPage),
    PipesModule,
    DirectivesModule

  ],
})
export class ItemLikesPageModule {}
