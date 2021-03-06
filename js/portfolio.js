//initial fade in
fadeIn();

//alternate fade in / fade out when user scrolls to top
let scrollZeroCount = 0;
document.addEventListener('scroll', () => {
    let scrollAmount = document.body.scrollTop;
    let mainHeight = document.querySelector('main').offsetHeight;
    if (scrollAmount === 0) {
        scrollZeroCount++;

        if (scrollZeroCount % 2 == 0) {
            fadeIn();
        } else {
            fadeOut();
        }
    }
});

//fade-in or fade-out when name is clicked
document.getElementById('myName').addEventListener('click', () => {
    let syntacticOpacity = getComputedStyle(document.querySelector('.syntactic')).opacity;
    syntacticOpacity > 0 ? fadeOut() : fadeIn();
});

//fade in and fade out functions

function fadeIn() {
    //fade in syntactic elements
    document.querySelectorAll('.syntactic').forEach((el) => {
        el.style.cssText = "opacity: 0.3; filter: blur(0px); text-shadow: none; max-height: 2em;"
    });

    //adjust vertical spacing
    document.querySelector('.shrinkMe').style.marginBottom = "0";

    //re-add flow-disrupting syntactic elements to the layout
    document.querySelectorAll('#myName .syntactic, .value .syntactic').forEach((el) => {
        el.style.display = "inline";
    });
    
}

function fadeOut() {
    //fade out syntactic elements
    document.querySelectorAll('.syntactic').forEach((el) => {
        el.style.cssText = "opacity: 0; filter: blur(1px); text-shadow: 2px 2px 3px #7deaff; max-height: 0;"
    });

    //adjust vertical spacing
    document.querySelector('.shrinkMe').style.marginBottom = "-40px";

    //remove flow-disrupting syntactic elements from the layout
    document.querySelectorAll('#myName .syntactic, .value .syntactic').forEach((el) => {
        el.style.display = "none";
    });
}