window.onload = function() {
    var preloader = document.querySelector(".page-loading");
    preloader.classList.remove("active");
    setTimeout(function() {
        preloader.remove();
    }, 1000);
};

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $(".navbar").addClass("sticky");
    } else {
        $(".navbar").removeClass("sticky");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() < 100) {
        $(".navbar").addClass("navbar-dark");
    } else {
        $(".navbar").removeClass("navbar-dark");
    }
});