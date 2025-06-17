class User{
    //Parent Class: User is a parent class for Member and Librarian. 
    //Many-to-One: Many Users are associated with the Library.  
    constructor(userId, name, email, password){
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }

     updateDetails(userId, name, email, password){
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
     } 
     
     toString(){
        return `User ID: ${this.userId}, Name: ${this.name}, Email: ${this.email}`;
     } 
}