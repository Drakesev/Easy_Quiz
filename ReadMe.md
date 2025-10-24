# Easy Quiz

[![npm version](https://badge.fury.io/js/easy_quiz.svg)](https://www.npmjs.com/package/easy_quiz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub contributors](https://img.img.shields.io/github/contributors/Drakesev/easy_quiz)](https://github.com/Drakesev/easy_quiz/graphs/contributors)

Una mini libreria Node.js per creare quiz Vero/Falso direttamente nella console. Facile da usare, senza dipendenze, con domande casuali e visualizzazione del punteggio finale.

## 🚀 Installazione

Installa la libreria tramite npm:

```bash
npm install easy_quiz
```

## 💡 Utilizzo

La libreria è progettata per essere semplice e immediata.

### 1. Importa la libreria

Importa la funzione `Quiz` (o come preferisci chiamarla) nel tuo progetto.

```javascript
// index.js
const Quiz = require('easy_quiz');
// Oppure, se usi i moduli ES:
// import Quiz from 'easy_quiz';
```

### 2. Definisci le Domande

Le domande devono essere fornite come un array di oggetti. Ogni oggetto deve avere le proprietà `question` (la domanda) e `answer` (la risposta corretta, `true` o `false`).

```javascript
const questions = [
  { question: "Il cielo è blu?", answer: true },
  { question: "I cani sono felini?", answer: false },
  { question: "La Terra è piatta?", answer: false },
  { question: "2 + 2 = 4?", answer: true },
  // Aggiungi qui tutte le tue domande
];
```

### 3. Avvia il Quiz

Passa l'array di domande alla funzione importata e avviala.

```javascript
Quiz(questions);
```

### Esempio Completo

Ecco come appare un file di esempio (`example.js`):

```javascript
const Quiz = require('easy_quiz');

// Definisci le tue domande
const myQuestions = [
  { question: "Il sole è una stella?", answer: true },
  { question: "L'acqua bolle sempre a 100°C?", answer: false }, // Dipende dalla pressione!
  { question: "La capitale d'Italia è Milano?", answer: false },
  { question: "Il linguaggio JavaScript è tipizzato staticamente?", answer: false },
];

// Avvia il quiz
Quiz(myQuestions);
```

Per eseguire l'esempio:

```bash
node example.js
```

**Nota:** Il file `index.js` che hai fornito sembra contenere sia la logica del quiz che un array di domande di esempio. Per l'uso come libreria, il file `index.js` dovrebbe *esportare* la funzione principale del quiz e non eseguirla direttamente. Assicurati che il tuo `index.js` sia strutturato in modo simile a questo per funzionare come libreria:

```javascript
// index.js (Versione per libreria)
const readline = require('readline');

// ... (logica per mescolare e gestire il quiz) ...

function Quiz(questions) {
  // ... (implementazione del quiz) ...
}

module.exports = Quiz;
```

Se il tuo `index.js` è solo un esempio di utilizzo, considera di rinominarlo.

## 🛠️ Caratteristiche

*   **Semplice e Leggero:** Nessuna dipendenza esterna.
*   **Interfaccia a Console:** Perfetto per script Node.js o strumenti da riga di comando.
*   **Domande Casuali:** Le domande vengono mescolate ad ogni esecuzione.
*   **Punteggio Finale:** Visualizza il numero di risposte corrette alla fine.

## 📄 Licenza

Questo progetto è rilasciato sotto licenza **MIT**. Vedi il file [LICENSE](LICENSE) per i dettagli.

## 🤝 Contributi

I contributi sono sempre benvenuti! Se hai suggerimenti, segnalazioni di bug o vuoi aggiungere nuove funzionalità, sentiti libero di aprire una **Issue** o inviare una **Pull Request** sul [repository GitHub](https://github.com/Drakesev/easy_quiz).

---
*Creato con passione da Drakesev*
