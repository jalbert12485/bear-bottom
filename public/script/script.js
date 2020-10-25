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

    $("#navbar").append(newLink);
    $("#navbar").append(newIcon);


}


createNavbar();

