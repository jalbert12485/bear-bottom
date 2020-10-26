class Product{

    constructor(name, shortdesc, longdesc,imagesrc,imagealt,inventory,category){
        this.name=String(name);
        this.shortdesc=String(shortdesc);
        this.longdesc=String(longdesc);
        this.imageAlt=String(imagealt);
        this.imageSrc=String(imagesrc);
        this.category=String(category);
        this.inventory=Number(inventory),
        this.addtocart=function(){

        },
        this.processOrder=function(){
            this.inventory --;
        },
        this.restock=function(num){
            this.inventory += num;
        },
        this.waste=function(num){
            this.inventory -= num;
        }

    }

}

module.exports=Product;