

// it is a type of array which TS gives to us which has some restriction to it.


let rgbColor:[number,number,number];  // define our tuple


rgbColor=[255,255,255] //intialize our tuple


let user:[String,number]; //define our tuple

user=["jitender singh",100] //initialize 

//user=[100,"jitender singh"] 

//here it is given us an error because we do not change the order inside the tuple


export {}


//  there is some exception also in case of tuples we cannot changee the order but

let play:[string,number];

play=["cricket",1]

play.push("football",1);

// so as we can see if we use array methods we can easily put other value and it did not gives us an error.
