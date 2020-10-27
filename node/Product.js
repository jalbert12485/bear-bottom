class Product{

    constructor(name, shortdesc, longdesc,imagesrc,imagealt,inventory,category){
        this.name=String(name);
        this.shortdesc=String(shortdesc);
        this.longdesc=String(longdesc);
        this.imageAlt=String(imagealt);
        this.imageSrc=String(imagesrc);
        this.category=String(category);
        this.inventory=Number(inventory);
       

    }

}

module.exports=Product;