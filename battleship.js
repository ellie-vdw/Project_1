
/**
 * @file runs the game of battleship 
 */
document.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');
    let ocean = document.getElementById('ocean');
    base = document.getElementById('base');
    setup(content, markSquare, oSquares);
    setup(ocean, markShip, pSquares);
    let resetButton = document.querySelector('#reset');
    let startButton = document.getElementById('start');
    let rotateButton = document.getElementById('rotate');
    let done = document.getElementById('choose');
    resetButton.addEventListener('click', () => {
        if(started) {
            base.id = 'base';
            hori = true;
            started = false;
            sinkCounter = 0;
            num2 = 0;
            breakdown(content);
            breakdown(ocean);
            pSquares = [];
            oSquares = [];
            setup(content, markSquare, oSquares);
            setup(ocean, markShip, pSquares);
            setupShips(base);
            resetAsk(done);
        }
        else {
            alert('Can reset once started.');
        }
    });

    rotateButton.addEventListener('click', () => {
        if(base.id == 'base') {
            base.id = 'base-vert';
            ships.forEach(ship => ship.className += '-vert');
            hori = false;

        }
        else if(base.id =='base-vert') {
            base.id = 'base';
            ships.forEach(ship => ship.className = ship.className.slice(0, -5));
            hori = true;
        }

    });

    startButton.addEventListener('click', () => {
        console.log('start');
        started = base.childElementCount == 0;
        if (!(started)) {
            alert('Place all the ships first!');
        } else {
            alert('Game has started!');
        }
    });

    let input1 = document.querySelector('#numShips');
    const shipselectclick = document.querySelector('#ok')

    shipselectclick.addEventListener('click', setShipNumber(input1, done));

});
