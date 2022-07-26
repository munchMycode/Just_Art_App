import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-item-comments',
  templateUrl: 'item-comments.html',
})
export class ItemCommentsPage {

  // Hold array of comments
  comments:Array<any>=[]

  // Message object
  commentText:string = null;

  // Message target
  target:string=null;
  targetIndex:number=null;
  targetReply:number=null;

  // Item
  item:any;

  // Stores user info
  user:any;

  // Edit state to change buttons,ui
  edit:boolean=false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) 
  {


      
      // GET object id and type from previous page
      this.item = this.navParams.get('data');

      // GET comments from db
      this.comments=[
        {
          user:{
            handle:'@jane.doe',
            img:'../../assets/images/gal/4.jpg',
            type:'buyer'
          },
          text:'Great piece, love the striking watercolors, they are so full of life and balanced',
          date:'2018-01-03 16:45',
          replies:5,
          comment_id:'xdTE345',
          conversation:[],
          viewText:false,
          viewList:false,
          focus:false
        },
        {
          user:{
            handle:'@john.doe',
            img:'../../assets/images/boy/4.jpg',
            type:'artist'
          },
          text:'Great piece, love the striking watercolors',
          date:'2018-01-03 17:45',
          replies:5,
          comment_id:'xdTE345',
          conversation:[],
          viewText:false,
          viewList:false,
          focus:false
        }
      ]

  }

  ionViewWillLoad() {
    // GET user info from storage?
    this.user = {
      handle:'@someDopeHandle',
      img:'../../assets/images/boy/5.jpg',
      type:'Buyer'
    }
  }

  viewProfile(comment){
    this.navCtrl.push('ArtistProfilePage',{artist:comment.user})
  }

  replyToComment(comment,i,x){
    
    /**
     * selects which message to target for replying/deleting/editing
     */

    if (comment.focus==true) {

      // Remove highlight
      comment.focus =false;

      // Clear comment if filled
      this.commentText = null;

      // Clear target user;
      this.target = null;
      this.targetIndex=null;
      this.targetReply=null;
    } else {

      // Highlight item
      comment.focus=true;

      // Set target user
      this.target = comment.user.handle;
      this.targetIndex=i;
      this.targetReply=x;

    }
  }

  sendReply(comment){
    /**
     * Adds a comment to db
     */
    var newComment
    var date = new Date;
    var d = date.getDate();

    var i = this.targetIndex, x=this.targetReply;

      //  Adding comment on item
      if (this.target == null) {

          newComment = {
            item_id:this.item.id,
            date : d,
            text: comment,
            user: this.user,
            replies:0,
            conversation:null
          }
          // Add to db then add to UI on sucess
          this.comments.push(newComment);

      }
      // Replying to root comment
      else if (this.target == this.comments[i].user.handle) {

          // Package comment to be sent
          newComment = {
            comment_id:this.comments[i].comment_id,
            date : d,
            text: comment,
            target: this.target,
            user : this.user,
          }

          // send to db

          // Increment replies
          this.comments[i].replies ++

          // Clear highlight
          this.comments[i].focus = false;

      }
      // Replying to a comment within a comment
      else if (this.comments[i].viewList==true) {

          newComment = {
            comment_id:this.comments[i].comment_id,
            date : d,
            text: comment,
            target: this.target,
            user : this.user,
            conversation:null,
          }

          // Add to db then ui
          this.comments[i].conversation.push(newComment)
          
          // Increment replies
          this.comments[i].replies ++

          // Clear Highlight
          this.comments[i].conversation[x].focus=false;
          
    }
        
        // console.log(newComment)
        
        // Clear text var
        this.commentText =null;
        
        // Clear target vars
        this.target =null;
        this.targetIndex=null;
        this.targetReply=null;
        
  }

  getReplies(comment){
    
    // GET replies
    if (comment.viewList==false) {

      // Fetch replies to comment from db
      var replies = [
        {
          user:{
            handle:'@john.doe',
            img:'../../assets/images/boy/3.jpg',
            type:'artist'
          },
          text:'Great piece, unbelievable use of depth and color',
          date:'2018-01-07 04:45',
          target:'@ArtGod',
          comment_id:'xdTE345',
          focus:false
        },
        {
          user:{
            handle:'@artisLyf',
            img:'../../assets/images/gal/1.jpg',
            type:'buyer'
          },
          text:'Great piece, unbelievable use of depth and color',
          date:'2018-01-06 16:45',
          comment_id:'xdTE345',
          focus:false
        },
        {
          user:{
            handle:'@strokeMonster',
            img:'../../assets/images/gal/2.jpg',
            type:'artist'
          },
          text:'Master class....WOW!!',
          date:'2018-01-05 16:45',
          target:'@ArtGod',
          comment_id:'xdTE345',
          focus:false
        },
        {
          user:{
            handle:'@artisLyf',
            img:'../../assets/images/gal/1.jpg',
            type:'buyer'
          },
          text:'Woah who knew color could be so vivid.. Amazing!',
          date:'2018-01-04 16:45',
          comment_id:'xdTE345',
          focus:false
        }
      ]
      comment.conversation = replies ;

      // Open list
      comment.viewList = true
    }
    else {
      // Close list
      comment.viewList = false
    }

    // console.log(comment.conversation)
    
  }

  editComment(comment,i,x){
    // Editing a comment to item
    if (comment.focus) {
      // Clear text
      this.commentText=null;

      // Remove highlight
      comment.focus = false;

      // Change state
      this.edit =false;

      // Clear target comment index
      this.targetIndex = null;
      this.targetReply = null;
    }
    
    else {

      // Change text in textarea
      this.commentText = comment.text;
  
      // highlight comment
      comment.focus=true;

      // Change state
      this.edit = true;

      // Target comment index
      this.targetIndex = i;
      this.targetReply = x;

      // Update at db

    }
  }

  sendEdit(text) {
    var i= this.targetIndex,x = this.targetReply;
    
    // Package edit to be sent to db

    // send to db
    
    // Check if user is not editing a reply before updating ui
    if (this.targetReply!==null) {

      // Text update
      this.comments[i].conversation[x].text=text +' (Edited)';

      // Remove highlight
      this.comments[i].conversation[x].focus=false;
    }
    else {

      // Text update
      this.comments[i].text = text +' (Edited)';

      // Remove highlight
      this.comments[i].focus=false;
    }

    // Change state
    this.edit=false;

    // Clear textarea
    this.commentText=null;

    // Clear Indexes
    this.targetIndex=null;
    this.targetReply=null;


  }

  deleteComment(comment,i,x){

    var httpData

      // Package deletion data
      httpData = {
        comment:comment.comment_id,
        method:'delete'
      }

      console.log(httpData)
      
      // Delete at db here

      // Run this block/after within http success   
      if (x==null) {
        // Remove from view 
        this.comments.splice(i,1);

      }
      // Delete nested reply
      else {

        // Remove from view on
        this.comments[i].conversation.splice(x,1);

      }


  }

  refreshComments(){
    // Http

    // Update ui
  }

}
