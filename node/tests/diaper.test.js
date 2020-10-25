const Product=require("../Product");
const Diaper = require("../Diaper");

describe("Diaper class", () => {
  describe("initializing", () => {
    it("Name is string and is input when string", () => {
    let diaper1=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, ["diaper", "wipe"]);
    let diaper2=new Diaper("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, ["diaper", "wipe"],"size","style","print");
    let isSame=true;
    for(const value in diaper1){
        if(diaper1.value != diaper2.value){
            isSame=false;
        }
    }
    expect(isSame).toBe(true);
    });
    it("Size is string and is input when string", () => {
        let diaper=new Diaper("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, ["diaper", "wipe"],"size","style","print");
        expect(diaper.size).toBe("size");
    });
    it("Size is string and is input when string", () => {
        let diaper=new Diaper("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, ["diaper", "wipe"],null,"style","print");
        expect(typeof(diaper.size)).toBe("string");
    });
    it("Style is string and is input when string", () => {
        let diaper=new Diaper("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, ["diaper", "wipe"],"size","style","print");
        expect(diaper.style).toBe("style");
    });
    it("Style is string and is input when string", () => {
        let diaper=new Diaper("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, ["diaper", "wipe"],"size",null,"print");
        expect(typeof(diaper.style)).toBe("string");
    });
    it("Print is string and is input when string", () => {
        let diaper=new Diaper("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, ["diaper", "wipe"],"size","style","print");
        expect(diaper.print).toBe("print");
    });
    it("Print is string and is input when string", () => {
        let diaper=new Diaper("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, ["diaper", "wipe"],"size","style",null);
        expect(typeof(diaper.print)).toBe("string");
    });
});


});