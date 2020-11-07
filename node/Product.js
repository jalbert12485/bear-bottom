class Product{

    constructor(name, price, shortdesc, longdesc,imagesrc,imagealt,inventory,category){
        this.name=String(name);
        if(typeof(price)!= "number"){
            this.price=0;
        }else{
            this.price=Number(price.toFixed(2));
        }
        this.shortdesc=String(shortdesc);
        this.longdesc=String(longdesc);
        this.imageAlt=String(imagealt);
        this.imageSrc=String(imagesrc);
        this.category=String(category);
        if(typeof(inventory)!= "number"){
            this.inventory=0;
        }else{
        this.inventory=Number(inventory);
        }

    }

}

module.exports=Product;