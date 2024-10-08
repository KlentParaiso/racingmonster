let x1 = 0, x2 = 0, x3 = 0; // Monster positions
let v1 = 0, v2 = 0, v3 = 0; // Monster velocities
let idInterval; // Interval ID for animation


function startAnimation() {
    document.getElementById('btnStart').disabled = true;
    document.getElementById('btnStop').disabled = false;


    v1 = Math.random() * 10 + 1;
    v2 = Math.random() * 10 + 1;
    v3 = Math.random() * 10 + 1;


    idInterval = setInterval(move_a_step, 100);
}


function move_a_step() {
    const track1Width = 870
    
    v1 += Math.random() * 2 - 1; 
    v2 += Math.random() * 2 - 1; 
    v3 += Math.random() * 2 - 1;

    v1 = Math.max(v1, 3); 
    v2 = Math.max(v2, 3); 
    v3 = Math.max(v3, 3); 
    
    x1 += v1;
    x2 += v2;
    x3 += v3;


    document.getElementById('monster1').style.left = x1 + 'px';
    document.getElementById('monster2').style.left = x2 + 'px';
    document.getElementById('monster3').style.left = x3 + 'px';


    if (x1 >= track1Width || x2 >= track1Width || x3 >= track1Width) {
        clearInterval(idInterval);
        let winner = '';

    
        if (x1 >= track1Width && x1 >= x2 && x1 >= x3) {
            winner = 'Monster 1';
        } else if (x2 >= track1Width && x2 >= x1 && x2 >= x3) {
            winner = 'Monster 2';
        } else if (x3 >= track1Width && x3 >= x1 && x3 >= x2) {
            winner = 'Monster 3';
        }

        alert(winner + ' wins!');
        window.location.reload();
    }
}

function stopAnimation() {
    clearInterval(idInterval);
    document.getElementById('btnStart').disabled = false;
    document.getElementById('btnStop').disabled = true;
}