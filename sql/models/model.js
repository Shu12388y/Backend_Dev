// model of the databse queries
const dB=require("../util/mysql")

class Model{



    constructor(t){
        this.name=t
        this.rollnumber=t
        this.age=t

    }
Insert(){
    dB.execute("INSERT INTO student VALUE(?,?,?)",[this.name,this.rollnumber,this.age])
}
 

static fetchAll(){
    return dB.execute("SELECT * FROM student")
}


}




module.exports=Model