var typed = new Typed(".text",{
    strings:["Web Developer","Android Developer","YouTuber"],
    typeSpeed:100,
    backSpeed:100,
    baclDelay:1000,
    loop:true
});
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Vishnu Siddhan";
            $("#favicon").attr("href", "wall/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "wall/favhand.png");
        }
    });

    