//steps for the scroll..its gonna return each 0.005 steps
const getThreshold = () => {
    let data = [];

    for (let i = 0; i <= 1.0; i += 0.005) {
        data.push(i);
    }

    return data;
}

const mountObserver = ({ target, onScrollAction, threshold }) => {
    const options = {
        root: null,
        //root: document.querySelector("#mark"),
        rootMargin: '0px',
        threshold
    }

    const observer = new IntersectionObserver(onScrollAction, options);

    observer.observe(target);
}

const handleChanges = (entries) => {
    entries.forEach(({ target, intersectionRatio }) => {
        const element = target.querySelector('.percentage__value');
        const view = target.className.split(' ')[1];
        const percentage = Math.ceil(intersectionRatio * 100);

        element.firstChild.data = percentage;
        var animRate = RangeMapper(percentage, -2, 2)
        //console.log(view)
        //disc3.position.x = animRate;
        
        scaleLegendBg({
            bg: document.querySelector(`.legend__item--${view}`).querySelector('.legend__bg'),
            percentage: percentage / 100
        })
        
    });
}

const scaleLegendBg = ({ bg, percentage }) => {
    bg.style.transform = `scaleX(${percentage})`;
};

//once html loaded...
//get my html to observe and mount an observe in there
document.addEventListener('DOMContentLoaded', (event) => {
    const views = ['.home', '.ar', '.vr', '.experiences', '.contact'];

    views.forEach((view) => {
        mountObserver({
            target: document.querySelector(view),
            onScrollAction: handleChanges,
            threshold: getThreshold()
        });
    });   
});
