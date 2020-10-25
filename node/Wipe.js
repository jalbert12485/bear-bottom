const Product=require("./Product");

class Wipe extends Product{

    constructor(name, shortdesc, longdesc,imagesrc,imagealt,inventory,category,dimensions){
        super(name, shortdesc, longdesc,imagesrc,imagealt,inventory,category);
        this.dimensions=String(dimensions);
    }

}

module.exports=Wipe;