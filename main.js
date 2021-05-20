let hexColor = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'
]

const colorDisplay = document.getElementById('color')

window.addEventListener('keydown', e => {
    if (e.keyCode == 32) {
        let hex = '#'
        for (i = 0; i < 6; i++) {
            let randomColor = Math.floor(Math.random() * hexColor.length);
            hex += hexColor[randomColor];
            document.body.style.backgroundColor = hex;
            colorDisplay.innerHTML = hex;
        }
    }
})