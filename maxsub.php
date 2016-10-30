<?php

function maxsub($n,$s){
   
    $current_max = $max_conti_sum = (-1 * 1000000);
    $max_sum = 0;
     
    for($i=0; $i < $n; $i++){
        $current_max = max( $s[$i], ($current_max + $s[$i]));
        $max_conti_sum = max($current_max, $max_conti_sum);
        if( $s[$i]  > 0){
            $max_sum += $s[$i];
        }
       
    }
    if($max_conti_sum <0 ){
        $max_sum = $max_conti_sum;
    }
    return [$max_conti_sum ,$max_sum];
}

$handle = fopen("php://stdin", "r");
$t = fgets($handle);

for($i=0; $i<$t; $i++){
    $n = fgets($handle);
    $s = fgets($handle);
   
    $max =  maxsub($n,explode(" ", trim($s)));
    echo implode(" ",$max) . "\n";
}


?>