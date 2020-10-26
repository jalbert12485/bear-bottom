$("#form-submit").on("click", function(event){
    event.preventDefault();
    sendNewWipe();
});



function sendNewWipe(){
  let product={
    name: $("#product-name").val(),
    short: $("#short-descr").val(),
    long: $("#long-descr").val(),
    imgSrc: $("#image-src").val(),
    imgAlt: $("#image-alt").val(),
    inventory: $("#inventory").val(),
    dimensions: $("#dimensions").val()

  }

  $.ajax({
    url: "/admin/productadd",
    data: product,
    method: "Post",
  }).then(
    console.log("sent")
  );

}
