import { Task } from "./task";
import { Post } from "./post";

export class User {
        
    constructor(public _id? : String , 
                public name? : String,
                public email? : String,
                public street? : String,
                public city? : String,
                public zipcode? : Number,
                public tasks? : Array<Task>,
                public posts? : Array<Post>
                )
                {}
    }
