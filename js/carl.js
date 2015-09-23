var elements = document.getElementsByClassName("element");

function initiateListerner(element){
    var mc = new Hammer(element);
    mc.on('pan', function(ev) {
        ev.target.style.left = ev.deltaX+"px";
    });
    mc.on('panend', function(ev){
        ev.target.style.left = 0;
    }).on('swipe', function(ev){
        $(ev.target).remove();
    });;
}
for(var i = 0; i < elements.length; i++)
{
    initiateListerner(elements[i]);
}