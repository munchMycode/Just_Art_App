import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistProfilePage } from './artist-profile';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ArtistProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistProfilePage),
    PipesModule
  ],
})
export class ArtistProfilePageModule {}
