import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommentRepliesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment-replies',
  templateUrl: 'comment-replies.html',
})
export class CommentRepliesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  )
  {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentRepliesPage');
  }

}
