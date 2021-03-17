//2

// 1.write numbers from 1 to 135
// 2.select the odd numbers
// 3.print odd numbers


for (var i=1; i<136; i++ ){
    if ( i % 2 !=0){
        console.log(i)
    }
}

// 1%2 => 1
// 2%2 => 1
// 3%2 => 1,3
// 4%2 => 1,3
// 5%2 => 1,3,5
// ...............
// 135%2 => 1,3,5,.....135