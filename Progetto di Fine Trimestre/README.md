# Progetto di fine trimestre

## 🎯 Obiettivo
Usare **tutto quello che avete imparato** (e non) su HTML, CSS e JavaScript per costruire un sito web **vostro**, originale, da zero.

Potete fare qualsiasi cosa: un gestionale, un gioco, uno strumento utile a voi (planner per lo studio, tracker degli allenamenti, gestione spese, pokédex interattivo, wiki personale, eccetera), il sito di un'attività vera o inventata, un portfolio interattivo... L'importante è che sia **originale** e che ci lavoriate **costantemente**.

Potete usare anche tag, proprietà CSS e funzioni JavaScript che non abbiamo visto in classe (è consigliato, se volete ottenere un voto alto).

Un requisito tecnico minimo è scoprire autonomamente come **effettuare chiamate API per recuperare dati esterni utili alla vostra webapp** (trovate un esempio più sotto). Anche l'uso di librerie JavaScript esterne per aggiungere animazioni, icone, interazioni eccetera può rendere il progetto molto più interessante e portare a un voto maggiore. C'è **una sola regola**:

> ⚠️ **Dovete saper spiegare il 100% del codice che consegnate.**
> Ogni riga, ogni selettore, ogni funzione. Se una parte non sapete spiegarla, quella parte non viene valutata.
> Usare l'AI o i tutorial per *capire* va bene, anzi vi consiglio di usarli per comprendere e imparare argomenti nuovi. Non è invece assolutamente accettabile copiare e incollare codice facendo fare tutto all'AI.

---

## 👥 Gruppi
- Lavoro **singolo** oppure **in coppia** (max 2 persone).
- In coppia **entrambi** devono saper spiegare **tutto** il progetto, non solo la propria parte.
- In coppia **entrambi** devono committare: dalla storia del repository si deve vedere chi ha fatto cosa.

---

