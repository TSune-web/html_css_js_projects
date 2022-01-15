const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

// || (r < 75 || g < 75 || b < 75) && (r+g+b > 500) 

const checkBrightness = (r, g, b) => {
    if ( ( r < 50 || g < 50 || b < 50) || (r+g+b < 220 ) ) { 
        h1.style.color = 'lightgrey';
    } else {
        h1.style.color = 'black';
    }
}

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    checkBrightness(r, g, b);

    return `rgb(${r}, ${g}, ${b})`;
};


btn.addEventListener('click', function() {
    const newColor = randomColor();

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})
