<?php

/*
----------------------------
GET ALL BIDS
----------------------------
*/

 $sql = "SELECT *
        FROM `bids` 
        WHERE
        `post_id` = '$currentPost'";

        $result = mysqli_query($conn,$sql);
        
                // Fetching all bids
                while ($bid = mysqli_fetch_assoc($result)) { 

                      $query = "SELECT *
                             FROM `user_info` 
                             WHERE
                             `user_id` = '$bid['user_id']' ";

                             $val = mysqli_query($conn,$sql);

                                    // Fetching all the information of the suers who bid
                                    while ($user = mysqli_fetch_assoc($val)) { 

                                        $_bid = array(  'user'=> $user , 
                                                        'id' =>$bid['bid_id'],
                                                        'amount'=>$bid['amount'],
                                                        'date'=>$bid['bid_date'],
                                                        'status'=>$bid['amount'],
                                                        ) ;

                                        $response[] = $_bid ;

                                    }
                }
/*
----------------------------
GOT ALL BIDS
----------------------------
*/



?>