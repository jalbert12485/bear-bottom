const Product=require("./Product");

class Diaper extends Product{

    constructor(name, shortdesc, longdesc,imagesrc,imagealt,inventory,category,size,style,print){
        super(name, shortdesc, longdesc,imagesrc,imagealt,inventory,category);
        this.size=String(size);
        this.style=String(style);
        this.print=String(print);


    }

}

module.exports=Diaper;