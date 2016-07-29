/*Nina Kong*/
$(document).ready(function(){
	var windowHeight = $( window ).height();
	//$(".container").height(windowHeight);

    $("#Content").css("padding", "2em"); 

    $("#Content").children().css("font-size", "2.5em");

    var target = $("#icon4");
    target.prev().css("color", "#b26c34");
    target.next().css("color", "#eba96d");

    var con = $("#Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $("#Content").find(".github").css("color", "#b37aa5"); 

    var paddingRight = 5;
    $("#Content a").each(function(index, element) {
    	$(element).css("padding-right", paddingRight+"px");
    	paddingRight += 5;
    });

    //$("div:has(a[id=icon3])").css("padding", "2em 1em");

    

    //$("div a:nth-child(2)").css("color", "#b37aa5"); 

 	//$("div a:nth-child(3n)").css("color", "#e4b7bf"); 

});
