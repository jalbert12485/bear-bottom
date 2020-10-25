
function createNavbar(){
    let newNav=$("<nav>");
    newNav.addClass("navbar navbar-dark");
    let newLink=$("<a>");
    newLink.addClass("navbar-brand brand-font");
    newLink.attr("href","./index.html");
    newLink.text("Bear Bottom Diapers");
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

    newNav.append(newLink);
    newNav.append(newIcon);
    

    $("body").prepend(newNav);

}


createNavbar();
