var scroll;

window.onscroll = function() 
{
    scroll = pageYOffset;
    if (scroll <= 50) 
    {
        topHeader();
    }
    else 
    {
        downHeader();
    }
}

var header = document.getElementsByTagName('header');
var scrollTop = document.getElementsByClassName('scroll-top');
var scrollDown = document.getElementsByClassName('scroll-down');

function topHeader() 
{
    scrollDown[0].style.display = "none";
    scrollTop[0].style.display = "flex";
    var headr = document.getElementsByTagName('header');
    headr[0].style.minHeight = "130px";
}

function downHeader() 
{
    scrollDown[0].style.display = "flex";
    scrollTop[0].style.display = "none";
    var headr = document.getElementsByTagName('header');
    headr[0].style.minHeight = "80px";
}
