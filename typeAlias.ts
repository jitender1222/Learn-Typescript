

// in type alias we make a kind of datatype which we can use it anywhere inside our code .

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays



type User = {    // creating a type of user which is an object
    name:String;
    email:String;
    isActive:boolean
}

// making a function of create user which is of type User which we define above

function createUser(user:User):User {  

    // now we can specify that the return type of our function is User type by writing :User 

    return {name:"jitendersingh",email:"jeetusingh@gmail.com",isActive:true};
}

createUser({name:"jitendersingh",email:"jeetusingh@gmail.com",isActive:true});