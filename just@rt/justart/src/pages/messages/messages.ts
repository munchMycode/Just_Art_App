import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';



@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  // Holds array of messages
  messages:Array<any>=[];

  //Holds user array
  user:any

  // Tracks currently open message
  currentlyOpen:number=-1;

  // Holds text message
  messageText:string='';

  // Message target/reciepient
  target:string='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ) 
  {
    // GET user info from storage/page
    this.user = {
      handle:'@someDopehandle',
      img:'../../assets/',
      type:'artist'
    }

    // GET messages
    this.getMessages(this.user.handle);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }


  viewConversation(message,i){
  
    if (this.currentlyOpen == i) {
      // In case user taps the same message
      this.messages[i].drop=false;
      this.currentlyOpen=-1

    } 
    else {
        // Otherwise change the currently open message
      this.currentlyOpen =i
    }

    // GET messages in coversation from db
    // console.log(message.id)

    var messages = [
      {
        user:{
          handle:'@myhandle',
          img:'../../assets/images/boy/4.jpg',
          type:'artist'
        },
        id:'kjagdoIuRT2#',
        date:'2018-01-07 16:30',
        text:'The message will go over here without any doubt this should be long or short',
        target:'@someartist',
      },
      {
        user:{
          handle:'@myhandle',
          img:'../../assets/images/boy/4.jpg',
          type:'artist'
        },
        id:'kjagdoIuRT2#',
        date:'2018-01-06 16:30',
        text:'The message will go over here without any doubt this should be long or short',
        target:'@someartist',
      }
    ]
    message.conversation=messages;
  }

  getMessages(user){

    console.log(user)

    this.messages =[
      {
        user:{
          handle:'@someartist',
          img:'../../assets/images/boy/3.jpg',
          type:'artist'
        },
        id:'kjagdoiuRT2#',
        date:'2018-01-07 17:30',
        text:'The message will go over here without any doubt this should be long or short',
        target:'@someDopehandle',
        view:false,
        drop:false,
        messages:2,
        conversation:[]
      },
      {
        user:{
          handle:'@deepPockets',
          img:'../../assets/images/gal/15.jpg',
          type:'Buyer'
        },
        id:'kjagdoiuRT2#',
        date:'2018-01-06 18:35',
        text:'The message will go over here without any doubt this should be long or short , but either way it will be very comforting for the user to know that they can get their messages here at anytime',
        target:'@someDopehandle',
        view:false,
        drop:false,
        messages:2,
        conversation:[]
      },
      {
        user:{
          handle:'@deepBlueColor',
          img:'../../assets/images/gal/17.jpg',
          type:'Buyer'
        },
        id:'kjagdoiuRT2#',
        date:'2018-01-05 17:35',
        text:'The message will go over here without any doubt this should be long or short',
        target:'@someDopehandle',
        view:false,
        drop:false,
        messages:2,
        conversation:[]
      }
    ]
  }

  replyToMessage(message) {

    /**
     * function simply selects which user to message
     */

    //  Ensure that user clicks results in change of target
    if(message.user.handle == this.target) {
      this.target = '';
    }
    else {
      this.target = message.user.handle
    }

  }

  deleteMessage(message,i) {

    var user

    // Get the correct user
    message.user.handle == this.user.handle ? user = message.target : user = message.user.handle ;

    // Alert user prior to deletion
      let alert = this.alertCtrl.create({
        title:'Prompt',
        message:'Are you sure you want to delete your conversation with <b>'+user+'</b> ?',
        subTitle:'Delete',
        buttons:[
          {
            text:'OK',
            handler:()=>{

              //code...Package delete data? delte only at storage?

              // Update UI
              this.messages.splice(i,1)
            }
          },
          {
            text:'Cancel',
            handler:()=>{
            //code... 
            }
          }
        ]
      });

      alert.present();

  }

  sendMessage(message){
    var d = new Date(), msg;

    // Package msg ?date might not be necessary
    msg = {
      message:message,
      target:this.target,
      date:d
    }

    console.log(msg)
    // Http here

    // Update ui on sucess or not
    this.target ='';
    this.messageText='';

    // Store message on fail
  }

  syncInbox() {
    // Negotiate dom tear down ? 

    // Requeat to api and update ui
  }

}

