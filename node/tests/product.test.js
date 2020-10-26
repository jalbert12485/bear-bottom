const Product = require("../Product");

describe("Product class", () => {
  describe("initializing", () => {
    it("Name is string and is input when string", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, "diaper");

        expect(diaper.name).toBe("name");
    });
    it("Name is string and is input when string", () => {
        let diaper=new Product(null, "shortdesc", "longdesc", "imagesrc", "imagealt", 10, "diaper");

        expect(typeof(diaper.name)).toBe("string");
    });
    it("Short Description is string and is input when string", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10,"diaper");

        expect(diaper.shortdesc).toBe("shortdesc");
    });
    it("Short Description is string and is input when string", () => {
        let diaper=new Product("name", null, "longdesc", "imagesrc", "imagealt", 10, "diaper");

        expect(typeof(diaper.shortdesc)).toBe("string");
    });
    it("Long Description is string and is input when string", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, "diaper");

        expect(diaper.longdesc).toBe("longdesc");
    });
    it("Long Description is string and is input when string", () => {
        let diaper=new Product("name", "shortdesc", null, "imagesrc", "imagealt", 10, "diaper");

        expect(typeof(diaper.longdesc)).toBe("string");
    });
    it("Image source is string and is input when string", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, "diaper");

        expect(diaper.imageSrc).toBe("imagesrc");
    });
    it("Image source is string and is input when string", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", null, "imagealt", 10, "diaper");

        expect(typeof(diaper.imageSrc)).toBe("string");
    });
    it("Image alt is string and is input when string", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, "diaper");

        expect(diaper.imageAlt).toBe("imagealt");
    });
    it("Image alt is string and is input when string", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", null, 10,"diaper");

        expect(typeof(diaper.imageAlt)).toBe("string");
    });
    it("Inventory is number and is input when number", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, "diaper");

        expect(diaper.inventory).toBe(10);
    });
    it("Inventory is number and is input when number", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", null, "diaper");

        expect(typeof(diaper.inventory)).toBe("number");
    });
    it("Category is strings", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, "diaper");

        expect(diaper.category).toStrictEqual("diaper");
    });
    it("Category is array of strings", () => {
        let diaper=new Product("name", "shortdesc", "longdesc", "imagesrc", "imagealt", 10, null);

        expect(typeof(diaper.category)).toBe("string");
    });


  });


});
