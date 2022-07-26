import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-item-bids',
  templateUrl: 'item-bids.html',
})
export class ItemBidsPage {

  // Holds array of bids
  bids:Array<any>=[];

  // Holds user info
  user:any
  
  // Holds item from previous page
  item:any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController
  ) 
  {
    // GET user info
    this.user = {
      handle:'@someDopehandle',
      img:'../../assets/images/boy/4.jpg',
      type:'artist'
    }

    // GET item form previous page
    this.item = this.navParams.get('data');

    // GET Bids from db
    this.getBids(this.item.id)
    
  }

  ionViewWillLoad() {

    

  }

  getBids(item) {

    console.log(item)
    
    // Http Bids
      this.bids = [
        {
          user:{
            handle:'@somebuyer',
            img:'../../assets/images/gal/12.jpg',
            type:'buyer'
          },
          date:'2018-01-05 17:00',
          amount:5000,
          id:'jahgdjs9783',
          likes:87,
          bids:20,
          works:0,
          followers:500
        },
        {
          user:{
            handle:'@Michaela',
            img:'../../assets/images/gal/10.jpg',
            type:'buyer'
          },
          date:'2018-01-03 17:20',
          amount:5500,
          id:'jahgdjs9783',
          likes:132,
          bids:15,
          works:0,
          followers:120
        },
        {
          user:{
            handle:'@donatello',
            img:'../../assets/images/boy/1.jpg',
            type:'buyer'
          },
          date:'2018-01-06 17:25',
          amount:6000,
          id:'jahgdjs9783',
          likes:112,
          bids:21,
          works:0,
          followers:30
        },
        {
          user:{
            handle:'@picasso',
            img:'../../assets/images/boy/3.jpg',
            type:'artist'
          },
          date:'2018-01-05 17:30',
          amount:6500,
          id:'jahgdjs9783',
          likes:500,
          bids:20,
          works:13,
          followers:2200
        }
      
      ]
  }

  viewProfile(bid){
    this.navCtrl.push('ArtistProfilePage',{artist:bid.user})
  }

  editBid(bid){
  
      let alert = this.alertCtrl.create({
        title:'Bid',
        subTitle:"Edit your bid for '"+this.item.name+"'",
        inputs:[
          {
            name:'amount',
            placeholder:'Current bid amount '+bid.amount
          }
        ],
        buttons:[
          {
            text:'OK',
            handler:(data)=>{

              if (data.amount) {

                //code...Package data
                var httpData = {
                  bid: bid.id,
                  amount : data.amount,
                  method : 'edit'
                }

                // Http data here

                // Update view on sucess
                bid.amount = data .amount;
                
              }

            }
          },
          {
            text:'Cancel',
            handler:(data)=>{
            //code... 
            }
          }
        ]
      });
    
      alert.present();
  }

  deleteBid(bid,i){
    // !Add warning prior to deletion 

    // Package delete data
    var httpData = {
      user:this.user.handle,
      bid:bid.id,
      method:'delete'
    }

    // Delete at db

    // Update view on success
    this.bids.splice(i,1)
  }

  addBid(){
    this.showInputAlert()
  }

  showInputAlert(){

    var httpData, viewData

    let alert = this.alertCtrl.create({
      title:'Bid',
      subTitle: "Your bid for '"+this.item.name+"'",
      message:'<b> Please note that bid cancellations carry a 20% penalty against the bid amount. </b>',
      inputs:[
        {
          name:'amount',
          placeholder:'Amount',
          type:'number'
        }
      ],
      buttons:[
        {
          text:'OK',
          handler:(data)=>{

            if (data.amount) {

              //code...Package data
              httpData = {
                bidder:this.user.handle,
                item:this.item.id
              }

              // Http here

              // Update view on sucess (bid.id will come from backend)
              viewData = {
                user : this.user,
                amount : data.amount,
                date : this.formatDateNow(),
                id:'5nabaWER',
              }

              this.bids.push(viewData)

            }

          }
        },
        {
          text:'Cancel',
          handler:(data)=>{
          //code... 
          }
        }
      ]
    });
  
    alert.present();
  }

  syncBids(item:string) {
    /**
     * function syncs/refreshesmto get the latest bids
     */
    
  }

  formatDateNow () {
    // Formating date into a format that is readable for timeago pipe
    var format:string
    var d = new Date();

    var yr = d.getFullYear(), mon = d.getMonth()+1, day = d.getDate(), hr = d.getHours(), m = d.getMinutes();

    return format = yr+'-'+mon+'-'+day+' '+hr+':'+m ;

  }

}
