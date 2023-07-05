import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};
function successAlert() {
    alert(" Gửi contact thành công !");
}
function hideButton() {
    var x = document.getElementById("hide");
    var y =  document.getElementById("size");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.height = "900px";

    } else {
      x.style.display = "none";
      y.style.height = "732px";
    }
  }

  function hideButton1() {
    var x = document.getElementById("hide1");
    var y =  document.getElementById("size1");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.height = "900px";

    } else {
      x.style.display = "none";
      y.style.height = "732px";
    }
  }
  function hideButton2() {
    var x = document.getElementById("hide2");
    var y =  document.getElementById("size2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.height = "900px";

    } else {
      x.style.display = "none";
      y.style.height = "732px";
    }
  }

    function btnShow() {
        var x = document.getElementById("hide");
        if (x.style.display === "none") {
          x.style.display = "block";

        } else {
          x.style.display = "none";
        }
      }
      function btnShow1() {
        var x = document.getElementById("hide1");
        if (x.style.display === "none") {
          x.style.display = "block";

        } else {
          x.style.display = "none";
        }
      }
      function btnShow2() {
        var x = document.getElementById("hide2");
        if (x.style.display === "none") {
          x.style.display = "block";

        } else {
          x.style.display = "none";
        }
      }

      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

      function subMenu() {
        var x = document.getElementById("submenu");
        if (x.style.display === "none") {
          x.style.display = "block";

        } else {
          x.style.display = "none";
        }
      }
