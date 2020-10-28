const Product=require("./Product");

class Wipe extends Product{

    constructor(name, price, shortdesc, longdesc,imagesrc,imagealt,inventory,dimensions){
        super(name, price, shortdesc, longdesc,imagesrc,imagealt,inventory,"Wipe");
        this.dimensions=String(dimensions);
    }

}

module.exports=Wipe;