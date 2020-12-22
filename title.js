/*
function blink()
    {
        let body = document.querySelector('#btitle');
        if (body.style.visibility === 'hidden')
        {
            body.style.visibility = 'visible';
        }
        else
        {
            body.style.visibility = 'hidden';
            //document.getElementById("btitle").innerHTML = "Wilkommen!";
        }
    }

// Blink every 500 ms
window.setInterval(blink, 500);

This is just the example I worked off of.
*/

function hello()
    {
        var titles = ["Wilkommen","Bienvenido","Elcomeway","Hello, World","Egestas fringilla", "Welcome"];
        let title = document.querySelector('#btitle');
        //title.innerHTML = titles[titles.indexOf(title.innerHTML)+1];
        if (title.value == "Welcome")
        {
            title.innerHTML = titles[0];
        }
        else if (titles.indexOf(title.innerHTML)==5)
        {
            title.innerHTML = titles[0];
        }
        else {
            title.innerHTML = titles[titles.indexOf(title.innerHTML)+1];
        }
    }

window.setInterval(hello, 2000);
