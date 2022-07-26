import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentRepliesPage } from './comment-replies';

@NgModule({
  declarations: [
    CommentRepliesPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentRepliesPage),
  ],
})
export class CommentRepliesPageModule {}
