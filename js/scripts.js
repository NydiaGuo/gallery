$(document).ready(function(){
    
    var body = $("body");
    body.css("background-color","black");

    body.append("<div class='container-fluid'><div class='text-center' id='imagesHolder'></div></div>");

    body.append("<div id='displayImg'><div class='images'></div></div>");

    $(".images").append("<button id='close'>close</button>");

    $("#displayImg").append("<button id='left-narrow'><</button>");
    $("#displayImg").append("<button id='right-narrow'>></button>");


    var images = ["images/1.png", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg"];

    for(var i = 0; i < images.length; i++) {
        $("#imagesHolder").append("<img src=" + images[i] + "></img>");
    }

    $("#displayImg").css({
        "background-color": "rgba( 0, 0, 0, 0.8)",
        "position": "fixed",
        "top":"0",
        "left":"0",
        "height":"100%",
        "width": "100%"
        // "display":"none"
    });

    $("#close").css({
        "background-color": "rgba( 0, 0, 0, 0.8)",
        "color": "#fff",
        "border":"1px solid #fff",
        "border-radius":"3px",
        "padding":"5px",
        "right":"280px",
        "top":"100px",
        "position":"absolute"
    });

    $("#left-narrow").css({
        "background-color": "rgba( 0, 0, 0, 0.8)",
        "color": "#fff",
        "border":"1px solid #fff",
        "border-radius":"3px",
        "padding":"8px",
        "left":"350px",
        "top":"350px",
        "position":"absolute"
    });

    $("#right-narrow").css({
        "background-color": "rgba( 0, 0, 0, 0.8)",
        "color": "#fff",
        "border":"1px solid #fff",
        "border-radius":"3px",
        "padding":"8px",
        "right":"350px",
        "top":"350px",
        "position":"absolute"
    });

    // $("img").click(function(){

    //     $(body).css({
    //         "background-color": "black"
    //     });

    //     $("button").css({
    //         "background-color": "red",
    //         "color": "white"
    //     });

    // });

    $("img").css({
        "width": "300px",
        "height": "150px",
        "margin": "5px"
    });

    $("h2").css({
        "margin": "20px",
        "font-weight": "bolder",
        "color": "white",
        "text-align": "center"
    });

});