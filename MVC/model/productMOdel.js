const product=[]


class Product{
    constructor(title){
        this.title=title
    }
// Prototype
    save(){
        product.push(this)
    }


    static fetchAll(){
        return product
    }
}



module.exports=Product