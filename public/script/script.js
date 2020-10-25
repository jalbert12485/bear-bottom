function displayFullName(){
    if(window.screen.width < 500){
        return false;
    }else{
        return true;
    }  
}

let currentNameDisplay=displayFullName();

// When the window is resized, this checks if we've changed from small to large or vice-versa.  If we did, it renders the chart again.  In the chart, the labels are only rendered when the screen is large as according to the above function.

$(window).resize(function(){
    
    if(displayFullName() != currentNameDisplay){
        currentNameDisplay=displayFullName();
        createNavbar();
    }
});



function createNavbar(){
    $("#navbar").empty();
    let newToggle=$("<button>");
    newToggle.attr("type","button");
    newToggle.addClass("navbar-toggler mr-2");
    newToggle.attr("data-toggle","modal");
    newToggle.attr("data-target","#options-modal");
    newToggle.attr("aria-controls","navbarToggleExternalContent");
    newToggle.attr("aria-expanded","false");
    newToggle.attr("aria-label","Toggle navigation");
    let newSpan=$("<span>");
    newSpan.addClass("navbar-toggler-icon");

    newToggle.append(newSpan);
    let newLink=$("<a>");
    newLink.addClass("navbar-brand brand-font");
    newLink.attr("href","./index.html");
    if(currentNameDisplay){
        newLink.text("Bear Bottom Diapers");
    }else{
        newLink.text("Bear Bottom");
    }
    let newImg=$("<img>");
    newImg.attr("src","./diaper-bear.png");
    newImg.addClass("d-inline-block-top mr-4");
    newImg.attr("style","width: 40px; height: 40px");
    newImg.attr("alt","Diaper Bear");

    newLink.prepend(newImg);
    
    let newIcon=$("<a>");
    newIcon.addClass("fa fa-shopping-cart ml-auto");
    newIcon.attr("style","font-size: 36px; color: white");
    newIcon.attr("href","./cart.html");

    if(currentNameDisplay){
    $("#navbar").append(newToggle);    
    $("#navbar").append(newLink);
    $("#navbar").append(newIcon);
    }else{
        $("#navbar").append(newLink);
        $("#navbar").append(newToggle);
        $("#navbar").append(newIcon);
    }


}




createNavbar();


function fillCategoryModal(){


let diapers={
    name: "Diapers",
    subcategories: ["All in ones", "Covers", "Pre-folds", "New Born"]
}
let wipes={
    name: "Wipes",
    subcategories: ["Large","Small"]
}
let categories=[diapers, wipes];

for(let i=0; i < categories.length; i++){
    let newCat=$("<h5>");
    newCat.text(categories[i].name);
    $("#modal-body").append(newCat);


    for(let j=0; j< categories[i].subcategories.length; j++){
        let newLi=$("<p>");
        newLi.text(categories[i].subcategories[j]);
        $("#modal-body").append(newLi);
    }
  
}



}

fillCategoryModal();
