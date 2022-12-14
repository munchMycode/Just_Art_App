import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from './messages';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule} from '../../directives/directives.module';

@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    PipesModule,
    DirectivesModule
  ],
})
export class MessagesPageModule {}
