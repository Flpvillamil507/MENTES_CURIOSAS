const game = new Game();

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('color-selection').classList.add('hidden');
    document.getElementById('module-selection').classList.remove('hidden');
});

document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedColor = e.target.dataset.color;
        document.body.style.backgroundColor = selectedColor; 
    });
});

document.querySelectorAll('.module-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        game.currentModule = e.target.dataset.module;
        document.getElementById('module-selection').classList.add('hidden');
        document.getElementById('difficulty-selection').classList.remove('hidden');
    });
});

document.querySelectorAll('.difficulty-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        game.startGame(game.currentModule, e.target.dataset.difficulty);
        document.getElementById('difficulty-selection').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
    });
});

document.getElementById('play-again-btn').addEventListener('click', () => {
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('color-selection').classList.remove('hidden');
});