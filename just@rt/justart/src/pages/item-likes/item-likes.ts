import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-item-likes',
  templateUrl: 'item-likes.html',
})
export class ItemLikesPage {

  // Holds array of likes
  likes:Array<any>=[];

  // Holds item info
  item:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) 
  {
    // GET item data from previous page
    this.item = this.navParams.get('data');

    // GET likes from db
    this.getLikes(this.item.id)
    
  }

  ionViewWillLoad() {
    // No Need for user info on this page
  }

  viewProfile(like){
    this.navCtrl.push('ArtistProfilePage',{artist:like.user})
  }

  getLikes(item){
    // Http for likes of item

    console.log(item.id)

      this.likes = [
        {
          user:{
            handle:'@john.doe',
            img:'../../assets/images/boy/5.jpg',
            type:'artist'
          },
          date:'2018-01-04 16:30',
          likes:251230,
          bids:10,
          works:19,
          followers:3000
        },
        {
          user:{
            handle:'@jane.doe',
            img:'../../assets/images/gal/9.jpg',
            type:'buyer'
          },
          date:'2017-12-24 16:30',
          likes:100000,
          bids:20,
          works:0,
          followers:500
        },
        {
          user:{
            handle:'@monsterofart',
            img:'../../assets/images/boy/1.jpg',
            type:'artist'
          },
          date:'2018-01-02 11:30',
          likes:250500600000,
          bids:332,
          works:50,
          followers:7000
        },
        {
          user:{
            handle:'@jannice',
            img:'../../assets/images/gal/2.jpg',
            type:'buyer'
          },
          date:'2018-01-03 16:30',
          likes:1500,
          bids:100,
          works:0,
          followers:1000
        },
        {
          user:{
            handle:'@exampleArts',
            img:'../../assets/items/gallery2.jpg',
            type:'Art House'
          },
          date:'2018-01-03 16:30',
          likes:112,
          bids:500,
          works:98,
          followers:894
        },
        {
          user:{
            handle:'@supercolorfragilious',
            img:'../../assets/images/gal/12.jpg',
            type:'critic'
          },
          date:'2018-01-05 16:30',
          likes:2000,
          bids:10,
          works:0,
          followers:1200
        }
      ]
  }
}
