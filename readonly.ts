

// by making thee variables as readonly we did not change them.

// ? -> means that we have an option to put the value or not.


type User={
   readonly _id:number,
   name: string,
   age: number,
   isAdmin: boolean
   isCredit ?: boolean
}

let myUser:User = {
    _id: 1,
    name: "John",
    age: 24,
    isAdmin: true
}

myUser.name = "jeetus@gmail.com"
//  myUser._id=24;

