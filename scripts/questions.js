const questions = {
    arte: {
        facil: [
            {
                tipo: "multiple",
                pregunta: "¿Quién pintó la Capilla Sixtina?",
                respuestas: ["Leonardo da Vinci", "Pablo Picasso", "Miguel Ángel", "Vincent van Gogh"],
                correcta: 2,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "¿Qué estilo artístico es conocido por su uso de la luz y la sombra?",
                respuestas: ["Impresionismo", "Barroco", "Cubismo", "Surrealismo"],
                correcta: 1,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "¿Cuál de estas obras fue pintada por Salvador Dalí?",
                respuestas: ["La persistencia de la memoria", "El grito", "La noche estrellada", "Las meninas"],
                correcta: 0,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            }
        ],
        dificil: [
            {
                tipo: "unir",
                pregunta: "Une el nombre con el objeto correspondiente.",
                opciones: [
                    { nombre: "La Gioconda", objeto: "assets/images/gioconda.jpg" },
                    { nombre: "El Grito", objeto: "assets/images/grito.jpg" },
                    { nombre: "La noche estrellada", objeto: "assets/images/noche_estrellada.jpg" }
                ],
                correcta: [0, 1, 2], // Indices de las respuestas correctas
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "imagen",
                pregunta: "¿Quién pintó esta obra?",
                imagen: "assets/images/noche_estrellada.jpg",
                respuestas: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dalí"],
                correcta: 0,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "rompecabezas",
                pregunta: "Completa el rompecabezas.",
                imagen: "assets/images/inicio.jpg", // Imagen del rompecabezas
                correcta: "rompecabezas", // Identificador para verificar la solución
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            }
        ]
    },
    historia: {
        facil: [
            {
                tipo: "multiple",
                pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
                respuestas: ["1939", "1941", "1945", "1914"],
                correcta: 0,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
                respuestas: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
                correcta: 0,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "¿Qué civilización construyó las pirámides?",
                respuestas: ["Griega", "Romana", "Egipcia", "Maya"],
                correcta: 2,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            }
        ],
        dificil: [
            {
                tipo: "multiple",
                pregunta: "¿Cuál fue la causa principal de la Primera Guerra Mundial?",
                respuestas: ["La Revolución Industrial", "El asesinato de Francisco Fernando", "La Gran Depresión", "La Guerra Fría"],
                correcta: 1,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
                respuestas: ["Tratado de Versalles", "Tratado de Trianon", "Tratado de Saint-Germain", "Tratado de París"],
                correcta: 0,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "¿Quién fue el líder de la Unión Soviética durante la Segunda Guerra Mundial?",
                respuestas: ["Lenin", "Stalin", "Trotsky", "Gorbachev"],
                correcta: 1,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            }
        ]
    },
    razonamiento: {
        facil: [
            {
                tipo: "multiple",
                pregunta: "Si 2x + 3 = 11, ¿cuál es el valor de x?",
                respuestas: ["3", "4", "5", "6"],
                correcta: 1,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "¿Cuál es el siguiente número en la secuencia: 2, 4, 6, 8, ...?",
                respuestas: ["9", "10", "11", "12"],
                correcta: 1,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "¿Cuántos lados tiene un hexágono?",
                respuestas: ["4", "5", "6", "7"],
                correcta: 2,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            }
        ],
        dificil: [
            {
                tipo: "multiple",
                pregunta: "Si un tren sale de una estación a las 3:00 PM y viaja a 60 km/h, ¿a qué hora llegará a su destino a 180 km de distancia?",
                respuestas: ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
                correcta: 1,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "Si un círculo tiene un radio de 7 cm, ¿cuál es su área? (Usa π ≈ 3.14)",
                respuestas: ["154 cm²", "144 cm²", "100 cm²", "50 cm²"],
                correcta: 0,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            },
            {
                tipo: "multiple",
                pregunta: "Si un triángulo tiene un ángulo de 90 grados y otro de 45 grados, ¿cuánto mide el tercer ángulo?",
                respuestas: ["45 grados", "60 grados", "30 grados", "90 grados"],
                correcta: 0,
                ayuda: "Recuerda que es un famoso artista del Renacimiento."
            }
        ]
    }
};