## 📅 Tempistiche
| Fase | Cosa | Scadenza |
|---|---|---|
| 0 | File Excel compilato + repo creato + README con la **proposta** del progetto | 30/11 |
| 1 | Sviluppo (con commit costanti!) | fino all'8/12 |
| 2 | Consegna finale (fa fede l'ultima commit prima della scadenza) | 8/12 alle 23:59 |
| 3 | Inizio presentazioni e discussione orale | 9/12 |

La proposta (fase 0) va approvata dal docente prima di partire, per evitare progetti troppo banali o troppo grandi per il tempo a disposizione. Compilate correttamente il file Excel e vi verrà comunicato se la proposta va bene.

---

## ✅ Requisiti di consegna (obbligatori)

1. **Compilare il file Excel** con nome del gruppo, componenti e link al repository GitHub. Il file lo trovate a questo [link](https://istitutogreppi-my.sharepoint.com/:x:/g/personal/daniele_riva_issgreppi_it/IQD6OEb2y9-WQpwzJzpMntOPAbEAs67y075zoyUz5u0BZIc?e=xgcbxh)
2. **Creare un repository GitHub <ins>*PRIVATO*</ins>** chiamato `5IB-nomewebapp` e aggiungere come collaboratori (*Settings -> Collaborators -> Add people*):
   - l'eventuale compagno di coppia
   - `DanieleRiva`
   - `EliaSalerno`
3. **Committare SEMPRE E COMUNQUE ogni modifica.** Servono commit frequenti, con messaggi chiari che dicano cosa avete fatto, per esempio:
   - ✅ `Aggiunto form di registrazione con validazione email`
   - ✅ `Sistemato layout della navbar`
   - ❌ `update`, `fix`, `aaa`, `finito`

   Un repository con 3 commit giganti caricati l'ultimo giorno **non è accettabile**: serve almeno un commit per ogni sessione di lavoro, a scuola o a casa.
4. **File `README.md`** nella root del repository, compilato seguendo il `TEMPLATE_README.md` che trovate in questa cartella.
5. **Pubblicare il sito con [Altervista](https://it.altervista.org/)**

---

## 🧱 Requisiti tecnici minimi

Questi sono il **minimo** per la sufficienza. Più andate oltre, meglio è.

### HTML
- Almeno **3 pagine** collegate tra loro, oppure, per giochi e web app a pagina singola, almeno **3 schermate/sezioni** distinte
- HTML **semantico**: `header`, `nav`, `main`, `section`/`article`, `footer`, dove servono
- Almeno un **form** con validazione HTML (`required`, `type` adatti, `min`/`max`, `pattern`...)
- Immagini con un attributo `alt` sensato

### CSS
- Solo fogli di stile **esterni**: niente attributi `style=""` nell'HTML
- Layout costruito con **Flexbox** e/o **Grid**
- **Variabili CSS** (`--colore-primario: ...`) per palette e font
- Pseudo-classi (`:hover`, `:focus`...) e almeno una **transition** o **animation**

### JavaScript
- Solo file `.js` **esterni**, con eventi gestiti tramite `addEventListener` (niente `onclick=""` nell'HTML)
- **Manipolazione del DOM**: creare, modificare e rimuovere elementi in modo dinamico
- Gestione di almeno **2 tipi di evento** diversi (`click`, `submit`, `input`, `keydown`, `change`...)
- Uso di **array e/o oggetti** e di **cicli**
- Codice organizzato in **funzioni vostre**, senza blocchi copiati e incollati più volte
- **Persistenza dei dati** con `localStorage`: ricaricando la pagina i dati non si perdono (record del gioco, elementi del gestionale, preferenze, tema chiaro/scuro...)
- Almeno una **chiamata a un'API esterna** con `fetch`, gestendo gli errori e lo stato di caricamento

### Cosa si può usare (e cosa no)
- ✅ Google Fonts e librerie aggiuntive (icone, animazioni, grafici...).
- ❌ Template già pronti scaricati da internet.

---

## 🌐 Come usare un'API esterna

Un'API web è un indirizzo (URL) a cui il vostro sito può **chiedere dei dati**. Il server risponde quasi sempre in **JSON**, cioè oggetti e array JavaScript scritti come testo.

> ⚠️ **L'API del meteo usata in questo esempio NON può essere usata nel vostro progetto.** Serve solo a capire il meccanismo: dovete cercare e studiare da soli un'API adatta alla vostra webapp.

### 1. Guardate la risposta
Aprite questo link nel browser:
https://api.open-meteo.com/v1/forecast?latitude=45.46&longitude=9.19&current=temperature_2m,wind_speed_10m

La risposta è un JSON di questo tipo:
```json
{
  "latitude": 45.46,
  "longitude": 9.19,
  "current": {
    "time": "2026-11-27T10:00",
    "temperature_2m": 8.3,
    "wind_speed_10m": 6.1
  }
}
```
Quindi la temperatura si trova in `dati.current.temperature_2m`.

### 2. Fate la chiamata da JavaScript
```js
async function getMeteo() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=45.46&longitude=9.19&current=temperature_2m,wind_speed_10m";

  try {
    const risposta = await fetch(url);          // 1. richiesta al server

    if (!risposta.ok) {                         // 2. il server ha risposto con un errore?
      throw new Error(`Errore HTTP ${risposta.status}`);
    }

    const dati = await risposta.json();         // 3. da testo JSON a oggetto JavaScript

    const temperatura = dati.current.temperature_2m;   // 4. prendo i dati che mi servono
    const vento = dati.current.wind_speed_10m;
    console.log(`A Milano ci sono ${temperatura}°C, vento a ${vento} km/h`);

  } catch (errore) {                            // 5. se qualcosa va storto
    console.error("Errore:", errore.message);
  }
}

getMeteo();
```

### Cosa significa
- **`fetch(url)`** fa la richiesta. Non restituisce subito i dati ma una **Promise**, cioè una "promessa" che i dati arriveranno.
- **`await`** aspetta che la promessa si risolva. Si può usare solo dentro una funzione **`async`**.
- **`risposta.ok`** è `true` se il server ha risposto correttamente (codici 200-299) e `false` in caso di errore (per esempio 404).
- **`risposta.json()`** converte la risposta in un oggetto JavaScript. Anche questa va aspettata con `await`.
- **`try` / `catch`** intercetta gli errori (niente connessione, URL sbagliato...) senza bloccare il sito.

Da qui in poi i dati sono un normale oggetto JavaScript: sta a voi mostrarli nella pagina manipolando il DOM.

### Cose utili
- Usate `console.log(dati)` e aprite la console (F12) per esplorare l'oggetto e trovare il "percorso" del dato che vi serve.
- La scheda **Network** degli strumenti per sviluppatori mostra tutte le richieste fatte, con il codice di stato e la risposta.
- Una lista enorme di API gratuite la trovate qui: https://github.com/public-apis/public-apis
- In alternativa, è possibile usare l'AI per trovare API interessanti

### ⚠️ Attenzione
- Alcune API bloccano le richieste fatte dal browser (errore **CORS** nella console). Se vi succede, cambiate API.
- Mostrate sempre all'utente quando i dati **stanno caricando** e quando **qualcosa è andato storto**.

---

## 🎤 Discussione orale
Ogni gruppo presenta il progetto e poi risponde alle domande sul codice. Il docente può:
- chiedervi di spiegare qualsiasi riga, selettore o funzione;
- chiedervi di **modificare qualcosa dal vivo** (cambiare un colore, aggiungere un campo al form, modificare il comportamento di una funzione);
- chiedervi perché avete fatto una scelta invece di un'altra;
- guardare la storia dei commit e chiedervi di un commit in particolare.

Se un blocco di codice compare tutto insieme in un unico commit e non lo sapete spiegare, verrà considerato non vostro.

---

## 📚 Fonti e strumenti
Potete usare lezioni passate, documentazione, tutorial, forum e AI per **capire e imparare**. Nel README dovete però indicare **cosa avete usato e per cosa**.