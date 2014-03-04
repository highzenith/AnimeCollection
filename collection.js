function init() {
    $.getJSON("sword-art-online.anime", function(anime) {
        $("#title").append(anime.title);

        if(demographic) {
            $("#demographic a").append(anime.demographic);
            // $("<span> </span>").insertAfter("#demographic");
        }
        if(genre) {
            $("#genre a").append(anime.genre);
            // $("<span> </span>").insertAfter("#genre");
        }
        if(creator) {
            $("#creator a").append(anime.creator);
        }

        $bgFileName = "url(\"../images/" + anime.setting + ".png\")";
        $("html, body").css({
            "background": $bgFileName + "fixed"
        });
    })
}

//  Calls the initializing function when the page loads.
$(init);