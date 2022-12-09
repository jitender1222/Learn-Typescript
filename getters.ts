
class course{

    private course_count=1

    readonly city: string="jaipur"

    constructor(
        public email:String,
        public name:String,
    ){}

    get getAppleEmail(): String{
        return `apple${this.email}`;
    }

    get getCourseCount(): number{
        return this.course_count;
    }

    set courseCount(courseNum: number){   // in setters there is no return type 

        if(courseNum<=1){
            throw Error("course count should be more then 1");
        }

        this.course_count=courseNum;
    }
}

const obj=new course ("jit@gmail.com","jitender");



// there is one more access speciefier named as protected by making it protected 
// we can access the method or variable in the inhertited class also . But not outside.

class courses{

    protected _coursecount=1; //making it protected to access inside the extended class

    constructor(public name:String, public email:String){}
}

class Subcourse extends courses{

    changecourseCount(){
        this._coursecount=4; //changing the course count 
    }
}

const obj2=new Subcourse("subcourse@gmail.com","singhjitender");
