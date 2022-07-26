import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'nicestats',
})

export class NiceStatsPipe implements PipeTransform {
  /**
   * Takes a value and fixes it to decimal 25000 > 25k.
   * -accepts one argument for style ? perhaps language in future
   * -default style is short
   */
  transform(value: number, style:string,currency:string) {

    return this.makeNice(value,style,currency) ;

  }

  precisionRound(number,precision) {

      var factor = Math.pow(10, precision);

      return Math.round(number * factor) /factor;

  }

  makeNice(value,style, currency:string) {

    var i = currency, curr:string;

    var currencies = {
        usd:'$',
        eur:'€',
        gbp:'£',
        zar:'R',
        yen:'¥',
        chf:'CHF',
        dkk:'KR'
    };

    curr = currencies[i]; 

    var suffix ;

    // Set default to short if style is not provided
    if (style ! =='short' && style ! =='long' ) {

        style ='short';

    } 
   
        // Only apply to ranges above 1000 
        if (value >=1000) {
    
            // Correct Decimals
            if ( value < 1000000) {
    
                // less than 1000 000
                value = (value/1000) ;
    
                    style == 'short' ? suffix ='k' : suffix = 'k';
            }
            else if ( value >= 1000000 && value <= 1000000000) {
               
                // less than 1b (1 000 000+)
                value = (value/1000000) ;
    
                    style == 'short' ? suffix ='m' : suffix = 'mil';
            }
            else if ( value > 1000000000 && value < 1000000000000 ) {
    
                // less than 1tr (1 000 000 000 +)
                value = (value/1000000000); 
    
                    style == 'short' ? suffix ='b' : suffix = 'bil';
            }
            else if ( value >= 1000000000000 && value < 1000000000000000 ) {
                
                // more than 1tr (1 000 000 000 000 +)
                value = (value/1000000000000); 
    
                    style == 'short' ? suffix ='tr' : suffix = 'tril';
            }
            
                var nice = this.precisionRound(value,1);
                
                return  curr == null ? nice+suffix : curr+nice+suffix ;
    
        } 
        else {
    
            return curr == null ? value : curr+value ;
    
        }

  }

  /**
     * pipe can be modulated to accomodate
     * -different languages
     * -more currencies
     */


}
