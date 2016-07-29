# Traversing-Documents-jQuery-Practice
Practice for jQuery traversing section

# Traversing Documents jQuery Including

- ID Content the children are these links
- Use prev/next function
- ID Content parent but doesn't include the body
- Use find function
- Use each function iterates over a set of elements and performs an operation on each element 


#Examples

- $("#Content").children().css("font-size", "2.5em");

- var target = $("#icon4");
- target.prev().css("color", "#b26c34");
-target.next().css("color", "#eba96d");

- var con = $("#Content");
- con.parentsUntil($("body")).css("height", windowHeight);

- $("#Content").find(".github").css("color", "#b37aa5"); 

- var paddingRight = 5;
- $("#Content a").each(function(index, element) {
- $(element).css("padding-right", paddingRight+"px");
- paddingRight += 5;
- }); 
