function initializeGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('mine')) {
            // end game
                button.classList.add('mine-clicked');
                alert('Game over!');
                location.reload();
            } else {
                //Empty field clicked - reveal adjacent fields
              showCell(button);
            }
        });
    });
}

function showCell(button) {
    if (button.classList.contains('save')) {
        button.classList.add('show-save');
    }
}


initializeGame();