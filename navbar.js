$(".hamburgerIcon").click(function (){

    $(".hamburgerIcon").hide();
    $(".crossIcon").show();
    $(".crossIcon").css("background-color", "#d2d434");
    $(".crossIcon").css("border-style", "solid");
    $(".crossIcon").css("border-color", "orange");
    $(".crossIcon").css("border-width", "0.375rem 0.375rem 0.250rem 0.375rem");
    $(".container").on("mouseleave", function () {
        $(".dropdown-content").css("display", "block");
    });

});
$(".crossIcon").click(function (){
    $(".hamburgerIcon").show();
    $(".crossIcon").hide();
    $(".dropdown-content").hide();
    $(".container").hover(
        function() {
            $(".dropdown-content").css("display","block");
        },
        function () {
            $(".dropdown-content").css("display","none");
        }
    );

})