import { Component } from '@angular/core';
import { NavController,NavParams,PopoverController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';

// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // User info
  user:any

  // Holds Array of items
  items:Array<any>;

  // Hold number of notifications,messages and alerts
  notifications:number;
  alerts:number;
  messages:number;

  // Keeps track of double taps
  tapCounter:number=0

  constructor(
    public navCtrl: NavController,
    public navParams:NavParams,
    public popOverCtrl: PopoverController,
    public actionSheetCtrl : ActionSheetController
  ) 
  {
    // GET user info
    this.user= {
      handle:'@someDopehandle',
      img:'../../assets/images/boy/3.jpg',
      type:'artist'
    }

    // GET posts
    this.getPosts();
    
    // GET notifications, messages and alerts from db
    this.notifications=4;
    this.messages=3;
    this.alerts=1;
  }

  openPage(page,item:any){
    // Opens pages relative to items
    this.navCtrl.push(page,{data:item,user:this.user})
  }

  openMenu(page){
    // Opens pages relative to ui navigation messages, account etc
    this.navCtrl.push(page)
  }

  likeItem(item){
    
    this.tapCounter ++
    
    if (this.tapCounter==2) {  

      var data = {
        user:this.user.handle,
        item:item.id, 
      }
  
      // Change data variable accordingly
      data['like']= item.like == true ? data['like']=false : data['like']=true ;

      // Http to like at db

      // Update ui on success
      item.like = data['like'];
      item.like ? item.likes ++ : item.likes --;

    }


    // Reset counter after 100ms
    setTimeout (()=>{
      this.tapCounter=0
    },100)
  }

  viewArtist(item){
    this.navCtrl.push('ArtistProfilePage',{artist:item.user,user:this.user})
  }

  moreActions(item){
    this.showActionSheet(item)
  }

  getPosts() {
    // GET items from db
    this.items=[
      {
        user:{
          handle:'@john.doe_artist',
          img:'../../assets/images/boy/5.jpg',
          type:'artist',
          stats : {
            followers:16700,
            following:120,
            bids:90,
            likes:300,
          },
          follows: {
            me: false,
            you: false
          }
        },
        comments:2,
        bids:5,
        bid_date:'2018-01-10 17:00',
        likes:2,
        like:false,
        price:60000,
        name:'Out Of The Blue',
        year:'2015',
        img:'../../assets/items/art8.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#staircase','#africa','#john.doe'],
        posted:'2017-12-06 23:20',
        reposts:5,
        repost:false,
      },
      {
        user:{
          handle:'@asterix',
          img:'../../assets/images/gal/3.jpg',
          type:'artist',
          stats : {
            followers:12800,
            following:6700,
            bids:800,
            likes:300
          },
          follows: {
            me: false,
            you: true
          }
        },
        comments:100,
        bids:100,
        likes:1230,
        like:false,
        price:50000,
        name:'Rainbow Lion',
        year:'2017',
        img:'../../assets/items/art1.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#lion','#colors','#asterix','#nature'],
        posted:'2018-01-06 20:20',
        reposts:500,
        repost:true,
      },
      {
        user:{
          handle:'@ziggybowie',
          img:'../../assets/images/gal/4.jpg',
          type:'artist',
          stats : {
            followers:5600,
            following:500,
            bids:1000,
            likes:400,
          },
          follows: {
            me: false,
            you: true
          }
        },
        comments:2,
        bids:5,
        likes:2,
        like:false,
        price:12000,
        name:'Structured Time',
        year:'2015',
        img:'../../assets/items/art11.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#abstract','#minimalism','#africa','#ziggybowie','#watercolor'],
        posted:'2018-01-05 15:30',
        reposts:0,
        repost:false,
      },
      {
        user:{
          handle:'@1820artgallery',
          img:'../../assets/items/gallery1.jpg',
          type:'gallery',
          stats : {
            followers:100,
            following:200,
            bids:321,
            likes:700,
          },
          follows: {
            me: true,
            you: true
          }
        },
        comments:'50',
        likes:'300',
        like:false,
        event_type:'exihibition',
        event_date:'2018-01-15 15:00',
        img:'../../assets/images/events/art_poster.jpg',
        id:'Xdf$123df',
        type:'event',
        tags:['#art','#exhibition','#africa'],
        posted:'2018-01-01 16:30',
        reposts:50,
        repost:false,
      },
      {
        user:{
          handle:'@artHouse',
          img:'../../assets/items/gallery2.jpg',
          type:'gallery',
          stats : {
            followers:400,
            following:300,
            bids:350,
            likes:700,
          },
          follows: {
            me: false,
            you: true
          }
        },
        comments:'10',
        likes:1999,
        like:false,
        event_type:'exihibition',
        event_date:'2018-01-15 15:00',
        img:'../../assets/images/events/metro_polis.jpg',
        id:'Xdf$123df',
        type:'event',
        tags:['#art','#exhibition','#africa'],
        posted:'2017-01-07 01:45',
        reposts:300,
        repost:false,
      },
      {
        user:{
          handle:'@janeda_artist',
          img:'../../assets/images/gal/5.jpg',
          type:'artist',
          stats : {
            followers:1200,
            following:500,
            bids:100,
            likes:300,
          },
          follows: {
            me: true,
            you: true
          }
        },
        comments:500,
        bids:1200,
        bid_date:'2018-01-10 17:00',
        likes:15500,
        like:false,
        price:60000,
        name:'power',
        year:'2015',
        img:'../../assets/items/art18.jpg',
        id:'Xdf$123df',
        type:'piece',
        tags:['#art','#graffiti','#colorful','#africa','#john.doe'],
        posted:'2017-05-06 23:20',
        reposts:2500,
        repost:false,
      }
      
    ];
  }

  showActionSheet(item){
    let actionSheet = this.actionSheetCtrl.create({
      buttons:[
        {
          icon: item.repost == true ? 'remove-circle':'repeat',
          text: item.repost == true ? 'Undo repost':'Repost',
          role:'selected',
          handler:()=>{
            //code... 
            this.repostItem(item)
          },
        },
        {
          icon:'person-add',
          text: item.user.follows.me == true ? 'Unfollow '+item.user.handle : 'Follow '+item.user.handle,
          role:'selected',
          handler:()=>{
            //code...
            this.followUnfollowUser(item)
          },
        },
        {
          icon:'flag',
          text:'Flag this work',
          role:'selected',
          handler:()=>{
            //code... Open flag page and pass item.user + item id
            this.flagWork(item)

          },
        },       
        {
          icon:'alert',
          text:'Report '+item.user.handle,
          role:'selected',
          handler:()=>{
            //code... 
            this.reportUser(item)

            // http here
          },
        }
      ],
      enableBackdropDismiss : true
    });

    actionSheet.present();
  }

  followUnfollowUser(item) {

    var data = {
      user:this.user.handle,
      target:item.user.handle, 
    }

    // Change data variable accordingly
    data['follow']= item.user.follows.me == true ? data['follow']=false : data['follow']=true ;

    // Http here

    // Update UI on success
    item.user.follows.me = data['follow'];
    
  }

  repostItem(item) {

    var data = {
      user:this.user.handle,
      item:item.id, 
    }

    // Change data variable accordingly
    data['repost']= item.repost == true ? data['repost']=false : data['repost']=true ;

    // Http here

    // Update UI on success
    item.repost = data['repost'];
    item.repost ? item.reposts ++ : item.reposts --;

  }

  flagWork(item) {
    var data = {
      user:this.user.handle,
      item:item.id, 
      flag:true
    }

    // Http here

  }

  reportUser(item) {

  }

   
  
}
