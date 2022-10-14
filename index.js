var a=prompt("Enter the number=","");

    function digitSum(k){
        
            if(k<=9){

                return k;
            }

            else {

                return (k%10 +Math.floor(digitSum(k/10))); 

            }
        
    }

    console.log(digitSum(a));