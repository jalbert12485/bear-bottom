
$("#create-new-product").on("click",createProductOptions);
$("#manage-inventory").on("click",function(e){
  getInfoForInventory("id")});

function createProductOptions(){
  $("#form-container").empty();
  let newH=$("<h3>");
  newH.text("What would you like to do?");
  newH.attr("style", "text-align: center;");
  newH.addClass("m-4");
  $("#form-container").append(newH);

  let newDiv=$("<div>");
  newDiv.addClass("row text-center");

  let newDiv1=$("<div>");
  newDiv1.addClass("col-md-6");
  newDiv1.attr("id","create-new-diaper");
  newDiv1.on("click",function(){
    createInputForm("diaper");
  });
  let newButton1=$("<button>");
  newButton1.addClass("btn btn-primary col-m-6");
  newButton1.text("Create New Diaper");
  newButton1.attr("type","button");
  newDiv1.append(newButton1);
  newDiv.append(newDiv1);

  let newDiv2=$("<div>");
  newDiv2.addClass("col-md-6");
  newDiv2.attr("id","create-new-wipe");
  newDiv2.on("click",function(){
    createInputForm("wipe");
  });
  let newButton2=$("<button>");
  newButton2.addClass("btn btn-primary col-m-6");
  newButton2.text("Create New Wipe");
  newButton2.attr("type","button");
  newDiv2.append(newButton2);
  newDiv.append(newDiv2);

  $("#form-container").append(newDiv);
}

let productList;

function getInfoForInventory(input){
$.get("/admin/products",function(data){
  productList=data;
})
 .done(function(){createInventoryDisplay(input)});
}

function createInventoryDisplay(input){
  $("#form-container").empty();




    let newH=$("<h3>");
    newH.text("Product List");
    newH.attr("style","text-align: center;");
    $("#form-container").append(newH);



  let newTable=$("<table>");

    let newRow=$("<tr>");
    let newCol=$("<th>");
      newCol.text("Name");
      newRow.append(newCol);
      newCol=$("<th>");
    let  newForm=$("<form>");
    let  newDiv=$("<div>");
    newDiv.addClass("form-group");
    let newSelect=$("<select>");
    newSelect.addClass("form-control");
    newSelect.attr("id","product-view-field");
    for(const value in productList[0]){
      let newOption=$("<option>");
      newOption.attr("id","product-view-option");
      newOption.text(value);
      newOption.val(value);
      if(value==input){
        newOption.attr("selected",true);
      }
      newSelect.append(newOption);
    }
    newDiv.append(newSelect);
    newForm.append(newDiv);
    newCol.append(newForm);
      newRow.append(newCol);
    newTable.append(newRow);
    

  for(let i=0; i< productList.length; i++){
      newRow=$("<tr>");
      newCol=$("<td>");
      newCol.text(productList[i].name);
      newRow.append(newCol);
      newCol=$("<td>");
      newCol.text(productList[i][`${input}`]);
      newRow.append(newCol);
      newTable.append(newRow);
  }

  
  let newButtonRow=$("<div>");
  newButtonRow.addClass("row");
  let newButtonCol=$("<div>");
  newButtonCol.addClass("col-md-6");
  let newButton2=$("<button>");
  newButton2.attr("type","button");
  newButton2.text("Restart");
  newButton2.addClass("btn btn-primary");
  newButton2.on("click",function(){
    location.reload();
  });

  newButtonCol.append(newButton2);
  newButtonRow.append(newButtonCol);

  
  $("#form-container").append(newTable);
  $("#form-container").append(newButtonCol);
  $("#product-view-field").on("change",function(e){
    createInventoryDisplay(this.value);
  });
  


}






  // <div class="row">
  // <button type="button" class="btn btn-primary col-m-6" id="create-new-product">Create New Product</button>
  // <button type="button" class="btn btn-primary col-m-6" id="manage-inventory">Manage Inventory</button>
  //   </div>




let adminProductInput=[["product-name","Product Name"],["short-descr","Short Description"],["long-descr","Long Description"],["image-src","Image Source"],["image-alt","Image Alt"],["inventory","Inventory"]];

let adminDiaperInput=[["size","Size"],["style","Style"],["print","Print"]];

let adminWipeInput=[["dimensions","Dimensions"]];

function createInputForm(productType){
  $("#form-container").empty();
  for(let i=0; i< adminProductInput.length; i++){
    let newDiv=$("<div>");
    newDiv.addClass("form-group");
    let newLabel=$("<label>");
    newLabel.attr("for",adminProductInput[i][0]);
    newLabel.text(adminProductInput[i][1]);
    
    newDiv.append(newLabel);

    let newInput=$("<input>");
    newInput.attr("type","text");
    newInput.addClass("form-control");
    newInput.attr("id",adminProductInput[i][0]);
    newInput.attr("placeholder",`Enter ${adminProductInput[i][1]}`);

    newDiv.append(newInput);
    $("#form-container").append(newDiv);
  }

  if(productType=="wipe"){
    var array=adminWipeInput;
  }else if(productType=="diaper"){
    var array=adminDiaperInput;
  }

  for(let i=0; i< array.length; i++){
    let newDiv=$("<div>");
    newDiv.addClass("form-group");
    let newLabel=$("<label>");
    newLabel.attr("for",array[i][0]);
    newLabel.text(array[i][1]);
    
    newDiv.append(newLabel);

    let newInput=$("<input>");
    newInput.attr("type","text");
    newInput.addClass("form-control");
    newInput.attr("id",array[i][0]);
    newInput.attr("placeholder",`Enter ${array[i][1]}`);

    newDiv.append(newInput);
    $("#form-container").append(newDiv);

  }
  let newRow=$("<div>");
  newRow.addClass("row");

  let newCol=$("<div>");
  newCol.addClass("col-md-6")

  let newButton1=$("<button>");
  newButton1.attr("type","submit");
  newButton1.attr("id","form-submit");
  newButton1.addClass("btn btn-primary");
  newButton1.text("Submit");
  if(productType=="wipe"){
  newButton1.on("click", function(event){
    event.preventDefault();
    sendNewWipe();
    location.reload();
  })
  };
  if(productType=="diaper"){
    newButton1.on("click", function(event){
      event.preventDefault();
      sendNewDiaper();
      location.reload();
    })
    };
    newCol.append(newButton1);
    newRow.append(newCol);
  let newCol2=$("<div>");
  newCol2.addClass("col-md-6");
  let newButton2=$("<button>");
  newButton2.attr("type","button");
  newButton2.text("Restart");
  newButton2.addClass("btn btn-primary");
  newButton2.on("click",function(){
    location.reload();
  });
  newCol2.append(newButton2);
  newRow.append(newCol2);


    $("#form-container").append(newRow);
 

}


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
    url: "/admin/productadd/wipe",
    data: product,
    method: "Post",
  }).then(
    console.log("sent")
  );

}

function sendNewDiaper(){
  let product={
    name: $("#product-name").val(),
    short: $("#short-descr").val(),
    long: $("#long-descr").val(),
    imgSrc: $("#image-src").val(),
    imgAlt: $("#image-alt").val(),
    inventory: $("#inventory").val(),
    style: $("#style").val(),
    size: $("#size").val(),
    print: $("#print").val()


  }

  $.ajax({
    url: "/admin/productadd/diaper",
    data: product,
    method: "Post",
  }).then(
    console.log("sent")
  );

}
