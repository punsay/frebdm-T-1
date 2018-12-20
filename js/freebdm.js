$( document ).ready(function() {
    $(".nav li:first").addClass("active");
    $(".content_description-more").hide();
    $(".tabs-section_content-2").hide();
    $(".tabs-section_content-3").hide();
    $(".nav-dropdown").hide();

    /*function checkWidth(){

        if ($(window).width() <= 1180) {
            $(".tabs-section_content-1").addClass("active");
        }
        else {
            $(".tabs-section_content").removeClass("active");
        }
    }
    checkWidth();*/
});

$('.carousel').carousel({
    interval: 5000
});

$(".nav .nav_item").click(function (e) {
    $(this).addClass("active");
    $(".nav li").not(this).removeClass("active");
});

$(".content_handle-btn").click(function(){

    if($(".content_handle-btn").text()== "Read More"){
        $(".content_description-more").slideToggle();
        $(".content_handle-btn").text("Read Less");
    }
    else{
        $(".content_description-more").slideToggle();
        $(".content_handle-btn").text("Read More");
    }
});

$(".tabs-section_tab div").click(function () {
    var tab_active = $(this).attr("data");
    $("."+tab_active).show();
    /*$("."+tab_active).addClass("active");*/
    $(".tabs-section_content ul:not(."+tab_active+")").hide();
   /* $(".tabs-section_content ul:not(."+tab_active+")").addClass("inactive");*/
});

$(".nav-toggle").click(function(){
    $(".nav-dropdown").slideToggle();
});

//handling change in screen size
$( window ).resize(function() {

    if ($(window).width() <= 1180) {
        $(".tabs-section_content").addClass("active");
    }
    else {
        $(".tabs-section_content").removeClass("active");
    }

});

/*while(true){
    if ($(window).width() <= 1180) {
        $(".tabs-section_content-1").addClass("active");
    }
    else {
        $(".tabs-section_content").removeClass("active");
    }
}*/

