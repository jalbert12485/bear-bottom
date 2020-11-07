const Product=require("../Product");
const Wipe = require("../Wipe");

describe("Wipe class", () => {
    describe("initializing", () => {
      it("Name is string and is input when string", () => {
      let wipe1=new Product("name", 11.34, "shortdesc", "longdesc", "imagesrc", "imagealt", 10, "wipe");
      let wipe2=new Wipe("name", 11.34, "shortdesc", "longdesc", "imagesrc", "imagealt", 10,"dimension");
      let isSame=true;
      for(const value in wipe1){
          if(wipe1.value != wipe2.value){
              isSame=false;
          }
      }
      expect(isSame).toBe(true);
      });
      it("Dimensions is string and is input when string", () => {
          let wipe=new Wipe("name", 11.34, "shortdesc", "longdesc", "imagesrc", "imagealt", 10,"dimension");
          expect(wipe.dimensions).toBe("dimension");
      });
      it("Dimensions is string and is input when string", () => {
          let wipe=new Wipe("name", 11.34, "shortdesc", "longdesc", "imagesrc", "imagealt", 10,null);
          expect(typeof(wipe.dimensions)).toBe("string");
      });
     
  });
  
  
  });