var scroll;
var objects = document.getElementsByClassName('index-removeme');

window.onscroll = function() 
{
    scroll = pageYOffset;
    if (scroll <= 90) 
    {
        topHeader();

        objects[1].style.top = '109px';
    }
    else 
    {
        downHeader();

        objects[1].style.top = '62px';
    }
    if (window.innerWidth > 1100 && window.innerHeight > 600) 
    {
        if (scroll > 150) {
            for (var i = 4; i < objects.length; i++) {
                objects[i].style.display = 'none';
            }
            if (scroll > 250) {
                objects[3].style.display = 'none';

                if (scroll > 638) {
                    objects[1].style.display = 'none';
                }
                else {
                    objects[1].style.display = 'block';
                }
            }
            else {
                objects[3].style.display = 'block';
            }
        }
        else {
            for (var i = 1; i < objects.length; i++) {
                objects[i].style.display = 'block';
            }
        }
    }

    if (scroll > 550) {
        objects[0].style.display = 'none';
        objects[2].style.display = 'none';
    }
    else {
        objects[0].style.display = 'block';
        objects[2].style.display = 'block';
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
}

function downHeader() 
{
    scrollDown[0].style.display = "flex";
    scrollTop[0].style.display = "none";
    var headr = document.getElementsByTagName('header');
}
