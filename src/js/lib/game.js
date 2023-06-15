
const tryAgainButton = document.getElementById('try_again');
tryAgainButton.addEventListener('click', ()=> {
    location.reload();
})

function initializeGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('mine')) {
                // end game
                button.classList.add('mine-clicked');
                alert('Game over! You clicked on mine');
                if(tryAgainButton){
                    tryAgainButton.classList.add('try_again_active');
                }
            } else {
                //Empty field clicked - reveal adjacent fields
                saveClick(button);
            }
        });
    });
}

function saveClick(button) {
    if (button.classList.contains('save')) {
        button.classList.add('show-save');
    }
}
export function startGame(){
    initializeGame()
}


