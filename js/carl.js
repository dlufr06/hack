var elements = document.getElementsByClassName("element");
var debug;
function initiateListerner(element){
    var mc = new Hammer(element);
    mc.on('pan', function(ev) {
        //Flytta med musen/fingret
        ev.target.style.left = ev.deltaX+"px";
    }).on('panend', function(ev){
        //Flytta tillbaka till normal position
        ev.target.style.left = 0;
    }).on('swipe', function(ev){
        //Flytta till oldcontainer när man dragit snabbt 
        //och elementet inte är där redan.
        if(ev.target.parentElement.id !== "oldContainer")
        {
            $("#oldContainer").prepend(ev.target);
        }
    });;
}

for(var i = 0; i < elements.length; i++)
{
    initiateListerner(elements[i]);
}

$("#newButton").click(function(){
    $("#newButton").addClass("active");
    $("#oldButton").removeClass("active");
    $("#oldContainer").addClass("hidden");
    $("#newContainer").removeClass("hidden");
});

$("#oldButton").click(function(){
    $("#oldButton").addClass("active");
    $("#newButton").removeClass("active");
    $("#newContainer").addClass("hidden");
    $("#oldContainer").removeClass("hidden");
});