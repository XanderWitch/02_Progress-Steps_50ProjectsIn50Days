//click on next and move to next step, etc.
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    
    //don't let it get past the last step
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    //don't let it get before the first step
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

//update the DOM

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    //handle the progress bar - use percentage of progress length
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    
    //disable buttons when we're at the end or beginning of the progress bar
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}








