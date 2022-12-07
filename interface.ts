

// interface and type alias are almost similar but thheir is some diff also

// interface coin{
//     head:String,
// }

// interface coin{       //  in case of interface we can declare the propety again 
//     tail:string
// }


// type coins={
//      head:string,  // in case of TYPE we can not redeclare the same type again to add the property 
// }
 

// type coins{
//     tail:string
// }


//  An interface can be reopened and we can add new values into it but in case of type we cannot add those values.



// 2. difference 

// Here's two examples of 
// using types and interfaces
// to describe an object 

// interface AnObject1 {
//     value: string
// }

// type AnObject2 = {
//     value: string
// }

// // Using type we can create custom names
// // for existing primitives:

// type SanitizedString = string
// type EvenNumber = number

// // This isn't true with interfaces
// interface X extends string {

// }


// interface is only used to declare or extend the value of ann object this is not true in case of primitive type.

