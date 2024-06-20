function OpenMobileMenu()
{
    var menu = document.getElementById("navbar");

    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");

    var lineU = document.getElementById("lineU");
    var lineD = document.getElementById("lineD");


    if (menu.style.display === "block") {
        line1.classList.remove("rot1");
        line2.classList.remove("rot2");

        setTimeout(function() {
            lineU.classList.remove("hidden");
            lineD.classList.remove("hidden");
        }, 300);
        

        menu.style.display = "none";
    }
    else{
        line1.classList.add("rot1");
        line2.classList.add("rot2");

        lineU.classList.add("hidden");
        lineD.classList.add("hidden");

        menu.style.display = "block";
    }
}

window.addEventListener('scroll', function(){
    let navHeader = document.querySelector('.navigation');
    let windowPosition = window.scrollY > 0;
    navHeader.classList.toggle('scrolling-navigation', windowPosition)
})


function SelectedNav(e){
    var previous = document.getElementsByClassName("selected");
    for (let index = 0; index < previous.length; index++) {
        previous[index].classList.remove("selected");;
        
    }
    e.target.classList.add("selected");
}

function SelectedItem(tag, e) {

    var previous = document.getElementsByClassName("selected-item");
    
    for (let index = 0; index < previous.length; index++) {
        previous[index].classList.remove("selected-item");;
        
    }
    e.target.classList.add("selected-item");

    var images = document.querySelectorAll("#gallery img");
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        if (tag === 'all' || image.getAttribute('data-tags').split(',').indexOf(tag) !== -1) {
            ShowImage(image);
        } else {
            HideImage(image);
        }
    }
}

function HideImage(image) {
    image.style.display = "none";
}

function ShowImage(image) {
    image.style.display = "block";
}
