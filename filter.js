$(document).ready(function () {
    var activeGenre = "";
    function filtergen(gen) {
        if (activeGenre != gen) {
            $("div").filter("." + gen).show();
            $("div").filter(":not(." + gen + ")").hide();
            activeGenre = gen;
        }
    }

    // Call filtergen with "gen-0" parameter by default
    filtergen("gen-0");

    // Set up click event listeners for the genre buttons
    $(".genre-0").click(function () { filtergen("gen-0"); });
    $(".genre-1").click(function () { filtergen("gen-1"); });
    $(".genre-2").click(function () { filtergen("gen-2"); });
    $(".genre-3").click(function () { filtergen("gen-3"); });
    $(".genre-4").click(function () { filtergen("gen-4"); });
    $(".genre-5").click(function () { filtergen("gen-5"); });
    $(".genre-6").click(function () { filtergen("gen-6"); });
    $(".genre-7").click(function () { filtergen("gen-7"); });
    $(".genre-8").click(function () { filtergen("gen-8"); });
    $(".genre-9").click(function () { filtergen("gen-9"); });
    $(".genre-10").click(function () { filtergen("gen-10"); });
    $(".genre-11").click(function () { filtergen("gen-11"); });
});
