$(document).ready(function(){
    
    var body = $("body");
    body.append("<div class='container-fluid'><div class='text-center' id='imagesHolder'></div></div>");
    body.css("background-color","black");

    body.append("<div class='container-fluid text-center' id='displayImg'><button id='close'>close</button></div>");


    var images = ["images/1.png", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg"];

    for(var i = 0; i < images.length; i++) {
        var image = "<img src=" + images[i] + "></img>";

        $("#imagesHolder").append(image);

        $("img").click(function(){
            $("#displayImg").append(this);

            $(this).css({
                "width":"830px",
                "height": "500px",
                "margin-top":"40px"
             });

            $("button").css({
                "display":"inline",
                "color": "#fff",
                "border":"1px solid #fff",
                "border-radius":"3px",
                "background":"rgba(0,0,0,0.1)",
                "padding":"5px",
                "right":"380px",
                "top":"250px",
                "position":"absolute"
            });

            $("#displayImg").click(function(){
                $(this).remove();
            });
        });

    }

    $("#imagesHolder").css({
        "display":"block"
    });

    $("button").css({
        "display":"none"
    });

    $("img").css({
        "width": "120px",
        "height": "100px",
        "margin": "5px"
    });

    $("h2").css({
        "margin": "20px",
        "font-weight": "bolder",
        "color": "white",
        "text-align": "center"
    });

});