
const flag = true


if (!flag) {
    console.log(flag)
    console.log("condition is satisfied");
}
else {
    console.log(flag)
    console.log("condition is not satisfied");
}

let i = 0;
while (i>10) {
    console.log(i)
    i++
}

do{
    i++
} while (i>10);
    console.log(i)

    console.log("***********************")   
    
    let n=0
    for (let j = 1; j <= 100; j++) 
        
        {

            if (j%2 == 0 && j%5 == 0) 

                {
                    n++
             console.log(j)
             if (n == 3) {
                break;
             }
            }
        }
