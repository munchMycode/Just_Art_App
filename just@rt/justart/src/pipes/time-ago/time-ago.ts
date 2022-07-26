import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'timeago',
})

export class TimeAgoPipe implements PipeTransform {
  /**
   * Takes a date object and transforms it into x days/week/hour ago
   * 
   *  ! Currently only accepts 'yyyy-mm-dd HH:mm' format
   */
  transform(date: string, style:any=null, wording:string) {

    // Current Date
    var dateNow = new Date();

    // Default style is long
    style == null ? style='long' : style;
    
    return this.timeAgo(date, dateNow, wording, style)

  }

  timeAgo(inputDate, dateNow, wording, style){

    // Reference list for retrieving month names later
    var Months = [
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',
    ]

    // GET time and date from dateNow
    var currentHour = dateNow.getHours(), 
    currentMins = dateNow.getMinutes(), 
    currentYear = dateNow.getFullYear(),
    currentMonth = dateNow.getMonth(), 
    currentDay = dateNow.getDate(),
    currentSeconds = dateNow.getSeconds();

    // Seperate input date from time [0] = date [1] = time
    var d = inputDate.split(' '), givenDate = d[0] , givenTime = d[1] ;

    // Separate hours from mins, year from day and months
    var splitTime = givenTime.split(':'), splitDate = givenDate.split('-') ;

    // Hours & Mins & seconds
    var givenHour = splitTime[0], givenMins = splitTime[1], givenSeconds = splitTime[2];

    // Year, Month, & Day
    var givenYear = splitDate[0], givenMonth = splitDate[1], givenDay = splitDate[2] ;

    /**
     * Now the calculating can begin
     */

        //  Final output variable
        var timeago:any
      
        // Years
        var year:number = currentYear - givenYear ;

        // Months
        var month:number = (currentMonth+1) - givenMonth;

        // Correct month in case of negative result
        if (month < 0){
            month = month + 12 ;
        }

        // Days
        var day:number = currentDay - givenDay;

        // Hours
        var hour:number = currentHour - givenHour;

        // Correct hour in case of negative result
        if (hour < 0) {
            hour = hour + 24;
        }

        // Minutes
        var mins:number = currentMins - givenMins;

        // Correct mins in case of negative result
        if (mins < 0) {
            mins = mins + 60;
        }

        // Seconds
        var secs: number = currentSeconds - givenSeconds;

        if (secs < 0) {
            secs = secs + 60;
        }

        /**
         * Final Outputs
         */

        //  Year
        if (year > 0) {       

            // Year
            if (year > 1) {

                if (style=='long') {
                    timeago = year+' years ago'+Months[givenMonth[0] == '0' ? givenMonth[1]-1 : givenMonth-1 ]
                }
                else {
                    timeago =year+' y'+Months[givenMonth[0] == '0' ? givenMonth[1]-1 : givenMonth-1 ] ;
                } 
            }
            else {

                if ( style=='long') {

                    timeago = 'last year, '+Months[givenMonth[0] == '0' ? givenMonth[1]-1 : givenMonth-1 ]+' '+givenDay;

                } else {

                    timeago = '1y, '+Months[givenMonth[0] == '0' ? givenMonth[1]-1 : givenMonth-1 ]+' '+givenDay;
                }

            }

        } 
        // Months
        else if (year == 0 && month > 0 ) {       

          // Month
          if (style =='long') {

              month > 1 ? timeago = month+' months ago' : timeago = 'last month';

          } 
          else {

              month > 1 ? timeago = month+'1mon' : timeago = 'last mon' ;

          }

        } 
        // Weeks & Days
        else if ( month == 0 && day > 0 ) {   

          // Account for weeks
          if ( day == 7) {

              style =='long' ? timeago ='a week ago': timeago='1w';

          }
          else if ( day == 14) {

              style =='long' ? timeago ='2 weeks ago' :timeago='2w';

          }
          else if ( day == 21 ) {

              style =='long' ? timeago ='3 weeks ago' : timeago ='3w';

          }
          else {

              // Days
              if ( day > 1 ) {
                
                  style=='long' ? timeago = day+' days ago': timeago= day+'d';

              } else {

                  style=='long' ? timeago = 'yesterday '+givenTime : timeago= 'yd at '+givenTime;

              }

          }

        }
        // Hours
        else if ( (day == 0 && hour > 0 )  ) {   
          
          // Hours
          if ( hour > 1 ) {

              style=='long' ? timeago = hour+' hours ago': timeago = hour+'hrs'

          } else {

              style=='long' ? timeago = 'about an hour ago': timeago ='1hr'

          }

        }
        // Minutes
        else if ( (hour==0 && mins > 0) ) {   

          // Minutes
          if ( mins > 1 ) {

              style=='long' ? timeago = mins+' mins ago' : timeago = mins+'m' ;

          } else {

              style=='long' ? timeago = 'about a minute ago' : timeago ='min ago'

          }

        }
        // Seconds
        else {

          // Seconds
          if (secs > 1) {

              style =='long' ? timeago = secs+'secs ago' : timeago='s';
          }
          else {

            style =='long' ? timeago = 'seconds ago' : timeago='now';

          }
        }

      return wording == null ? timeago : wording+' '+timeago;

      /**
       * Pipe is stable and can be modulated to accomodate 
       * - style (long/short) 
       * - date referencing styles (iso,utc etc)
       * - Languages (Eng, fr, ger etc)
       * - set interval to make it live
       */
      
  }


}
