const db=require("../util/db")


class model{
    static fetch(){
       return db.execute("SELECT * FROM user")
    }
}

module.exports=model