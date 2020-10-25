class Product{

    constructor(name, shortdesc, longdesc,imagesrc,imagealt,inventory,category){
        this.name=String(name);
        this.shortdesc=String(shortdesc);
        this.longdesc=String(longdesc);
        this.image={
            "alt": String(imagealt),
            "src": String(imagesrc)
        },
        this.category=[];
        if(Array.isArray(category)){
        for(let i=0; i<category.length; i++){
            this.category.push(category[i]);
        }}

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