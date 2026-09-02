# Changelog

Tutte le modifiche importanti apportate a questo progetto verranno documentate in questo file.

## [1.0] - 29/08/2026

### Aggiunto

* Aggiunto il canvas `500x500`.
* Aggiunto il background con colore RGB `(89, 70, 100)`.
* Aggiunta la linea di partenza nella posizione `30`.
* Aggiunta la linea di arrivo nella posizione `430`.
* Aggiunti i quattro concorrenti.
* Aggiunto il movimento dei concorrenti verso la linea di arrivo.
* Aggiunto il `frameRate(3)` per controllare la velocità di aggiornamento del gioco.
* Aggiunta la funzione `drawContender()` per disegnare i concorrenti.
* Aggiunta la variabile `spacing` per gestire lo spostamento dei concorrenti.

### Modificato

* Impostato il movimento automatico dei concorrenti dalla linea di partenza verso quella di arrivo.

### Rimosso

* Nulla.

### Corretto

* Nulla.

---

## [2.0] - 31/08/2026

### Aggiunto

* Aggiunto il pulsante `"START"`.
* Aggiunta la variabile `raceStarted`.
* Aggiunta la funzione `startRace()`.
* Aggiunti colori diversi per i quattro concorrenti.
* Aggiunta la funzione `drawContenders()` per gestire i concorrenti.

### Modificato

* Modificata la funzione `drawContender()` per permettere l'utilizzo di colori diversi.
* Modificato il movimento dei concorrenti, che ora inizia solamente dopo la pressione del pulsante `"START"`.
* Modificata la gestione dei quattro concorrenti attraverso un ciclo `for`.

### Rimosso

* Rimosso il movimento automatico dei concorrenti all'avvio del programma.
* Rimossa la gestione dei concorrenti tramite chiamate separate.
* Rimossa la gestione del concorrente tramite il ciclo basato su `segments`.

### Corretto

* Corretta la gestione dei quattro concorrenti attraverso un ciclo `for`.
* Corretta l'assegnazione della posizione verticale dei concorrenti.
* Corretta la gestione dei colori dei concorrenti.
* Corretta l'attivazione del movimento tramite il pulsante `"START"`.

---

## [3.0] - 02/09/2026

### Aggiunto

* Aggiunto un array `circX` per gestire separatamente la posizione di ogni concorrente.
* Aggiunto l'array `speeds` per assegnare una velocità diversa a ogni concorrente.
* Aggiunti quattro argomenti: `Processore`, `Memoria Centrale`, `Periferiche I/O` e `File System`.
* Aggiunte tre domande per ciascun argomento.
* Aggiunta la selezione casuale della domanda in base all'argomento del vincitore.
* Aggiunta la legenda per indicare la corrispondenza tra colore e argomento.
* Aggiunto il campo di input per inserire la risposta.
* Aggiunto il pulsante `"RISPONDI"`.
* Aggiunta la funzione `checkAnswer()` per verificare la risposta.
* Aggiunta la funzione `chooseQuestion()` per selezionare la domanda.
* Aggiunto il messaggio che indica se la risposta è corretta o sbagliata.
* Aggiunta la gestione del vincitore.
* Aggiunta la variabile `gameFinished` per gestire la conclusione del gioco.

### Modificato

* Modificato il movimento dei concorrenti, assegnando una velocità casuale a ogni concorrente a ogni avvio della gara.
* Modificata la gestione della posizione dei concorrenti, rendendola indipendente per ogni concorrente.
* Modificata la funzione `drawContender()` sostituendo la forma circolare con una stella a cinque punte.
* Modificato il background, passando dal colore grigio al blu chiaro.
* Modificato il canvas da `500x500` a `500x600`.
* Modificata la gestione della gara per identificare il concorrente che raggiunge per primo la linea di arrivo.
* Modificata la gestione del vincitore, collegando il colore del concorrente al relativo argomento.

### Rimosso

* Rimosso il movimento condiviso tramite una singola variabile `circX`.
* Rimosso il movimento con velocità uguale per tutti i concorrenti.
* Rimosso il disegno dei concorrenti come cerchi.
* Rimosso il background grigio della versione precedente.

### Corretto

* Corretta la gestione della gara, permettendo di identificare il concorrente che arriva per primo.
* Corretta la gestione della posizione dei quattro concorrenti.
* Corretta l'associazione tra il concorrente vincitore, il suo colore e il relativo argomento.
* Corretta la gestione della fine della gara attraverso il controllo individuale della posizione di ogni concorrente.
* Aggiunta la gestione dello stato del gioco tramite `gameFinished`.
* Aggiunta la visualizzazione della domanda dopo la conclusione della gara.
