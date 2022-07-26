import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';


@IonicPage()
@Component({
  selector: 'page-artist-profile',
  templateUrl: 'artist-profile.html',
})

export class ArtistProfilePage {

  // Holds user info 
  user:any;

  // Holds info of user being viewed
  artist:any;
  artistInfo:any;

  // Hold array of ojects related to var name
  artistPosts:Array<any>=[];
  artistBids:Array<any>=[];
  artistLikes:Array<any>=[];

  // Segment button
  galleryType:string="gallery";

  // Modal Component
  component:any = {
    page:'<ion-header>Modal Page</ion-header>'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private actionSheetCtrl : ActionSheetController,
    private modalCtrl : ModalController,
  ) 
  {
    // Get basic artist info from previous page
    this.artist = this.navParams.get('artist');

    // Get additional artist info? likes,followers, bids, bio, links
    this.getArtistInfo(this.artist);

    // Get artist posts;
    this.getArtistPosts(this.artist)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistProfilePage');
  }

  getArtistPosts(artist){
    this.artistPosts = [
      {
        comments:120,
        bids:100,
        likes:2000,
        like:false,
        price:50000,
        name:'alone on a blue lake',
        year:'2017',
        img:'assets/items/art10.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2017-12-06 20:20',
        reposts: 1500
      },
      {
        comments:100,
        bids:30,
        likes:15000,
        like:true,
        price:50000,
        name:'digitalism',
        year:'2018',
        img:'assets/items/art9.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2018-01-06 20:20',
        resposts:2300
      },
      {
        comments:40,
        bids:13,
        likes:350,
        like:true,
        price:50000,
        name:'smoking color',
        year:'2018',
        img:'assets/items/art3.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2018-01-06 20:20',
        reposts: 650
      },
      {
        comments:5,
        bids:0,
        likes:129,
        like:true,
        price:50000,
        name:'happy couple',
        year:'2018',
        img:'assets/items/art5.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2018-01-06 20:20',
        reposts:100
      },
      {
        comments:120,
        bids:20,
        likes:800,
        like:false,
        price:152000,
        name:'staircase',
        year:'2017',
        img:'assets/items/art8.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2017-12-06 20:20',
        reposts:1100
      },
      {
        comments:2,
        bids:6,
        likes:2,
        like:true,
        price:500000,
        name:'new york blurr',
        year:'2018',
        img:'assets/items/art14.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2018-01-06 20:20',
        reposts:10
      },
      {
        comments:4,
        bids:1,
        likes:13,
        like:true,
        price:10000,
        name:'orange the new pink',
        year:'2018',
        img:'assets/items/art12.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2018-01-06 20:20',
        reposts: 5
      },
      {
        comments:70,
        bids:400,
        likes:120000,
        like:true,
        price:1200000,
        name:'rainbow lion',
        year:'2017',
        img:'assets/items/art1.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2018-01-06 20:20',
        reposts:10200
      }
    ]
  }

  getArtistInfo(artist) {
    this.artistInfo = {
      artist: {
        name: 'John Wick',
        bio: ' A budding young artist with a love for contemporary art that has spanned 11 years. More can be written, the text can get very long but the interface should be able to streach out hopefully, lets see how far this can be stretched, perhaps a limit should be imposed to guarantee uniformity.',
        location: 'South Africa',
        type:'Sculptor',
        background:'../../assets/items/art3.jpg'
      }
    }
  }

  showActionSheet(user) {
    let actionSheet = this.actionSheetCtrl.create({
      buttons:[
        {
          icon:'notifications',
          text:'Turn on notifications',
          role:'selected',
          handler:()=>{
            //code... 
            this.turnOnNotifications(user)
          },
        },
        {
          icon:'alert',
          text:'Report '+user.handle,
          role:'selected',
          handler:()=>{
            //code... 
            this.reportUser(user)
          },
        },
        {
          icon:'remove-circle',
          text:'Block user ',
          role:'destructive',
          handler:()=>{
            //code... 
            this.blockUser(user)

          },
        },
      ],
      enableBackdropDismiss:true,
    });

    actionSheet.present();
  }

  viewPost(post) {
    let modal = this.modalCtrl.create(this.component.page,post)

    modal.present()
  }

  followUnfollowUser(user) {
    
  }

  reportUser(user){

  }

  turnOnNotifications(artist) {

  }

  blockUser(user){

  }



}
