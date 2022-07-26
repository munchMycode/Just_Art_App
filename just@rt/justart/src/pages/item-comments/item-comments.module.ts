import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemCommentsPage } from './item-comments';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule} from '../../directives/directives.module';

@NgModule({
  declarations: [
    ItemCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCommentsPage),
    PipesModule,
    DirectivesModule
  ],
})
export class ItemCommentsPageModule {}
