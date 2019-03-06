window.onclick = function(event)
{
    if (!event.target == document.getElementById('hidden-entry-top') || event.target != document.getElementById('hidden-entry-top-img')) 
    {
        if (!event.target == document.getElementById('hidden-entry-down') || event.target != document.getElementById('hidden-entry-down-img'))
        {
            removeLinks();
        }
    }
}

window.onresize = function() 
{
    removeLinks();
}

function removeLinks()
{
    var elemsTop = document.getElementsByClassName('hidden-link-top');
    for (var i = 0; i < elemsTop.length; i++) 
    {
        var elem = elemsTop[i];
        elem.style.display = 'none';
    }
    var elemsDown = document.getElementsByClassName('hidden-link-down');
    for (var i = 0; i < elemsDown.length; i++) 
    {
        var elem = elemsDown[i];
        elem.style.display = 'none';
    }
}

function showLinks_top()
{
    var i = 0;
    console.log(window.innerWidth);
    if (window.innerWidth > 1000)
    {
        i++;
        if (window.innerWidth > 1070) 
        {
            i++;
            if (window.innerWidth > 1190)
            {
                i++;
                if (window.innerWidth > 1250)
                {
                    i++;
                    if (window.innerWidth > 1270)
                    {
                        i++;
                    }
                }
            }
        }
    }

    var elems = document.getElementsByClassName('hidden-link-top');
    while (i < elems.length) 
    {
        console.log('addded link #' + i);
        var elem = elems[i];
        elem.style.display = "block";
        i++;
    }
}

function showLinks_bottom()
{
    console.log('showLinks_bottom');
    console.log(window.innerWidth);
    var j = 0;
    if (window.innerWidth > 850)
    {
        j++;
        if (window.innerWidth > 900)
        {
            j++;
            if (window.innerWidth > 950)
            {
                j++;
                if (window.innerWidth > 1000)
                {
                    j++;
                    if (window.innerWidth > 1050)
                    {
                        j++;
                    }
                }
            }
        }
    }

    console.log(j);
    var elemsd = document.getElementsByClassName('hidden-link-down');
    while (j < elemsd.length)
    {
        console.log('added link #' + j);
        var elem = elemsd[j];
        elem.style.display = 'block';
        j++;
    }
}