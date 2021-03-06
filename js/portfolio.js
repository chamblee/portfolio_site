//Fade in syntax after 2 seconds
let timeout_fadeIn = setTimeout(() => {
    fadeIn();
}, 2000);

//fade-in or fade-out when name is clicked
document.getElementById('myName').addEventListener('click', () => {
    let syntacticOpacity = getComputedStyle(document.querySelector('.syntactic')).opacity;
    syntacticOpacity > 0 ? fadeOut() : fadeIn();
});

function fadeIn() {
    //fade in syntactic elements
    document.querySelectorAll('.syntactic').forEach((el) => {
        el.style.cssText = "opacity: 0.3; filter: blur(0px); text-shadow: none; max-height: 2em;"
    });

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

    //remove flow-disrupting syntactic elements from the layout
    document.querySelectorAll('#myName .syntactic, .value .syntactic').forEach((el) => {
        el.style.display = "none";
    });
}