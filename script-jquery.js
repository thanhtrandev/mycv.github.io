$(document).ready(function () {
    $("a").on("click", function() {
        if (this.hash !== "") {
            let hash = this.hash
            $("html,body").animate({
                scrollTop: $(hash).offset().top
            }, 600)
        }
    })
})

// Mở, đóng menu responsive

$(".open-menu").on("click", function() {
    $(".responsive-menu").show("slow")
})

$(".close-responsive-menu").on("click", function() {
    $(".responsive-menu").hide("slow")
})

// Đóng menu khi scroll
$(".responsive-menu").on("click", function() {
    $(".responsive-menu").hide("slow")
})