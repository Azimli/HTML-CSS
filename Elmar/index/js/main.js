$(document).ready(function () {
    var photo_boxes=$(".photo_boxes"),
        btns=$(".photo_cat li a");

    photo_boxes.isotope({
        filter:"*"

    });



    btns.on("click", function(){
        var bu=$(this),
            filter=bu.data("filter");

        photo_boxes.isotope({
            filter:filter

        });



        $(".photo_cat li a").removeClass("photo_cat_active").filter(bu).addClass("photo_cat_active");
        return false;

    });




});