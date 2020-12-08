var li = document.getElementsByTagName("li");

for (var i=0, max=li.length; i < max; i++)
    if (li[i].childNodes.length > 1)
        li[i].style.listStyle = "none";