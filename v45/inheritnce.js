class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`user is ${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")
 masalaChai.logMe()
 console.log(chai instanceof User);
 