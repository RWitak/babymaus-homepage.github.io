let cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    card.onmouseover = function () {
        card.style.boxShadow = "0px 0px 45px 15px cornsilk";
        card.style.transition = "transform .9s;";
        card.style.scale = "1.02";
        card.style.zIndex = "1";
    }

    card.onmouseout = function () {
        card.style.boxShadow = "0px 0px 8px 0px cornsilk";
        card.style.scale = "1.0";
        card.style.zIndex = "0";
    }
});
            