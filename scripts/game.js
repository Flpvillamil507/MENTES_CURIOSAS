// game.js
class Game {
    constructor() {
        this.currentModule = '';
        this.currentDifficulty = '';
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timer; // Agregar variable para el temporizador
    }

    startGame(module, difficulty) {
        this.currentModule = module;
        this.currentDifficulty = difficulty;
        this.currentQuestions = this.shuffleArray(questions[module][difficulty]);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.showQuestion();
    }

    showQuestion() {
        this.clearMotivationMessage();
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.endGame();
            return;
        }

        const question = this.currentQuestions[this.currentQuestionIndex];
        document.getElementById('question').textContent = question.pregunta;

        if (question.tipo === "rompecabezas") {
            this.setupPuzzleQuestion(question);
        } else {
            this.setupMultipleChoiceQuestion(question);
        }

        this.startTimer();
    }

    startTimer() {
        let timeLeft = 6; // 6 segundos
        const timerDisplay = document.createElement('div');
        timerDisplay.id = 'timer';
        timerDisplay.textContent = `Tiempo restante: ${timeLeft} segundos`;
        document.getElementById('game-screen').appendChild(timerDisplay);

        this.timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Tiempo restante: ${timeLeft} segundos`;
            if (timeLeft <= 0) {
                clearInterval(this.timer);
                this.showMotivationMessage();
                // No avanzar a la siguiente pregunta
            }
        }, 1000);
    }

    showMotivationMessage() {
        if (!document.getElementById('motivation-message')) { // Verificar si ya existe
            const motivationMessage = document.createElement('div');
            motivationMessage.id = 'motivation-message';
            motivationMessage.textContent = "¡No te desanimes! ¡Intenta responder la próxima vez!";
            document.getElementById('game-screen').appendChild(motivationMessage);
        }
    }

    clearMotivationMessage() {
        const message = document.getElementById('motivation-message');
        if (message) {
            message.remove();
        }
    }

    setupPuzzleQuestion(question) {
        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = ''; // Limpiar respuestas anteriores

        const img = document.createElement('img');
        img.src = question.imagen;
        img.id = 'puzzle-image';
        img.style.display = 'none'; // Ocultar la imagen original
        answersContainer.appendChild(img);

        const pieces = this.createPuzzlePieces(question.imagen);
        pieces.forEach(piece => {
            answersContainer.appendChild(piece);
            piece.addEventListener('drop', () => this.checkPuzzleCompletion()); // Verificar completitud
        });
    }

    createPuzzlePieces(imageSrc) {
        const pieces = [];
        const rows = 2; // Número de filas
        const cols = 2; // Número de columnas
        const pieceWidth = 100; // Ancho de cada pieza
        const pieceHeight = 100; // Alto de cada pieza

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const piece = document.createElement('div');
                piece.className = 'puzzle-piece';
                piece.style.backgroundImage = `url(${imageSrc})`;
                piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;
                piece.style.width = `${pieceWidth}px`;
                piece.style.height = `${pieceHeight}px`;
                piece.draggable = true;

                piece.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', e.target.style.backgroundPosition);
                });

                piece.addEventListener('dragover', (e) => {
                    e.preventDefault();
                });

                piece.addEventListener('drop', (e) => {
                    e.preventDefault();
                    const draggedPosition = e.dataTransfer.getData('text/plain');
                    const targetPosition = piece.style.backgroundPosition;
                    piece.style.backgroundPosition = draggedPosition;
                    e.target.style.backgroundPosition = targetPosition;
                    this.checkPuzzleCompletion(); // Verificar completitud al soltar
                });

                pieces.push(piece);
            }
        }

        return pieces;
    }

    checkPuzzleCompletion() {
        const pieces = document.querySelectorAll('.puzzle-piece');
        let isComplete = true;

        pieces.forEach(piece => {
            if (piece.style.backgroundPosition !== piece.dataset.correctPosition) {
                isComplete = false;
            }
        });

        if (isComplete) {
            alert('¡Rompecabezas completado!');
            this.currentQuestionIndex++;
            this.showQuestion(); // Avanzar a la siguiente pregunta
        }
    }

    setupMultipleChoiceQuestion(question) {
        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = ''; // Limpiar respuestas anteriores

        question.respuestas.forEach((respuesta, index) => {
            const button = document.createElement('button');
            button.textContent = respuesta;
            button.onclick = () => this.checkMultipleChoiceAnswer(index);
            answersContainer.appendChild(button);
        });

        // Agregar evento al botón de ayuda
        document.getElementById('help-btn').onclick = () => this.showHelpMessage(question);
    }

    showHelpMessage(question) {
        const helpMessage = document.createElement('div');
        helpMessage.id = 'help-message';
        helpMessage.textContent = `Boton de Ayuda: ${question.ayuda || "No hay ayuda disponible para esta pregunta."}`;
        const existingHelpMessage = document.getElementById('help-message');
        if (existingHelpMessage) {
            existingHelpMessage.remove(); // Eliminar mensaje de ayuda anterior
        }
        document.getElementById('game-screen').appendChild(helpMessage);
    }

    checkMultipleChoiceAnswer(answerIndex) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        if (answerIndex === question.correcta) {
            this.score++;
            document.getElementById('score-value').textContent = this.score;
        }
        this.updateProgressBar();
        this.currentQuestionIndex++;
        this.showQuestion();
    }

    updateProgressBar() {
        const progressBar = document.getElementById('progress-bar');
        const totalQuestions = this.currentQuestions.length; // Total de preguntas en el módulo
        const progressPercentage = ((this.currentQuestionIndex / totalQuestions) * 100).toFixed(2);
        progressBar.style.width = `${progressPercentage}%`;
    }

    endGame() {
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('end-screen').classList.remove('hidden');
        document.getElementById('final-score').textContent = this.score;

        // Mensaje de retroalimentación
        this.showFeedbackMessage();
    }

    showFeedbackMessage() {
        const feedbackMessage = document.createElement('div');
        feedbackMessage.id = 'feedback-message';
        feedbackMessage.textContent = this.getFeedback();
        document.getElementById('end-screen').appendChild(feedbackMessage);
    }

    getFeedback() {
        // Personaliza el mensaje de retroalimentación según la puntuación
        if (this.score <= 1) {
            return "Parece que necesitas practicar más. ¡No te desanimes!";
        } else if (this.score <= 2) {
            return "¡Buen trabajo! Pero aún hay espacio para mejorar.";
        } else {
            return "¡Excelente! Has demostrado un gran conocimiento.";
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}