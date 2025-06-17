class Librarian extends User{
    constructor(userId, name, email, password){
        super(userId, name, email, password);   
    }
    
    toString(){
        return `Librarian ID: ${this.userId} | Name: ${this.name} | Email: ${this.email}`;
    }
}