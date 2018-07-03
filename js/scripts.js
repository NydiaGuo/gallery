$(document).ready(function(){
    
    var body = $("body");
    body.append("<div class='container-fluid'><div class='text-center' id='imagesHolder'></div></div>");
    body.css("background-color","black");

    body.append("<div class='container-fluid text-center' id='displayImg'></div>");

    var images = ["images/1.png", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", 
                "images/7.jpg", "images/8.jpg", "images/9.jpg","images/10.jpg"];

    //creating a holder for each image and close button
    for(var i = 0; i < images.length; i++) {

        var image = "<a href=" +images[i]+ "><img src=" + images[i] + "></a>";

        $("#imagesHolder").append(image);
        $("a").addClass("openImages");

    }

    //Triggers click function when clicking on each img
    $(".openImages").on('click', function(e){

            e.preventDefault();
            var addAttr = $(this).attr("href");

            $("#displayImg").append("<img class='pic' src=" + addAttr + "><button id='close'>close</button>");
            
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

            $(".pic").css({
                "width":"830px",
                "height":"500px",
                "margin-top":"40px",
                "border-radius":"3px"
             });

        //Remove the img from the display holder
        body.on('click', '#close', function(){
            $(this).remove();
            $(".pic").remove();
        
        });
    });
            
    $("button").css({
        "display":"none"
    });

    $("#imagesHolder").css({
        "display":"block"
    });

    $("#imagesHolder img").css({
        "width": "120px",
        "height": "100px",
        "margin": "5px",
        "box-shadow":"2px 2px 2px rgb(218,219,219)",
        "border-radius":"3px"
    });

    $("h2").css({
        "margin": "20px",
        "font-weight": "bolder",
        "color": "white",
        "text-align": "center"
    });

});