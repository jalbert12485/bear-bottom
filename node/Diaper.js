const Product=require("./Product");

class Diaper extends Product{

    constructor(name, price, shortdesc, longdesc,imagesrc,imagealt,inventory,size,style,print){
        super(name, price, shortdesc, longdesc,imagesrc,imagealt,inventory,"diaper");
        this.size=String(size);
        this.style=String(style);
        this.print=String(print);


    }

}

module.exports=Diaper;