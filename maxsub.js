function maxsub(arr){
   var current_max = max_conti_sum = (-1 * 100000);
   var max_sum = 0;
   for(let i=0; i < arr.length; i++){
      current_max = Math.max(arr[i], (current_max + arr[i]));
      max_conti_sum = Math.max(current_max, max_conti_sum);
      if(arr[i] > 0){
          max_sum += arr[i];
      }
   }
   if(max_conti_sum < 0 ){
       max_sum = max_conti_sum;
   }
   return max_conti_sum + ' ' + max_sum;
}
function processData(input) {
   const lines = input.split('\n');
   let index = 0;
   const tests = parseInt(lines[index++]);
   
    for(let i=0; i < tests; i++){
      const element_count = lines[index++];
      const arr = lines[index++].split(' ').map(function(el){ return parseInt(el) });
      
      max = maxsub(arr);
      console.log(max);
   }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
