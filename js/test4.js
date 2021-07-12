
var main = document.getElementsByTagName('main');
var h1 = document.createElement("h1");
var text = document.createTextNode("Enjoy");
h1.appendChild(text);

main[0].appendChild(h1);
/*
var unorderList =document.createElement("ul");
main[0].appendChild(unorderList);

for( let i=0; i<3;i++)
{
   
    var litem =document.createElement('li');
    litem.appendChild(document.createTextNode("Client "+(1+i)));

    unorderList.appendChild(litem);
}*/