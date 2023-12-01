/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 


const xyz = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','l','j','i','h','g','f','e','d','c','b','a'];
const num = ['0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5'];
const value = "mailto:mail@example.org";
//  + xyz[7] + xyz[21] + xyz[8] + xyz[21] + xyz[12] + xyz[17] + xyz[6] + xyz[1] + xyz[25] + xyz[8] + xyz[6] + xyz[22] + xyz[11] + xyz[15] + xyz[15] + xyz[7] + xyz[

window.addEventListener('DOMContentLoaded', event => {

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    var intId = setInterval(() => {
        document.getElementById("abc").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6];
        document.getElementById("abcd").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6];
        document.getElementById("feedbackModalLabel").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6] + " " + xyz[5] + xyz[7];
        document.getElementById("cbutton").style.display = "block";
        clearInterval(intId);
    }, 5000);

});


function sbtnPrepare() {
    var intId2 = setInterval(() => {
        // document.getElementById("subNum").textContent = num[10] + num[7] + num[17] + num[19] + num[6] + " " + num[13] + num[7] + num[25] + num[8] + num[20] + num[16];
        document.getElementById("submitButton").textContent = "E" + xyz[13] + xyz[25] + xyz[17] + xyz[15] + " " + xyz[5] + xyz[7];
        document.getElementById("subMsg").textContent = xyz[7] + xyz[21] + xyz[8] + xyz[21] + xyz[12] + xyz[17] + xyz[6] + xyz[1] + xyz[25] + xyz[8] + xyz[6] + xyz[22] + xyz[11] + xyz[15] + xyz[15] + xyz[7] + value.charAt(11) + xyz[19] + xyz[13] + xyz[25] + xyz[17] + xyz[15] + value.charAt(19) + xyz[23] + xyz[11] + xyz[13];
        document.getElementById("submitButton").style.visibility = "visible";
        clearInterval(intId2);
    }, 3000);
}

function submit() {
    location.href = value.substring(0,7) + xyz[7] + xyz[21] + xyz[8] + xyz[21] + xyz[12] + xyz[17] + xyz[6] + xyz[1] + xyz[25] + xyz[8] + xyz[6] + xyz[22] + xyz[11] + xyz[15] + xyz[15] + xyz[7] + value.charAt(11) + xyz[19] + xyz[13] + xyz[25] + xyz[17] + xyz[15] + value.charAt(19) + xyz[23] + xyz[11] + xyz[13];
}

function linkto() {
    window.open("https://www.ebay.co.uk/sch/237/i.html?item=134742901689&_ssn=purplemolly100", "_blank");
}

function linktoInstagram() {
    window.open("https://www.instagram.com/chelles_craft_gifts/", "_blank");
}